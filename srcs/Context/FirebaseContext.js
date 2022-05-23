import React, { createContext, useState, useEffect } from 'react';
import { initializeAppIfNecessary } from './../../FirebaseConfig';
import { getFirestore, collection, getDocs, doc, setDoc, getDoc, addDoc, query, where, deleteDoc, orderBy, onSnapshot } from 'firebase/firestore';
import { Alert } from 'react-native';





export const FirebaseContext = createContext({});


export default function FirebaseProvider({ children }) {

    initializeAppIfNecessary();

    const db = getFirestore();


    const [valorRecuperadoGetWithId, setValorRecuperadoGetWithId] = useState();
    const [dadosRecuperados, setDadosRecuperados] = useState([]);
    const [listaDados, setListaDados] = useState([]);







    //Salvar o arquivo e gerar uma nova key_id

    async function salvar_dados(tituloDocumento, documento, id) {

        
        

        await addDoc(collection(db, tituloDocumento), {

            documento,
            id,
            data: new Date()

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

    async function recuperar_dados_atributos_personalizados(tituloDocumento, atributo_db, atributo_user) {




        const q = query(collection(db, tituloDocumento), where(atributo_db, "==", atributo_user), orderBy('data', 'desc'));
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
            deletar_documento,
            valorRecuperadoGetWithId,
            dadosRecuperados,
            listaDados
        }}>

            {children}

        </FirebaseContext.Provider>
    )

}