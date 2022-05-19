import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import { colorFacebookAzul } from '../../Paleta_cores';



export default function BotaoAzul({ titulo, acao }) {

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
    backgroundColor: colorFacebookAzul,
    marginTop: 50,
    
   
  },


})