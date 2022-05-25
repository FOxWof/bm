import React, { useState, useEffect, useContext } from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView, FlatList } from 'react-native';
import BotaoVoltarAoInicio from '../../Componentes/BotaoVoltarAoInicio';
import { StackActions, useNavigation } from '@react-navigation/native';
import { FirebaseContext } from '../../Context/FirebaseContext'; 
import CardOrcamento from '../../Adapters/CardOrcamento';








export default function Orcamentos() {


    const navegacao = useNavigation();


    const { recuperar_dados_atributos_personalizados, listaDados } = useContext(FirebaseContext);
    const [allOrcamentos, setOrcamento] = useState([]);









    //USEEFFECTS

    useEffect(() => {

        recuperar_dados_atributos_personalizados("orcamento", "status", 0, "asc");

    }, []);



    useEffect(() => {

        setOrcamento(listaDados);

 

    }, [listaDados]);














    function handler_voltar() {
        navegacao.dispatch(StackActions.replace('PainelAdm'));
    }









    return (
        <SafeAreaView style={css.bg}>
            <ScrollView>

                <View style={css.header}>

                    <BotaoVoltarAoInicio
                        acao={handler_voltar}
                        titulo={'Orçamentos'} />


                </View>

                <View style={css.body}>

                <FlatList
                data={allOrcamentos}
                renderItem={({item})=> <CardOrcamento data={item}/>}
                keyExtractor={item => item.id}

                />

                </View>


            </ScrollView>

        </SafeAreaView>
    );
}



const css = StyleSheet.create({

    bg: {
        flex: 1
    },

    header: {
        padding: 15,
        backgroundColor: 'white'
    },

    body: {
        flex: 2,
        margin: 10,
    }



})