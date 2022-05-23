import React, { useState, useContext } from 'react';
import { View, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../Context/AuthContext';




export default function PainelColMovel() {

    const { deslogar } = useContext(AuthContext);


    return (
        <SafeAreaView style={css.bg}>

            <TouchableOpacity onPress={()=> deslogar()}>
                <View style={css.header}>
                    <Text>COLABORADOR MOVEL</Text>

                </View>
            </TouchableOpacity>



            <View style={css.body}>

            </View>

        </SafeAreaView>
    );
}


const css = StyleSheet.create({
    bg: {
        flex: 1,
    },

    header: {
        backgroundColor: 'white'
    },

    body: {

    }
})