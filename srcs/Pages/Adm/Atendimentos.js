import React, { useEffect, useState, useContext } from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView, FlatList, Text } from 'react-native';
import BotaoVoltarAoInicio from '../../Componentes/BotaoVoltarAoInicio';
import { StackActions, useNavigation } from '@react-navigation/native';
import { FirebaseContext } from '../../Context/FirebaseContext';
import CardAtendimentoAdm from '../../Adapters/CardAtendimentoAdm';
import CardHeader from '../../Adapters/CardHeader';
import ModalAtendimentos from '../../Componentes/ModalAtendimentos';





export default function Atendimentos() {
  //CONST

  const navegacao = useNavigation();

  const { recuperar_dados_atributos_personalizados, listaDados, recuperar_todos_dados_colecao, dadosRecuperados } = useContext(FirebaseContext);

  const [allAtendimentos, setAllAtendimentos] = useState([]);

  const [isVisivel, setIsVisivel] = useState(false);




















  //USEEFFECTS

  useEffect(() => {

    recuperar_dados_atributos_personalizados("atendimentos", "status", 0, "desc");

  }, []);




  useEffect(() => {

    setAllAtendimentos(listaDados);



  }, [listaDados]);














  //FUNCS

  function handler_voltar() {
    navegacao.dispatch(StackActions.replace('GridFiltros'));
  }










  return (
    <>

      {allAtendimentos ?

        <SafeAreaView style={css.bg}>
          <ScrollView showsHorizontalScrollIndicator={false}>



            <View style={css.header}>

              <BotaoVoltarAoInicio
                acao={handler_voltar}
                titulo={'Voltar'} />


            </View>

            <View style={css.body}>

          

              <FlatList
                data={allAtendimentos}
                renderItem={({ item }) => <CardAtendimentoAdm data={item} />}
                keyExtractor={item => item.id}
              />

            </View>


          </ScrollView>

        </SafeAreaView>
        :

        <SafeAreaView style={css.bg}>
          <View style={css.body}>
            <Text>Não há atendimentos</Text>
          </View>
        </SafeAreaView>

      }


    </>

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