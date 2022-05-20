import React from 'react';
import { View, Text, SafeAreaView , StyleSheet, ImageBackground, TextInput } from 'react-native';
import { colorBranco, colorPretoFraco } from './../../Paleta_cores';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function CardInput({titulo, hint, icone, valor, senha, onChange, tipoTeclado, qntdLetras}) {

    return (
        <View style={css.cardInput} >

            <View style={css.headerCard}>


                <Ionicons name={icone} size={25} />
                <Text style={css.fontCard}>{titulo}</Text>



            </View>


            <View style={{ flexDirection: 'column', marginLeft: 25, marginRight: 15 }}>
                <TextInput
                    style={{ fontSize: 20 }}
                    placeholder={hint}
                    secureTextEntry={senha}
                    keyboardType={tipoTeclado}
                    maxLength={qntdLetras}
                    value={valor}
                    onChangeText={(txt) => onChange(txt)}
                />
            </View>

        </View>

    );
}







const css = StyleSheet.create({
 

    cardInput: {
        height: 120,
        backgroundColor: colorBranco,
        borderRadius: 20,
        marginTop: 10

    },


    headerCard: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        marginLeft: 5
    },


    fontCard: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: colorPretoFraco,

    },
 
 
})