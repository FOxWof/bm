import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Subheading } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colorPretoMaisFraco } from '../../Paleta_cores';



export default function CardComImg({ tituloCard, imageCard, acao }) {

 
 //  <Image style={css.img} resizeMode='contain' source={imageCard} />
  

  return (
    <View style={css.card}>
      <TouchableOpacity onPress={() => acao()}>


        <Subheading style={css.titulo}>{tituloCard}</Subheading>

      </TouchableOpacity>
    </View>
  );
}

const css = StyleSheet.create({

  card: { width: 150, height: 160, backgroundColor: 'white', borderRadius: 10, marginBottom: 10, elevation: 5, shadowColor: colorPretoMaisFraco },

  titulo: { fontSize: 15, textAlign: 'center' },

  botao: { width: '100%' },

  img: { height: '80%', width: '100%' }

})