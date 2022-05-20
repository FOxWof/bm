import React, { createContext, useState, useEffect } from 'react';
import { initializeAppIfNecessary } from './../../FirebaseConfig';
import { getFirestore, collection, getDocs, doc, setDoc, getDoc, addDoc, query, where } from 'firebase/firestore';
import { Alert } from 'react-native';





export const FirebaseContext = createContext({});


export default function FirebaseProvider({ children }) {

    initializeAppIfNecessary();

    const db = getFirestore();


    const [localizacaoUserRecuperada, setLocalizacaoUserRecuperada] = useState();




    //Salvar o arquivo e gerar uma nova key_id

    async function salvar_dados(tituloDocumento, documento) {

        await addDoc(collection(db, tituloDocumento), {

            documento,

        }).catch((x) => {

            Alert.alert(x);

        })

    }



    //Salvar o arquivo e usando um id customizado para ser a key do arquivo no firestore

    async function salvar_dados_comId_noDoc(tituloDocumento, documento, id) {


        await setDoc(doc(db, tituloDocumento, id), {
            documento
        }).then((x) => {


        }).catch((x) => {



        })


    }



    //Recuperar arquivo usando o id customizado como key do arquivo

    async function recupera_dados_comId_noDoc(tituloDocumento, id) {

        const refDoc = doc(db, tituloDocumento, id);
        const docRecuperado = await getDoc(refDoc);

        if (docRecuperado.exists()) {

            setLocalizacaoUserRecuperada(docRecuperado.data());


        }

    }




    //Recuperar todos os documentos em uma coleção

    async function recuperar_todos_dados_colecao(tituloDocumento) {

        const querySnapshot = await getDocs(collection(db, tituloDocumento));
        querySnapshot.forEach((doc) => {

            console.log(doc.id, " => ", doc.data());

        });
    }






    //Recuperar documentos em uma coleção com atributos personalizados com o where

    async function recuperar_dados_atributos_personalizados(tituloDocumento, atributo_db, atributo_user) {


        const q = query(collection(db, tituloDocumento), where(atributo_db, "==", atributo_user));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {

            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());

        });

    }









    return (
        <FirebaseContext.Provider value={{ salvar_dados_comId_noDoc, recupera_dados_comId_noDoc, salvar_dados, recuperar_todos_dados_colecao, recuperar_dados_atributos_personalizados, localizacaoUserRecuperada }}>
            {children}
        </FirebaseContext.Provider>
    )

}