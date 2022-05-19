import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper'; 
import { colorPretoForte } from './../../Paleta_cores';



export default function BotaoBranco({ titulo, acao }) {

  return (
    <Button
      uppercase={false}
      onPress={() => acao()}
      style={css.botao_entrar}
      mode='contained'
    >
      {titulo}
    </Button>
  );
}








const css = StyleSheet.create({
 


  botao_entrar: {
    borderRadius: 20,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: colorPretoForte,
    marginTop: 10,
    marginBottom: 30
   
  },


})