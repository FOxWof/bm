import React from 'react';
import { View, Text, SafeAreaView , StyleSheet, ImageBackground, TextInput, ActivityIndicator } from 'react-native';
import { colorBranco, colorPretoForte, colorPretoFraco, colorPretoMaisFraco } from './../../Paleta_cores'; 



export default function Carregamento() {

    return (
        <ActivityIndicator  style={{marginTop: 30}} size={30} color={colorPretoForte} />
    );
}




 