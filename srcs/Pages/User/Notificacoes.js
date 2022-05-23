import React from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
import BotaoVoltarAoInicio from '../../Componentes/BotaoVoltarAoInicio';
import CardNotificacoes from '../../Adapters/CardNotificacoes';




export default function Notificacoes() {


    //CONST

    const navegacao = useNavigation();










    //FUNCS
 


    function handler_voltar() {
        navegacao.dispatch(StackActions.replace('Inicio'));
    }






    return (
        <SafeAreaView style={css.bg}>
            <ScrollView>

                <View style={css.header}>

                    <BotaoVoltarAoInicio
                        acao={handler_voltar}
                        titulo={'Voltar ao inicio'} />


                </View>

                <View style={css.body}>
                    <CardNotificacoes />
                </View>


            </ScrollView>

        </SafeAreaView>
    );
}


const css = StyleSheet.create({

    bg: {
        flex: 1
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