import React, { useState, useContext, useEffect } from 'react';
import { View, SafeAreaView, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AuthContext } from '../../Context/AuthContext';
import { FirebaseContext } from '../../Context/FirebaseContext';
import CardComImg from '../../Componentes/CardComImg';
import { useNavigation, StackActions } from '@react-navigation/native';
import BotaoBranco from './../../Componentes/BotaoBranco';






export default function PainelAdm() {





    const navegacao = useNavigation();
    const { deslogar } = useContext(AuthContext);
    const { limparQuery } = useContext(FirebaseContext);


    const imgCard1 = require('../../Imgs/atendimento.jpg');
    const imgCard2 = require('../../Imgs/orcamento.jpg');
    const imgCard3 = require('../../Imgs/clientes.jpg');
    const imgCard4 = require('../../Imgs/colaboradores.jpg');











    useEffect(() => {

        limparQuery();

    }, [])














    function irParaAtendimentos() {

        navegacao.dispatch(StackActions.push('GridFiltros'));

    }



    function irParaOrcamentos() {

        navegacao.dispatch(StackActions.replace('Orcamentos'));

    }



    function irParaClientes() {

        navegacao.dispatch(StackActions.replace('Clientes'));

    }



    function irParaColaboradores() {

        navegacao.dispatch(StackActions.replace('Colaboradores'));

    }






    return (
        <SafeAreaView style={css.bg}>

            <ScrollView>

                <View style={css.header}>
                    <BotaoBranco acao={deslogar} titulo={'Deslogar'} />

                </View>




                <View style={css.body}>

                    <View style={css.containerCards}>
                        <CardComImg acao={irParaAtendimentos} imageCard={imgCard1} tituloCard={'Atendimentos'} />
                        <CardComImg acao={irParaOrcamentos} imageCard={imgCard2} tituloCard={'Orçamentos'} />
                    </View>


                    <View style={css.containerCards}>

                        <CardComImg acao={irParaClientes} imageCard={imgCard3} tituloCard={'Clientes'} />
                        <CardComImg acao={irParaColaboradores} imageCard={imgCard4} tituloCard={'Colaboradores'} />

                    </View>


                    <View style={css.containerCards}>

                        <CardComImg acao={irParaClientes} imageCard={imgCard3} tituloCard={'Relatorios'} />
                        <CardComImg acao={irParaColaboradores} imageCard={imgCard4} tituloCard={'Veiculos'} />

                    </View>

                </View>


            </ScrollView>

        </SafeAreaView>
    );
}


const css = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: 'white',

    },

    header: {
        padding: 20


    },

    body: {

        paddingTop: 20,
        backgroundColor: 'white'

    },

    containerCards: { flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 5 }
})