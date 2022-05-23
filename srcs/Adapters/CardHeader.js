import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Subheading, Title } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colorPretoMaisFraco } from '../../Paleta_cores';



export default function CardHeader({ tituloCard, quantidade, acao }) {


  //  <Image style={css.img} resizeMode='contain' source={imageCard} />


  return (
    <TouchableOpacity onPress={()=> acao() } style={{ flexDirection: 'column'}}>

    <View style={css.card}>

      <Title>{quantidade}</Title>

      <Subheading style={css.titulo}>{tituloCard}</Subheading>

    </View>


    </TouchableOpacity>

  );
}

const css = StyleSheet.create({

  card: { width: 100, height: 90, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 10, margin: 10, marginBottom: 10 },

  titulo: { fontSize: 13, textAlign: 'center' },

  botao: { width: '100%' },

  img: { height: '80%', width: '100%' }

})