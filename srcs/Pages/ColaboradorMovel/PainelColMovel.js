import React, { useState, useContext } from 'react';
import { View, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card, FAB } from 'react-native-paper'
import { AuthContext } from '../../Context/AuthContext';
import { colorFacebookAzul } from './../../../Paleta_cores';





const css = StyleSheet.create({
    bg: {
        flex: 1,
    },

    header: {
        backgroundColor: 'white',
        height: 65,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',

    },

    txtCard: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: '24%'
    },

    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: colorFacebookAzul
    },


    body: {

    }
})




export default function PainelColMovel() {

    const { deslogar } = useContext(AuthContext);


    return (
        <SafeAreaView style={css.bg}>


            <Card elevation={8} mode='elevated' >

                <View style={css.header}>

                    <Text style={css.txtCard}>Atendimento em aberto</Text>

                    <Ionicons name='menu'  size={30} />

                </View>


            </Card>



            <TouchableOpacity onPress={() => deslogar()}>

                <Text>Sair</Text>

            </TouchableOpacity>


            <FAB
                style={css.fab}
                icon="plus"
                onPress={() => console.log('Pressed')}
            />


            <View style={css.body}>

            </View>

        </SafeAreaView>
    );
}
