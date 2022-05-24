import React, { useState, useEffect, useContext } from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import CardHeader from '../../Adapters/CardHeader';
import BotaoVoltarAoInicio from '../../Componentes/BotaoVoltarAoInicio';
import { StackActions, useNavigation } from '@react-navigation/native';
import { colorBrancoFosco } from '../../../Paleta_cores';
import { getFirestore, collection, getDocs, doc, setDoc, getDoc, addDoc,updateDoc , query, where, deleteDoc, orderBy, onSnapshot } from 'firebase/firestore';
import { initializeAppIfNecessary } from '../../../FirebaseConfig';




export default function GridFiltros() {


    initializeAppIfNecessary();
    const db = getFirestore();


    const navegacao = useNavigation();
    




    const [emEspera, setEmEspera] = useState([]);
    const [aCaminho, setCaminho] = useState([]);
    const [local, setLocal] = useState([]);
    const [concluido, setConcluido] = useState([]);
    const [noPago, setNoPago] = useState([]);
    const [cancelado, setCancelado] = useState([]);







    useEffect(() => {

        async function recupera1() {


            const q = query(collection(db, 'atendimentos'), where('status', "==", 0), orderBy('data', 'desc'));
            const querySnapshot = onSnapshot(q, (querySnap) => {

                const lista = ([]);

                querySnap.forEach(doc => {

                    lista.push({
                        ...doc.data(),
                        id: doc.id
                    });
                });


                setEmEspera(lista); 


            });


        }

        recupera1();

    }, [])




    


    useEffect(() => {

        async function recupera1() {


            const q = query(collection(db, 'atendimentos'), where('status', "==", 1), orderBy('data', 'desc'));
            const querySnapshot = onSnapshot(q, (querySnap) => {

                const lista = ([]);

                querySnap.forEach(doc => {

                    lista.push({
                        ...doc.data(),
                        id: doc.id
                    });
                });


                setCaminho(lista); 


            });


        }

        recupera1();

    }, [])







    useEffect(() => {

        async function recupera1() {


            const q = query(collection(db, 'atendimentos'), where('status', "==", 2), orderBy('data', 'desc'));
            const querySnapshot = onSnapshot(q, (querySnap) => {

                const lista = ([]);

                querySnap.forEach(doc => {

                    lista.push({
                        ...doc.data(),
                        id: doc.id
                    });
                });


                setLocal(lista); 


            });


        }

        recupera1();

    }, [])




    
    useEffect(() => {

        async function recupera1() {


            const q = query(collection(db, 'atendimentos'), where('status', "==",3), orderBy('data', 'desc'));
            const querySnapshot = onSnapshot(q, (querySnap) => {

                const lista = ([]);

                querySnap.forEach(doc => {

                    lista.push({
                        ...doc.data(),
                        id: doc.id
                    });
                });


                setConcluido(lista); 


            });


        }

        recupera1();

    }, [])






    
    
    useEffect(() => {

        async function recupera1() {


            const q = query(collection(db, 'atendimentos'), where('status', "==", 4), orderBy('data', 'desc'));
            const querySnapshot = onSnapshot(q, (querySnap) => {

                const lista = ([]);

                querySnap.forEach(doc => {

                    lista.push({
                        ...doc.data(),
                        id: doc.id
                    });
                });


                setNoPago(lista); 


            });


        }

        recupera1();

    }, [])







    
    
    
    useEffect(() => {

        async function recupera1() {


            const q = query(collection(db, 'atendimentos'), where('status', "==", 5), orderBy('data', 'desc'));
            const querySnapshot = onSnapshot(q, (querySnap) => {

                const lista = ([]);

                querySnap.forEach(doc => {

                    lista.push({
                        ...doc.data(),
                        id: doc.id
                    });
                });


                setCancelado(lista); 


            });


        }

        recupera1();

    }, [])












    function handler_voltar() {
        navegacao.dispatch(StackActions.replace('PainelAdm'));
    }



    

    function handler_att() {
        navegacao.dispatch(StackActions.replace('Atendimentos'));
    }












    return (
        <SafeAreaView style={css.bg}>


            <View style={css.header}>

                <BotaoVoltarAoInicio
                    acao={handler_voltar}
                    titulo={'Voltar ao inicio'} />


            </View>

            <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <ScrollView>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <CardHeader acao={handler_att} quantidade={emEspera.length} tituloCard={'Em espera'} />
                        <CardHeader quantidade={aCaminho.length} tituloCard={'A caminho'} />
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <CardHeader quantidade={local.length} tituloCard={'No local'} />
                        <CardHeader quantidade={concluido.length} tituloCard={'Concluidos'} />
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <CardHeader quantidade={noPago.length} tituloCard={'Não pagos'} />
                        <CardHeader quantidade={cancelado.length} tituloCard={'Cancelados'} />
                    </View>



                </ScrollView>

            </View>

        </SafeAreaView>


    );
}





const css = StyleSheet.create({

    bg: {
        flex: 1,
        backgroundColor: colorBrancoFosco

    },

    header: {
        padding: 15,
        backgroundColor: 'white'
    },

    body: {
        flex: 2,
        margin: 10,
    }



})