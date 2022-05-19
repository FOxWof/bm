import React, { useState, useEffect } from 'react';
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





export default function Tela_de_Orcamento(props) {

    const navegacao = useNavigation();
    const dados = props.route.params
    const [numPneu, setSelectedLanguage] = useState();




    function h_orcamento() {

        navegacao.navigate('Inicio');

    }




    return (
        <SafeAreaView style={css.bg}>
            <StatusBar hidden={true} />
            <ScrollView>

            <View style={{ padding: 15 }}>


                    <BotaoVoltarAoInicio
                        acao={h_orcamento} />



                    <CardText
                        titulo={dados}
                        icone={'location'}
                        iconeCor={colorPretoMaisFraco}
                    />


                    <CardInputForm
                        titulo={'Veículo'}
                        icone={'car-outline'}
                        hint={'Informe o modelo do seu veículo'}
                        iconeColor={colorPretoMaisFraco}
                    />


                    <PickerSelect />

                    <PickerSelectServico/>

                    <PickerSelectPagamento/>


                    <BotaoAzul
                    titulo={'Confirmar orçamento'}/>



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