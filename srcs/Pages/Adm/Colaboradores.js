import React, { useState, useEffect, useContext } from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView , FlatList} from 'react-native';
import BotaoVoltarAoInicio from '../../Componentes/BotaoVoltarAoInicio';
import { StackActions, useNavigation } from '@react-navigation/native';
import { FirebaseContext } from '../../Context/FirebaseContext';
import CardUsuario from '../../Adapters/CardUsuario';





export default function Colaboradores() {


    const navegacao = useNavigation();

    const { recuperar_dados_atributos_personalizados, listaDados } = useContext(FirebaseContext);
    const [allColaboradoresMovel, setColaboradoresMovel] = useState([]);





    //USEEFFECTS

    useEffect(() => {

        recuperar_dados_atributos_personalizados("usuarios", "tipo", 4, "asc");

    }, []);



    useEffect(() => {

        setColaboradoresMovel(listaDados);



    }, [listaDados]);




    console.log(allColaboradoresMovel);


    function handler_voltar() {
        navegacao.dispatch(StackActions.replace('PainelAdm'));
    }









    return (
        <SafeAreaView style={css.bg}>
            <ScrollView>

                <View style={css.header}>

                    <BotaoVoltarAoInicio
                        acao={handler_voltar}
                        titulo={'Colaboradores'} />


                </View>

                <View style={css.body}>


                    <FlatList
                        data={allColaboradoresMovel}
                        renderItem={({ item }) => <CardUsuario data={item} />}
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