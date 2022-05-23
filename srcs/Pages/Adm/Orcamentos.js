import React from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import BotaoVoltarAoInicio from '../../Componentes/BotaoVoltarAoInicio';
import { StackActions, useNavigation } from '@react-navigation/native';





export default function Orcamentos() {


  const navegacao = useNavigation();







  function handler_voltar() {
    navegacao.dispatch(StackActions.replace('PainelAdm'));
}









  return (
      <SafeAreaView style={css.bg}>
          <ScrollView>

              <View style={css.header}>

                  <BotaoVoltarAoInicio
                      acao={handler_voltar}
                      titulo={'Orçamentos'} />


              </View>

              <View style={css.body}>
                 
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