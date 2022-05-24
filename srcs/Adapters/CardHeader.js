import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Subheading, Title } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colorPretoMaisFraco } from '../../Paleta_cores';




export default function CardHeader({ tituloCard, quantidade, acao }) {



  return (
    <TouchableOpacity onPress={() => acao()} style={{ flexDirection: 'column' }}>

      <View style={css.card}>

        <Title>{quantidade}</Title>

        <Subheading style={css.titulo}>{tituloCard}</Subheading>

      </View>


    </TouchableOpacity>

  );
}

const css = StyleSheet.create({

  card: { width: 130, height: 140, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 10, margin: 10, marginBottom: 10, elevation: 3, shadowColor: colorPretoMaisFraco },

  titulo: { fontSize: 15, textAlign: 'center' },

  botao: { width: '100%' },

  img: { height: '80%', width: '100%' }

})