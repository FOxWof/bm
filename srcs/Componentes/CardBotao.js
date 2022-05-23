import React, { useContext, useState } from 'react';
import { View, StyleSheet, Modal, Image, Text, TouchableOpacity, Alert, StatusBar } from 'react-native';
import { colorBranco, colorBrancoFosco, colorCardOptions, colorPretoFraco } from '../../Paleta_cores';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackActions, useNavigation } from '@react-navigation/native';
import BotaoBranco from './BotaoBranco';
import { AuthContext } from '../Context/AuthContext';



export default function CardBotao({tituloCard, page}) {



    return (
        <View>
            <View style={css.espacamento} />


            <TouchableOpacity onPress={() => IrParar(page)} style={css.CardBotao}>

                <Text style={css.txtBotao}>{tituloCard}</Text>

                <Ionicons name='chevron-forward-outline' size={20} />

            </TouchableOpacity>


            <View style={css.espacamento} />
        </View>
    );
}



const css = StyleSheet.create({


    header: {
        flex: 1,
        backgroundColor: colorCardOptions,


    },

    espacamento: { height: 1, backgroundColor: colorCardOptions },

    icon: {
    },
 

    CardBotao: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
    },

 
  
 

    txtBotao: {
        marginLeft: -20,
        fontSize: 15,
        fontWeight: '400',
        marginRight: 110,
        width: 170
    },

})