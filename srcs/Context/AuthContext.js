import React, { createContext, useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { initializeAppIfNecessary } from '../../FirebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs, doc, setDoc, getDoc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';




export const AuthContext = createContext({});

export default function AuthProvider({ children }) {


    initializeAppIfNecessary();

    const [usuario, setUsario] = useState();
    const [loading, setLoading] = useState(false);





    const auth = getAuth();
    const db = getFirestore();



    const Para_Loading = () => {
        setLoading(false);
    }

    const Iniciar_Loading = () => {
        setLoading(true);
    }




    //Recupera data do user que ja logou

    useEffect(() => {



        async function recupera_user_local() {



            try {
                const jsonValue = await AsyncStorage.getItem('@dadosUsuario')
                jsonValue != null ? JSON.parse(jsonValue) : null;

                setUsario(JSON.parse(jsonValue));


                return;



            } catch (e) {
                // error reading value
            }



        }




        recupera_user_local();

    }, [])





    //function de criar conta

    async function criar_conta(email, password, nome, whatsapp) {

        Iniciar_Loading();


        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (user_credencial) => {

                const user = user_credencial.user;
                const user_id = user_credencial.user.uid;

                let dados = {
                    user_id: user_id,
                    email: email,
                    senha: password,
                    whatsapp: whatsapp,
                    nome: nome,
                    fotoPerfil: null
                }

                let dados_completos = {
                    tipo: 0,
                    dados
                }


                await setDoc(doc(db, "usuarios", user_id), {
                    tipo: 0,
                    dados

                }).then(() => {

                    Salvar_data_local(dados_completos);
                    setUsario(dados_completos);
                    Para_Loading()

                }).catch(error => {

                    if (error.code === 'auth/email-already-in-use') {

                        Alert.alert('Email em uso. Já existe uma conta com o endereço de e-mail fornecido');
                        Para_Loading();


                    }

                    if (error.code === 'auth/invalid-email') {

                        Alert.alert('Digite um e-mail real. Esse e-mail que você digitou é invalido');
                        Para_Loading();


                    }

                    if (error.code === 'auth/weak-password') {
                        Alert.alert('Senha Fraca. Insira uma senha maior e mais segura');
                        Para_Loading();
                    }

                });







            })

    }



    //function de login

    async function login(email, password) {

        Iniciar_Loading();

        await signInWithEmailAndPassword(auth, email, password)
            .then(async (user) => {

                const user_id = user.user.uid;

                const userRef = doc(db, "usuarios", user_id);
                const docSnap = await getDoc(userRef);

                if (docSnap.exists()) {

                    setUsario(docSnap.data());
                    Salvar_data_local(docSnap.data());
                    Para_Loading();


                } else {
                    Alert.alert("Temos um", "Esse usuario é fantasma!");
                    Para_Loading();

                }






            }).catch(error => {

                if (error.code === 'auth/invalid-email') {

                    Alert.alert('Erro ao logar', 'Digite um e-mail real. Esse e-mail que você digitou é invalido');
                    Para_Loading();

                }


                if (error.code === 'auth/user-disabled') {

                    Alert.alert('Error ao entrar','Usuário bloqueado. Usuário correspondente ao e-mail fornecido foi desabilitado');
                    Para_Loading();

                }


                if (error.code === 'auth/user-not-found') {
                    //nenhum usuario encontrado 
                    Alert.alert('Error ao entrar','Usuário não foi encontrado');
                    Para_Loading();

                }

                if (error.code === 'auth/wrong-password') {

                      Alert.alert('Error ao entrar','Senha incorreta');
                      Para_Loading();
                }

            })

    }




    //function de salvar data do user localmente

    const Salvar_data_local = async (value) => {
        try {
            const data = JSON.stringify(value)
            await AsyncStorage.setItem('@dadosUsuario', data)
        } catch (e) {
            // saving error
        }
    }



    //function de remover data do user localmente

    const removeData = async () => {
        await AsyncStorage.removeItem('@dadosUsuario');
    }






    return (
        <AuthContext.Provider value={{ verifica_user_logado: !!usuario, usuario, criar_conta, login, loading }}>
            {children}
        </AuthContext.Provider>
    )


}