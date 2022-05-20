import React, { createContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import { initializeAppIfNecessary } from '../../FirebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs, doc, setDoc, getDoc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';




export const AuthContext = createContext({});

export default function AuthProvider({ children }) {


    initializeAppIfNecessary();

    const [usuario, setUsario] = useState();
    const [loading, setLoading] = useState(false);
    
    const [numPneu, setNumPneu] = useState();
    const [servico, setServico] = useState();
    const [formaPagamento, setFormaPagamento] = useState();



    const auth = getAuth();
    const db = getFirestore();



    const Para_Loading = () => {
        setLoading(false);
    }

    const Iniciar_Loading = () => {
        setLoading(true);
    }





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

                }).catch((x) => {
                    alert(x);
                    Para_Loading()

                })







            })

    }



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
                    // doc.data() will be undefined in this case
                    alert("Esse usuario é fantasma!");
                    Para_Loading();

                }






            }).catch((error) => {
                alert(error);
                Para_Loading();

            })

    }




    const Salvar_data_local = async (value) => {
        try {
            const data = JSON.stringify(value)
            await AsyncStorage.setItem('@dadosUsuario', data)
        } catch (e) {
            // saving error
        }
    }


    const removeData = async () => {
        await AsyncStorage.removeItem('@dadosUsuario');
    }



    function get_numPneu(value){
        setNumPneu(value); 
    }



    function get_servico(value){
        setServico(value);

    }



    function get_formaPagamento(value){
        setFormaPagamento(value);
    }




    return (
        <AuthContext.Provider value={{ verifica_user_logado: !!usuario, usuario, criar_conta, login, loading, get_numPneu, get_servico, get_formaPagamento, numPneu, servico, formaPagamento }}>
            {children}
        </AuthContext.Provider>
    )


}