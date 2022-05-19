import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import BotaoAzul from '../Componentes/BotaoAzul';
import CardInput from '../Componentes/CardInput';
import BotaoVoltarAoInicio from './../Componentes/BotaoVoltarAoInicio';
import { useNavigation, StackActions } from '@react-navigation/native';
import BotaoBranco from './../Componentes/BotaoBranco';




export default function Cadastro() {

  const navegacao = useNavigation();


  function voltarAoLobby() {

    navegacao.dispatch(StackActions.popToTop())


  }



  return (
    <SafeAreaView style={css.bg}>
      <View style={css.ImgBG}>

        <ScrollView>

          <BotaoVoltarAoInicio acao={voltarAoLobby} />

          <CardInput
            titulo={'Email'}
            hint={'Insira seu e-mail'}
            icone={'mail-outline'}
            senha={false}
            tipoTeclado={'email-address'}
          />


          <CardInput
            titulo={'Senha'}
            hint={'Insira sua senha'}
            icone={'key-outline'}
            senha={true}
          />




          <CardInput
            titulo={'Nome'}
            hint={'Insira seu nome'}
            icone={'person-outline'}
            senha={false} 
          />

          <CardInput
            titulo={'Whatsapp'}
            hint={'Insira seu whatsapp'}
            icone={'logo-whatsapp'}
            senha={false}
            tipoTeclado={'numeric'}
            qntdLetras={11}
          />



          <BotaoBranco
            acao={""}
            titulo={'Criar Conta'} />


        </ScrollView>

      </View>
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
    padding: 15,
    justifyContent: 'flex-end'

  }

})