import React, { useContext, useState } from 'react';
import { View, StyleSheet, Modal, Image, Text, TouchableOpacity, Alert, StatusBar, FlatList } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
import { colorCardOptions } from '../../Paleta_cores';
import CardAtendimentoAdm from '../Adapters/CardAtendimentoAdm';
import BotaoVoltarAoInicio from './BotaoVoltarAoInicio';



export default function ModalAtendimentos({ visible, data, hidden, tituloBotao }) {


 
 
    console.log(data);



    //FUNCS

    function handler_voltar() {
        hidden()
    }




    return (
        <>
        

        <Modal animationType='slide' transparent={true} visible={visible} >

            <View style={css.header}>
                <StatusBar hidden={false} />

                <View style={css.header}>

                    <BotaoVoltarAoInicio
                        acao={handler_voltar}
                        titulo={tituloBotao}
                    />

                </View>


                <FlatList
                    data={data}
                    renderItem={({ item }) => <CardAtendimentoAdm data={item} />}
                    keyExtractor={item => item.id}

                />


            </View>




        </Modal>

        </>

    );
}





const css = StyleSheet.create({


    header: {
        flex: 1,
        padding: 10,
        backgroundColor:  colorCardOptions


    },

    body: {
        flex: 2,
        margin: 10,
    }
})