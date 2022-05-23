import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';


export default function Fab({icone, acao, colorBG}) {
 return (
    <FAB
    style={{ 
    position: 'absolute',
    margin: 16,
    left: 0,
    top: 13,
    backgroundColor:colorBG }}
    icon={icone}
    onPress={acao}
  />
  );
}



const css = StyleSheet.create({
    
  fab:{
   

  },
})