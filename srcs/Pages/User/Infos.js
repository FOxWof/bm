import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, BackHandler, Alert, FlatList, ScrollView } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { FirebaseContext } from '../../Context/FirebaseContext';
import { AuthContext } from '../../Context/AuthContext';
import BotaoVoltarAoInicio from '../../Componentes/BotaoVoltarAoInicio';
import CardBotao from '../../Componentes/CardBotao';



export default function Infos() {
  
  const navegacao = useNavigation();


  function handler_voltar(){
    navegacao.dispatch(StackActions.replace('Inicio'));
  }



  return (
    <SafeAreaView style={css.bg}>

      <View style={css.header}>

        <BotaoVoltarAoInicio
          acao={handler_voltar}
          titulo={'Voltar ao inicio'}
        />

      </View>

      <View>

        <CardBotao page={'pageEditNome'} tituloCard={'Nome de preferência'} />
        <CardBotao page={'pageEditEmail'} tituloCard={'Alterar email'} />
        <CardBotao page={'pageEditNumero'} tituloCard={'Alterar whatsapp'} />


      </View>



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



})