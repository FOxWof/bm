import React, { useState, useEffect, useContext } from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import CardHeader from '../../Adapters/CardHeader';
import BotaoVoltarAoInicio from '../../Componentes/BotaoVoltarAoInicio';
import { StackActions, useNavigation } from '@react-navigation/native';
import { colorBrancoFosco } from '../../../Paleta_cores';
import { getFirestore, collection, getDocs, doc, setDoc, getDoc, addDoc, updateDoc, query, where, deleteDoc, orderBy, onSnapshot } from 'firebase/firestore';
import { initializeAppIfNecessary } from '../../../FirebaseConfig';
import ModalAtendimentos from '../../Componentes/ModalAtendimentos';




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


    const [abre, setAbre] = useState(false);
    const [abrecam, setAbreCam] = useState(false);
    const [abreLocal, setAbreLocal] = useState(false);
    const [abreConcluidos, setAbreConcluidos] = useState(false);
    const [abreNoPagos, setAbreNoPagos] = useState(false);
    const [abreCancelados, setAbreCancelados] = useState(false);

    const fechar = () => setAbre(false);
    const fecharCam = () => setAbreCam(false);
    const fecharLocal = () => setAbreLocal(false);
    const fecharConc = () => setAbreConcluidos(false);
    const fecharNoPagos = () => setAbreNoPagos(false);
    const fecharCancelados = () => setAbreCancelados(false);





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


            const q = query(collection(db, 'atendimentos'), where('status', "==", 3), orderBy('data', 'desc'));
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
        setAbre(true)
    }




    function h_caminho() {
        setAbreCam(true);
    }



    function h_local() {
        setAbreLocal(true)
    }




    function h_concluido() {
        setAbreConcluidos(true);
    }





    function h_naoPagos() {
        setAbreNoPagos(true)
    }




    function h_cancelados() {
        setAbreCancelados(true);
    }











    return (
        <SafeAreaView style={css.bg}>
            <ScrollView>
                <ModalAtendimentos tituloBotao={'Atendimentos a caminho'} hidden={fecharCam} data={aCaminho} visible={abrecam} />
                <ModalAtendimentos tituloBotao={'Atendimentos em espera'} hidden={fechar} data={emEspera} visible={abre} />

                <ModalAtendimentos tituloBotao={'Atendimentos concluidos'} hidden={fecharConc} data={concluido} visible={abreConcluidos} />
                <ModalAtendimentos tituloBotao={'Atendimentos no local'} hidden={fecharLocal} data={local} visible={abreLocal} />

                <ModalAtendimentos tituloBotao={'Atendimentos cancelados'} hidden={fecharCancelados} data={cancelado} visible={abreCancelados} />
                <ModalAtendimentos tituloBotao={'Atendimentos não pagos'} hidden={fecharNoPagos} data={noPago} visible={abreNoPagos} />






                <View style={css.grid}>



                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <CardHeader acao={handler_att} quantidade={emEspera.length} tituloCard={'Em espera'} />
                        <CardHeader acao={h_caminho} quantidade={aCaminho.length} tituloCard={'A caminho'} />
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <CardHeader acao={h_local} quantidade={local.length} tituloCard={'No local'} />
                        <CardHeader acao={h_concluido} quantidade={concluido.length} tituloCard={'Concluidos'} />
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <CardHeader acao={h_naoPagos} quantidade={noPago.length} tituloCard={'Não pagos'} />
                        <CardHeader acao={h_cancelados} quantidade={cancelado.length} tituloCard={'Cancelados'} />
                    </View>




                </View>
            </ScrollView>

        </SafeAreaView>


    );
}





const css = StyleSheet.create({

    bg: {
        flex: 1,
        backgroundColor: 'white'

    },

    header: {
        padding: 15,
        backgroundColor: 'white'
    },

    body: {
        flex: 2,
        margin: 10,
    },

    grid: { flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 20 }



})