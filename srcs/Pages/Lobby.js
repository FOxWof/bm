import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, ScrollView, StatusBar } from 'react-native';
import BotaoAzul from '../Componentes/BotaoAzul';
import BotaoBranco from '../Componentes/BotaoBranco';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';





export default function Lobby() {

    const navigation = useNavigation();



    function h_Login() {
        navigation.navigate('Entrar');
    }



    function h_Cadastro() {
        navigation.navigate('Cadastro');
    }





    return (
        <SafeAreaView style={css.bg}>
            <ImageBackground style={css.ImgBG} resizeMode='cover' source={require('../../bgcar.jpg')}>
                <StatusBar hidden={true} />

                <Animatable.View style={{padding: 10}} animation="fadeInUpBig">

                    <BotaoAzul
                        acao={h_Login}
                        titulo={'Entrar'} />

                    <BotaoBranco
                        acao={h_Cadastro}
                        titulo={'Criar Conta'}
                    />

                    

                </Animatable.View>


            </ImageBackground>
        </SafeAreaView>
    );
}



const css = StyleSheet.create({

    bg: {
        flex: 1,
    },

    ImgBG: {
        height: '100%',
        width: '100%', 
        justifyContent: 'flex-end', 


    }

})