import React from 'react';
import { View, Text, SafeAreaView , StyleSheet, ImageBackground, TextInput } from 'react-native';
import { colorBranco, colorPretoFraco, colorPretoMaisFraco } from './../../Paleta_cores';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function CardInputForm({titulo, hint, icone, valor, senha,iconeColor, tipoTeclado, qntdLetras}) {

    return (
        <View style={css.cardInput} >

            <View style={css.headerCard}>


                <Ionicons name={icone} color={iconeColor} size={25} />
                <Text style={css.fontCard}>{titulo}</Text>



            </View>


            <View style={{ flexDirection: 'column', marginLeft: 20, marginRight: 15 }}>
                <TextInput
                    style={{ fontSize: 16 }}
                    placeholder={hint}
                    secureTextEntry={senha}
                    keyboardType={tipoTeclado}
                    maxLength={qntdLetras}
                />
            </View>

        </View>

    );
}







const css = StyleSheet.create({
 

    cardInput: {
        height: 100,
        backgroundColor: colorBranco,
        borderRadius: 20, 
        marginBottom: 5

    },


    headerCard: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        paddingLeft: 15

    },


    fontCard: {
        marginLeft: 15,
        fontSize: 15,
        fontWeight: 'bold',
        color: colorPretoMaisFraco,

    },
 
 
})