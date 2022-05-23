import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, BackHandler, Alert, FlatList , ScrollView} from 'react-native';
import { colorPretoFraco } from '../../../Paleta_cores';
import BotaoVoltarAoInicio from '../../Componentes/BotaoVoltarAoInicio';
import { useNavigation, StackActions } from '@react-navigation/native';
import { FirebaseContext } from '../../Context/FirebaseContext';
import { AuthContext } from '../../Context/AuthContext';
import BotaoBranco from '../../Componentes/BotaoBranco';
import CardAtendimentos from '../../Componentes/CardAtendimentos';




export default function MeusAtendimentos() {

 



  BackHandler.addEventListener('hardwareBackPress', function () {
    Alert.alert("Olá", "Para voltar ao inicio, toque no botão de voltar");
    return true;
  });



  //CONST
  const navegacao = useNavigation();
  const { recuperar_dados_atributos_personalizados, listaDados } = useContext(FirebaseContext);
  const { usuario, deslogar } = useContext(AuthContext);
  const [dadosRecuperados, setDadosRecuperados] = useState();
  const [docFiltrados, setDocFiltrados] = useState();
  const [atendimentosFilterId, setAtendimentosFilterId] = useState();






  const user_id = usuario.dados.user_id;








  //USEEFFECTS

  useEffect(() => {

    recuperar_dados_atributos_personalizados('atendimentos', "id", user_id);


  }, [])


 








  //LETS





  //FUNCS



  function handler_voltar() {

    navegacao.dispatch(StackActions.replace('Inicio'));

  }


 



  return (
    <SafeAreaView style={css.bg}>
    <ScrollView>

      <View style={css.header}>


        <BotaoVoltarAoInicio
          acao={handler_voltar}
          titulo={'Voltar ao inicio'}
        />


      </View>


      <View style={css.body}>
      

        <FlatList
          data={listaDados}
          renderItem={({ item }) => <CardAtendimentos data={item} />}
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

  

})