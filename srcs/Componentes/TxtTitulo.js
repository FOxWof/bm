import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TxtTitulo({titulo, tamanho, cor, bold}) {

 return (

    <Text style={{ color: cor, fontSize: tamanho, fontWeight: bold }}>{titulo}</Text>
  );
}


 


   