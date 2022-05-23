import React, { useContext, useState } from 'react';
import { View, StyleSheet, Modal, Image, Text, TouchableOpacity, Alert, StatusBar } from 'react-native';
import { colorBranco, colorBrancoFosco, colorCardOptions, colorPretoFraco } from '../../Paleta_cores';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackActions, useNavigation } from '@react-navigation/native';
import BotaoBranco from './BotaoBranco';
import { AuthContext } from '../Context/AuthContext';




export default function PopUp({ visible, onDismiss, nomeCliente }) {

    const navegacao = useNavigation();
    const { deslogar } = useContext(AuthContext);



    function IrParar(pages) {
        navegacao.dispatch(StackActions.replace(pages));

    }




    function handler_sair() {

        Alert.alert("Confirmar", "Você tem certeza que deseja sair do app?", [
            {
                text: 'Não',
                style: 'cancel',
            },
            { text: 'Sim', onPress: () => deslogar() },
        ])

    }




    return (

        <Modal animationType='slide' transparent={true} visible={visible} >

            <View style={css.header}>
                <StatusBar hidden={false} />


                <View style={{ padding: 10, marginBottom: 30 }}>
                    <TouchableOpacity onPress={() => onDismiss()}>
                        <Ionicons name='close' size={30} color={colorPretoFraco} />
                    </TouchableOpacity>

                    <View style={css.containerHeader}>

                        <Image style={css.avatar} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg' }} />
                        <Text style={css.txt}>{nomeCliente}</Text>

                    </View>
                </View>



                <View style={css.containerBody}>

                    <TouchableOpacity onPress={() => IrParar('Infos')} style={css.CardBotao}>

                        <Ionicons style={css.icon} name='person-outline' size={20} />

                        <Text style={css.txtBotao}>Minhas informações</Text>

                        <Ionicons name='chevron-forward-outline' size={20} />

                    </TouchableOpacity>

                    <View style={css.espacamento} />


                    <TouchableOpacity onPress={() => IrParar('MeusAtendimentos')} style={css.CardBotao}>

                        <Ionicons style={css.icon} name='reader-outline' size={20} />

                        <Text style={css.txtBotao}>Meus atendimentos</Text>

                        <Ionicons name='chevron-forward-outline' size={20} />

                    </TouchableOpacity>

                    <View style={css.espacamento} />


                    <TouchableOpacity onPress={() => IrParar('MeusAtendimentos')} style={css.CardBotao}>

                        <Ionicons style={css.icon} name='notifications-outline' size={20} />

                        <Text style={css.txtBotao}>Notificações</Text>

                        <Ionicons name='chevron-forward-outline' size={20} />

                    </TouchableOpacity>

                    <View style={css.espacamento} />



                    <TouchableOpacity onPress={() => handler_sair()} style={css.CardBotao}>

                        <Ionicons style={css.icon} name='return-down-back-outline' size={20} />

                        <Text style={css.txtBotao}>Sair do aplicativo</Text>

                        <Ionicons name='chevron-forward-outline' size={20} />

                    </TouchableOpacity>

                    <View style={css.espacamento} />

 




                </View>


            </View>


        </Modal>

    );
}



const css = StyleSheet.create({


    header: {
        flex: 1,
        backgroundColor: colorCardOptions,


    },

    espacamento: { height: 2, backgroundColor: colorCardOptions },

    icon: {
        marginLeft: -10
    },

    iconSair: {
        marginLeft: 32
    },


    CardBotao: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
    },

    CardBotaoSair: {
        height: 70,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
    },

    containerHeader: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',

    },

    containerBody: {
        height: '100%',
        backgroundColor: 'white'
    },

    avatar: {
        height: 70,
        width: 70,
        borderRadius: 50
    },

    txt: {
        marginLeft: 20,
        fontSize: 17
    },

    txtBotao: {
        marginLeft: 20,
        fontSize: 15,
        fontWeight: '400',
        marginRight: 100,
        width: 150
    },

})