import React, { useState, useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import BotaoAzul from '../Componentes/BotaoAzul';
import CardInput from '../Componentes/CardInput';
import BotaoVoltarAoInicio from './../Componentes/BotaoVoltarAoInicio';
import { useNavigation, StackActions } from '@react-navigation/native';
import BotaoBranco from './../Componentes/BotaoBranco';
import { AuthContext } from '../Context/AuthContext';
import Carregamento from '../Componentes/Carregamento';




export default function Cadastro() {

  const navegacao = useNavigation();
  const { criar_conta, loading } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');




  function handler_criar_conta() {

    if (email == '' || email == undefined) {
      return alert('Campo email está vazio');
    }


    if (senha == '' || senha == undefined) {
      return alert('Campo email está vazio');
    }


    if (nome == '' || nome == undefined) {
      return alert('Campo email está vazio');
    }


    if (whatsapp == '' || whatsapp == undefined) {
      return alert('Campo email está vazio');
    }


    criar_conta(email, senha, nome, whatsapp);


  }




  function voltarAoLobby() {

    navegacao.dispatch(StackActions.popToTop())


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




          <CardInput
            titulo={'Nome'}
            hint={'Insira seu nome'}
            icone={'person-outline'}
            senha={false}
            valor={nome}
            onChange={setNome}
          />

          <CardInput
            titulo={'Whatsapp'}
            hint={'Insira seu whatsapp'}
            icone={'logo-whatsapp'}
            senha={false}
            tipoTeclado={'numeric'}
            qntdLetras={11}
            valor={whatsapp}
            onChange={setWhatsapp}
          />


          {loading ? 
          <Carregamento /> : 
          <BotaoBranco
            acao={handler_criar_conta}
            titulo={'Criar Conta'} />

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