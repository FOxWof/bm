import React, { useState, useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import BotaoAzul from '../Componentes/BotaoAzul';
import CardInput from '../Componentes/CardInput';
import BotaoVoltarAoInicio from './../Componentes/BotaoVoltarAoInicio';
import { useNavigation, StackActions } from '@react-navigation/native';
import { AuthContext } from '../Context/AuthContext';
import Carregamento from '../Componentes/Carregamento';





export default function Entrar() {

  const navegacao = useNavigation();
  const { login, loading } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');






  function voltarAoLobby() {

    navegacao.dispatch(StackActions.popToTop())


  }






  function handler_login() {

    if (email == '' || email == undefined) {
      return alert('Campo email está vazio');
    }


    if (senha == '' || senha == undefined) {
      return alert('Campo email está vazio');
    }

 


    login(email, senha);


  }






  return (
    <SafeAreaView style={css.bg}>
      <View style={css.ImgBG}>

        <ScrollView>

          <BotaoVoltarAoInicio acao={voltarAoLobby} />

          <CardInput
            titulo={'Email'}
            hint={'Insira seu e-mail'}
            icone={'mail-outline'}
            senha={false}
            tipoTeclado={'email-address'}
            valor={email}
            onChange={setEmail}
          />


          <CardInput
            titulo={'Senha'}
            hint={'Insira sua senha'}
            icone={'key-outline'}
            senha={true}
            valor={senha}
            onChange={setSenha}
          />

          {loading ? 
          <Carregamento/> :   
          <BotaoAzul
            acao={handler_login}
            titulo={'Entrar'} />
 }
        

        </ScrollView>

      </View>
    </SafeAreaView>
  );
}





const css = StyleSheet.create({

  bg: {
    flex: 1,
  },

  ImgBG: {
    height: '100%',
    width: '100%',
    padding: 15,
    justifyContent: 'flex-end'

  }

})