import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, BackHandler, Alert, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import TxtTitulo from '../Componentes/TxtTitulo';
import { colorAzulFosco, colorPretoFraco, colorPretoMaisFraco } from '../../Paleta_cores';
import TxtSubTitulo from '../Componentes/TxtSubTitulo';
import BotaoAzul from '../Componentes/BotaoAzul';
import BotaoBranco from '../Componentes/BotaoBranco';
import BotaoVoltarAoInicio from '../Componentes/BotaoVoltarAoInicio'; 



export default function Conclusao() {

  //CONST
  const navegacao = useNavigation();








  //FUNCS 



  BackHandler.addEventListener('hardwareBackPress', function () {
    Alert.alert("Olá", "Para voltar ao inicio, toque no botão de voltar");
    return true;
  });





  function h_voltar() {

    navegacao.dispatch(StackActions.replace('Inicio'));

  }





  function handler_go_meus_atendimentos() {

    navegacao.dispatch(StackActions.replace('MeusAtendimentos'));

  }













  return (
    <SafeAreaView style={css.bg}>
      <ScrollView>

      <View style={css.header}>


        <BotaoVoltarAoInicio
          acao={h_voltar}
          titulo={'Voltar ao inicio'}
        />
      </View>



      <View style={css.body}>


        <LottieView
          autoPlay
          style={{
            marginTop: 20,
            marginBottom: 30,
            width: '100%',
            height: 300,
          }}
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require('../Imgs/27251-aproved-check-blue.json')}
        />

        <TxtTitulo
          titulo={'Seu atendimento foi solicitado com sucesso!'}
          tamanho={17}
          cor={colorPretoFraco}
          bold={'bold'}
        />

        <TxtSubTitulo
          subTitulo={'Você pode acompanhar o status e o tempo de espera do seu atendimento ao tocar em "Meus atendimentos".'}
          tamanho={14}
          cor={colorPretoMaisFraco}
          bold={'100'}
        />

      </View>





      <View style={css.footer}>

        <BotaoAzul
          acao={handler_go_meus_atendimentos}
          titulo={'Meus atendimentos'} />


      </View>

      </ScrollView>

    </SafeAreaView>
  );
}




const css = StyleSheet.create({


  bg: {
    flex: 1,
    backgroundColor: '#fafafa'
  },

  header: {


    padding: 10

  },

  body: {

    alignItems: 'center'
  },

  footer: {
    padding: 20
  },


  footerText: {
    width: 200,
    color: "#8fa7b3",
  },

})