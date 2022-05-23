import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TxtSubTitulo({subTitulo, tamanho, cor, bold}) {

 return (

    <Text style={{ color: cor, fontSize: tamanho, fontWeight: bold, marginLeft: 20, marginRight: 20  }}>{subTitulo}</Text>
  );
}


 


   