import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function CardClientes(data) {


    console.log(data.data.dados);


    let nomeCliente = data.data.dados.nome;
    let emailCliente = data.data.dados.email;
    let whatsappCliente = data.data.dados.whatsapp;






    return (
        <TouchableOpacity onPress={() => { }}>

            <View style={css.card}>

                <View style={css.body}>
                    <Ionicons style={css.icone} name='person-outline' size={20} />
                    <Text style={css.txt}>{nomeCliente}</Text>
                </View>

                <View style={css.body}>
                    <Ionicons style={css.icone} name='logo-whatsapp' size={20} />
                    <Text style={css.txt}>{whatsappCliente}</Text>
                </View>

                <View style={css.body}>
                    <Ionicons style={css.icone} name='mail-outline' size={20} />
                    <Text style={css.txt}>{emailCliente}</Text>
                </View>

            </View>
        </TouchableOpacity>

    );
}


const css = StyleSheet.create({

    header: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 15,
        padding: 15, 

    },

    body: {
        flexDirection: 'row',
    },

    card: {

        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15, 

    },

    txt: {
        fontSize: 15,
        marginLeft: 10,
        marginBottom: 5
    },

    txtTitle: {
        fontSize: 14,
        marginLeft: 10
    },

    icone: {
        marginLeft: 5
    }

})