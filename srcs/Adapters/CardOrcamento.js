import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Text, Scrollview, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TxtTitulo from '../Componentes/TxtTitulo'
import { colorPretoMaisFraco } from '../../Paleta_cores';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { Button } from 'react-native-paper'; 
import { FirebaseContext } from '../Context/FirebaseContext';




export default function CardOrcamento(data) {


  const { atualiza_documento } = useContext(FirebaseContext);


  const date = data.data.data.toDate().toDateString()
  const hr = data.data.data.toDate().toLocaleTimeString('pt-BR')

  const add = format(new Date(date), 'dd/MM');



  let localUsuario = 'Aguarde...';
  let nomeUser = 'Aguarde...';
  let contatoUser = 'Aguarde...';
  let veiculo = 'Aguarde...';
  let obs = 'Aguarde...';
  let numPneu = 'Aguarde...';
  let tipo = 'Aguarde...';
  let qntdPneu = 'Aguarde...';
  let fg = 'Aguarde...';

  let dataTime = 'Aguarde...';

  let valor_servico = 'Aguarde...';
  let valor_deslocamento = 'Aguarde...';
  let valor_total = 'Aguarde...';

  let status = 'Aguarde...';

  let numStatus = 'Aguarde...';





  if (data.data.documento != undefined || data.data.documento != null) {

    numStatus = data.data.status;
    localUsuario = data.data.documento.dados_Confirmacao.dados.localUserAtual;
    nomeUser = data.data.documento.dados_Confirmacao.dados_usuario.nome_user;
    contatoUser = data.data.documento.dados_Confirmacao.dados_usuario.whatsapp_user;

    veiculo = data.data.documento.dados_Confirmacao.detalhes_orcamento.veiculo;
    obs = data.data.documento.dados_Confirmacao.detalhes_orcamento.obs
    tipo = data.data.documento.tipo_de_servico;
    numPneu = data.data.documento.numeracao_do_pneu;
    qntdPneu = data.data.documento.qntd_de_pneu;
    fg = data.data.documento.forma_pagamento;


    dataTime = hr



    valor_servico = data.data.documento.valor_servio;
    valor_deslocamento = data.data.documento.dados_Confirmacao.dados.distPrice.valorDeslocamento;
    valor_total = data.data.documento.Valor_total;

    status = data.data.status;





    if (status == 0) {
      status = "Em espera"
    } else if (status == 1) {
      status = "A caminho"
    } else if (status == 2) {
      status = "No local"
    } else if (status == 3) {
      status = "Concluido"
    } else if (status == 4) {
      status = "Concluido/N??o pago"
    } else if (status == 5) {
      status = "Cancelado"
    }





    if (obs == "") {
      obs = "Nenhuma"
    }


    if (tipo == 1) {
      tipo = "Calibragem"

    } else if (tipo == 2) {
      tipo = "Conserto de pneu"

    } else if (tipo == 3) {
      tipo = "Troca de pneu"

    } else if (tipo == 4) {
      tipo = "Vulcaniza????o (quente ou fria)"
    }



    if (qntdPneu <= 1) {
      qntdPneu = qntdPneu + ' pneu'
    } else {
      qntdPneu = qntdPneu + ' pneus'
    }


    if (fg == 1) {
      fg = "Dinheiro"

    } else if (fg == 2) {
      fg = "Pix"

    } else if (fg == 3) {
      fg = "D??bito"

    } else if (fg == 4) {
      fg = "Cr??dito"
    }





  }





  function statusAnterior() {

    if (numStatus >= 1) {

      numStatus = numStatus - 1;
      atualiza_documento('atendimentos', data.data.id, numStatus);


    } else {

      alert('Voc?? n??o pode mais voltar')
    }



  }





  function statusProximo() {

    if (numStatus <= 4) {

      numStatus = numStatus + 1;
      atualiza_documento('atendimentos', data.data.id, numStatus);


    } else {

      alert('Voc?? n??o pode ir alem');

    }


  }



  function cancelar() {

    numStatus = 5;
    atualiza_documento('atendimentos', data.data.id, numStatus);


  }








  return (
    <>

      <View key={data.data.id} style={css.bgCard}>


        <TxtTitulo
          cor={colorPretoMaisFraco}
          tamanho={15}
          titulo={'Informa????es do or??amento'} />

        <View style={css.header}>

          <Ionicons name='location' size={20} />
          <Text style={css.txtLocal}>{localUsuario}</Text>

        </View>

        <View style={css.body}>



          <View style={{ flexDirection: 'row' }}>
            <Ionicons name='person' size={20} />
            <Text style={css.txt}>{nomeUser}</Text>

            <Ionicons style={{ marginLeft: 40 }} name='logo-whatsapp' size={20} />
            <Text style={css.txt}>{contatoUser}</Text>
          </View>


          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Ionicons name='car' size={20} />
            <Text style={css.txt}>{veiculo}</Text>

            <Ionicons style={{ marginLeft: 40 }} name='alert-circle-outline' size={20} />
            <Text style={css.txt}>{obs}</Text>
          </View>


          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Ionicons name='car' size={20} />
            <Text style={css.txt}>{numPneu}</Text>

            <Ionicons style={{ marginLeft: 40 }} name='construct-outline' size={20} />
            <Text style={css.txt}>{tipo}</Text>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Ionicons name='car' size={20} />
            <Text style={css.txt}>{qntdPneu}</Text>

            <Ionicons style={{ marginLeft: 40 }} name='card-outline' size={20} />
            <Text style={css.txt}>{fg}</Text>
          </View>


          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Ionicons name='time-outline' size={20} />
            <Text style={css.txtHorario}>{add} as {dataTime}</Text>

            <Ionicons style={{ marginLeft: 25 }} name='time-outline' size={20} /> 
            <Text style={css.txt}>Em or??amento</Text>
          </View>


        </View>




      </View>




    </>

  );
}


const css = StyleSheet.create({

  bgCard: {
    margin: 10,
    padding: 15,
    borderRadius: 15,
    marginBottom: 5,
    backgroundColor: 'white'
  },

  viewFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15
  },

  body: {
    marginTop: 20,
    justifyContent: 'center',
    marginBottom: 15
  },

  txtLocal: {
    marginLeft: 10,
    fontSize: 14,
  },

  txtHorario: {
    marginLeft: 10,
    fontSize: 13,
  },

  txt: {
    marginLeft: 10,
    fontSize: 14,
    width: 90
  }
})