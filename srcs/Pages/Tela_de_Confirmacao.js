import React, { useState, useEffect, useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, ScrollView, StatusBar, Dimensions, TextInput } from 'react-native';
import BotaoVoltarAoInicio from './../Componentes/BotaoVoltarAoInicio';
import { useNavigation } from '@react-navigation/native';
import CardText from '../Componentes/CardText';
import { colorFacebookAzul, colorPretoMaisFraco, colorBranco } from './../../Paleta_cores';
import BotaoAzul from './../Componentes/BotaoAzul';
import { nomeFix } from './../../LocationFix';
import { FirebaseContext } from './../Context/FirebaseContext';







export default function Tela_de_Confirmacao(props) {





    //CONST
    const { recuperar_dados_atributos_personalizados } = useContext(FirebaseContext);
    const user_id = props.route.params
    const navegacao = useNavigation();











    //LETS
    console.log(user_id);









    //USEEFFECTS

    useEffect(() => {

        recuperar_dados_atributos_personalizados("orcamento", "user_id",user_id);
        


    }, [])









    //FUNCS

    function h_tela_de_orcamento() {

        navegacao.navigate('Tela_de_Orcamento');

    }










    return (
        <SafeAreaView style={css.bg}>
            <StatusBar hidden={true} />
            <ScrollView>

                <View style={{ padding: 15 }}>


                    <BotaoVoltarAoInicio
                        titulo={'Voltar'}
                        acao={h_tela_de_orcamento} />


                    <CardText
                        titulo={nomeFix}
                        icone={'location'}
                        iconeCor={"#ff0000"}
                    />

                    <CardText
                        titulo={'Local_atual_user'}
                        icone={'location'}
                        iconeCor={colorPretoMaisFraco}
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