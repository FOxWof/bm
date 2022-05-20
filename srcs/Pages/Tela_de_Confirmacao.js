import React, { useState, useEffect, useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, ScrollView, StatusBar, Dimensions, TextInput } from 'react-native';
import BotaoVoltarAoInicio from './../Componentes/BotaoVoltarAoInicio';
import { useNavigation } from '@react-navigation/native';
import CardInput from './../Componentes/CardInput';
import CardText from '../Componentes/CardText';
import { colorFacebookAzul, colorPretoMaisFraco, colorBranco } from './../../Paleta_cores';
import CardInputForm from '../Componentes/CardInputForm';
import PickerSelect from './../Componentes/PickerSelect';
import PickerSelectServico from '../Componentes/PickerSelectServico';
import PickerSelectPagamento from '../Componentes/PickerSelectPagamento';
import BotaoAzul from './../Componentes/BotaoAzul';
import { AuthContext } from '../Context/AuthContext';






export default function Tela_de_Confirmacao(props) {

    const navegacao = useNavigation();
    const dados = props.route.params

  



    function h_tela_de_orcamento() {

        navegacao.navigate('Tela_de_Orcamento');

    }






    return (
        <SafeAreaView style={css.bg}>
            <StatusBar hidden={true} />
            <ScrollView>

                <View style={{ padding: 15 }}>


                    <BotaoVoltarAoInicio
                        acao={h_tela_de_orcamento} />



                    <CardText
                        titulo={'dados fixo'}
                        icone={'location'}
                        iconeCor={colorPretoMaisFraco}
                    />


                    <CardText
                        titulo={dados.dados}
                        icone={'location'}
                        iconeCor={"#ff0000"}
                    />


                    <BotaoAzul
                        titulo={'Confirmar atendimento'} />



                </View>

            </ScrollView>



        </SafeAreaView>
    );
}


const css = StyleSheet.create({


    bg: {
        flex: 1,
        backgroundColor: '#fafafa'
    },

    footerText: {
        width: 200,
        color: "#8fa7b3",
    },

})