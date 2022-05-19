import React from 'react';
import { View, Text, SafeAreaView , StyleSheet, ImageBackground, TextInput } from 'react-native';
import { colorBranco, colorPretoFraco, colorPretoMaisFraco } from './../../Paleta_cores';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function CardText({titulo, hint, icone, iconeCor}) {

    return (
        <View style={css.cardInput} >

            <View style={css.headerCard}>


                <Ionicons color={iconeCor} name={icone} size={25} />
                <Text style={css.fontCard}>{titulo}</Text>



            </View>

        </View>

    );
}







const css = StyleSheet.create({
 

    cardInput: {
        height: 70,
        backgroundColor: colorBranco,
        borderRadius: 20, 
        marginBottom: 5

    },


    headerCard: {
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center', 
        paddingTop: 22,
        paddingLeft: 15
    },


    fontCard: {
        marginLeft: 5,
        fontSize: 15,
        fontWeight: '300',
        color: colorPretoMaisFraco,

    },
 
 
})