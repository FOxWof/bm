import React, { useState, useEffect, useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, ScrollView, StatusBar, Alert, Dimensions, TextInput } from 'react-native';
import BotaoVoltarAoInicio from './../Componentes/BotaoVoltarAoInicio';
import { useNavigation } from '@react-navigation/native';
import CardText from '../Componentes/CardText';
import { colorFacebookAzul, colorPretoMaisFraco, colorBranco } from './../../Paleta_cores';
import CardInputForm from '../Componentes/CardInputForm';
import PickerSelect from './../Componentes/PickerSelect';
import PickerSelectServico from '../Componentes/PickerSelectServico';
import PickerSelectPagamento from '../Componentes/PickerSelectPagamento';
import BotaoAzul from './../Componentes/BotaoAzul';
import { AuthContext } from '../Context/AuthContext';
import { FirebaseContext } from '../Context/FirebaseContext';
import { OrcamentoContext } from '../Context/OrcamentoContext';
import PickerQuantidade from './../Componentes/PickerQuantidade';








export default function Tela_de_Orcamento(props) {

    //CONST

    const navegacao = useNavigation();
    const dados = props.route.params

    const { usuario } = useContext(AuthContext);
    const { numPneu, servico, formaPagamento, quantidade } = useContext(OrcamentoContext);
    const { localizacaoUserRecuperada, recupera_dados_comId_noDoc, salvar_dados } = useContext(FirebaseContext);



    const [veiculo, setVeiculo] = useState('');
    const [obs, setObs] = useState('');
    const [localUser, setLocalUser] = useState();












    //LETS


    let nome_user = usuario.dados.nome;
    let email_user = usuario.dados.email;
    let whatsapp_user = usuario.dados.whatsapp;
    let user_id = usuario.dados.user_id;




    let dados_usuario = {
        nome_user,
        email_user,
        whatsapp_user
    }



    let detalhes_orcamento = {
        veiculo,
        obs

    }



    let dados_Confirmacao = {
        dados,
        dados_usuario,
        detalhes_orcamento
    }






    //USEEFFECTS



    useEffect(() => {

        recupera_dados_comId_noDoc('localizacao_atual', user_id);

    }, [])





    useEffect(() => {

        if (localizacaoUserRecuperada == undefined) {

            setLocalUser('Carregando...');


        } else {
            setLocalUser(localizacaoUserRecuperada.documento.address);
        }

    }, [localizacaoUserRecuperada])












    //FUNCS






    function h_voltar() {

        navegacao.navigate('Inicio');

    }




    function h_orcamento() {

        if (veiculo == '' || veiculo == undefined) {
            return Alert.alert('Espere um pouco', 'Você precisa informar o modelo do seu veiculo');
        }

        if (numPneu == null || veiculo == undefined) {
            return Alert.alert('Espere um pouco', 'Você precisa confirmar a numeração do seu pneu');
        }

        if (servico == null || veiculo == undefined) {
            return Alert.alert('Espere um pouco', 'Você deve confirmar o serviço que precisa');
        }

        if (formaPagamento == null || veiculo == undefined) {
            return Alert.alert('Espere um pouco', 'Você precisa confirmar a forma de pagamento');
        }


        let dados_orcamento = {
            user_id,
            data_criacao: new Date(),
            dados_Confirmacao,
            numeracao_do_pneu: numPneu,
            tipo_de_servico: servico,
            forma_pagamento: formaPagamento,
            qntd_de_pneu: quantidade

        }




        salvar_dados('orcamento', dados_orcamento);



        navegacao.navigate('Tela_de_Confirmacao', user_id);

    }












    return (
        <SafeAreaView style={css.bg}>
            <StatusBar hidden={true} />
            <ScrollView>

                <View style={{ padding: 15 }}>


                    <BotaoVoltarAoInicio
                        titulo={'Voltar ao inicio'}
                        acao={h_voltar} />



                    <CardText
                        titulo={localUser}
                        icone={'location'}
                        iconeCor={colorPretoMaisFraco}
                    />


                    <CardInputForm
                        titulo={'Veículo'}
                        icone={'car-outline'}
                        hint={'Informe o modelo do seu veículo'}
                        iconeColor={colorPretoMaisFraco}
                        valor={veiculo}
                        onChange={setVeiculo}
                    />


                    <PickerSelect />

                    <PickerSelectServico />

                    <PickerQuantidade />

                    <PickerSelectPagamento />


                    <CardInputForm
                        titulo={'Observação'}
                        icone={'reader-outline'}
                        hint={'Se você tiver alguma obs escreva aqui'}
                        iconeColor={colorPretoMaisFraco}
                        valor={obs}
                        onChange={setObs}
                    />




                    <CardText
                        titulo={whatsapp_user}
                        icone={'logo-whatsapp'}
                        iconeCor={colorPretoMaisFraco}
                    />



                    <CardText
                        titulo={nome_user}
                        icone={'person-outline'}
                        iconeCor={colorPretoMaisFraco}
                    />


                    <BotaoAzul
                        acao={h_orcamento}
                        titulo={'Gerar orçamento'} />



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

    footerText: {
        width: 200,
        color: "#8fa7b3",
    },

})