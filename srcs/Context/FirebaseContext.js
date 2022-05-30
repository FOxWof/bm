import React, { createContext, useState, useEffect } from 'react';
import { initializeAppIfNecessary } from './../../FirebaseConfig';
import { getFirestore, collection, getDocs, doc, setDoc, getDoc, addDoc, updateDoc, query, where, deleteDoc, orderBy, onSnapshot } from 'firebase/firestore';
import { Alert } from 'react-native';





export const FirebaseContext = createContext({});


export default function FirebaseProvider({ children }) {

    initializeAppIfNecessary();

    const db = getFirestore();


    const [valorRecuperadoGetWithId, setValorRecuperadoGetWithId] = useState();
    const [dadosRecuperados, setDadosRecuperados] = useState([]);
    const [listaDados, setListaDados] = useState([]);
    const [dadosData, setDadosData] = useState([]);






    //Atuaizar um documento 

    async function atualiza_documento(tituloDocumento, doc_id, valor) {

        const refDocUpdate = doc(db, tituloDocumento, doc_id);

        await updateDoc(refDocUpdate, {
            status: valor
        });

    }









    //Salvar o arquivo e gerar uma nova key_id

    async function salvar_dados(tituloDocumento, documento, id) {




        await addDoc(collection(db, tituloDocumento), {

            documento,
            id,
            data: new Date(),
            status: 0

        }).catch((x) => {

            Alert.alert(x);

        })

    }



    //Salvar o arquivo e usando um id customizado para ser a key do arquivo no firestore

    async function salvar_dados_comId_noDoc(tituloDocumento, documento, id) {


        await setDoc(doc(db, tituloDocumento, id), {
            documento,
            status: 0,
            data: new Date()
        }).then((x) => {


        }).catch((x) => {



        })


    }



    //Recuperar arquivo usando o id customizado como key do arquivo

    async function recupera_dados_comId_noDoc(tituloDocumento, id) {

        const refDoc = doc(db, tituloDocumento, id);
        const docRecuperado = await getDoc(refDoc);

        if (docRecuperado.exists()) {

            setValorRecuperadoGetWithId(docRecuperado.data());


        }

    }




    //Recuperar todos os documentos em uma coleção

    async function recuperar_todos_dados_colecao(tituloDocumento) {

        const querySnapshot = await getDocs(collection(db, tituloDocumento));
        querySnapshot.forEach((doc) => {

            let list = ([]);

            list.push({

                ...doc.data(),
                id: doc.id

            })


            setDadosRecuperados(list);

        });
    }






    //Recuperar documentos em uma coleção com atributos personalizados com o where

    async function recuperar_dados_atributos_personalizados(tituloDocumento, atributo_db, atributo_user, ordem) {




        const q = query(collection(db, tituloDocumento), where(atributo_db, "==", atributo_user), orderBy('data', ordem));
        const querySnapshot = onSnapshot(q, (querySnap) => {

            const lista = ([]);

            querySnap.forEach(doc => {

                lista.push({
                    ...doc.data(),
                    id: doc.id
                });
            });


            setListaDados(lista);



        });



    }




    function limparQuery() {

        setListaDados([])

    }











    //Recuperar documentos em uma coleção com atributos personalizados com o where

    async function recuperar_dados_pela_data(tituloDocumento) {




        const q = query(collection(db, tituloDocumento), orderBy('data', 'asc'));
        const querySnapshot = onSnapshot(q, (querySnap) => {

            const lista = ([]);

            querySnap.forEach(doc => {

                lista.push({
                    ...doc.data(),
                    id: doc.id
                });
            });


            setDadosData(lista);



        });



    }








    //Remover data no firestore

    async function deletar_documento(titulo, id_doc) {

        await deleteDoc(doc(db, titulo, id_doc));

    }










    return (
        <FirebaseContext.Provider value={{

            salvar_dados_comId_noDoc,
            recupera_dados_comId_noDoc,
            salvar_dados, recuperar_todos_dados_colecao,
            recuperar_dados_atributos_personalizados,
            recuperar_dados_pela_data,
            deletar_documento,
            dadosData,
            valorRecuperadoGetWithId,
            dadosRecuperados,
            listaDados,
            limparQuery,
            atualiza_documento
        }}>

            {children}

        </FirebaseContext.Provider>
    )

}