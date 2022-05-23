import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function CardNotificacoes() {

    return (
        <TouchableOpacity onPress={() => { }}>

            <View style={css.card}>

                <View style={css.header}>
                    <Ionicons style={css.icone} name='notifications-outline' size={20} />
                    <Text style={css.txtTitle}>Nova notificação</Text>
                </View>

                <View style={css.body}>
                    <Text style={css.txt}>O colaborador Wilson Lima, está a caminho do seu atendimento, veiculo Bongo.</Text>
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
        paddingTop: 15
    },

    body:{
        padding: 15
    },

    card: {

        backgroundColor: 'white',
        borderRadius: 10
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