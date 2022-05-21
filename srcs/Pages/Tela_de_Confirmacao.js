import React, { useState, useEffect, useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, ScrollView, StatusBar, Dimensions, TextInput } from 'react-native';
import BotaoVoltarAoInicio from './../Componentes/BotaoVoltarAoInicio';
import { useNavigation } from '@react-navigation/native';
import CardText from '../Componentes/CardText';
import { colorFacebookAzul, colorPretoMaisFraco, colorBranco } from './../../Paleta_cores';
import BotaoAzul from './../Componentes/BotaoAzul';
import { nomeFix } from './../../LocationFix';
import { FirebaseContext } from './../Context/FirebaseContext';







export default function Tela_de_Confirmacao(props) {





    //CONST

    const dados_orcamento_props = props.route.params
    const navegacao = useNavigation();

    const user_id = dados_orcamento_props.user_id;
    const { recupera_dados_comId_noDoc, valorRecuperadoGetWithId } = useContext(FirebaseContext);
    const [dadosOrcamento, setDadosOrcamento] = useState([]);















    //USEEFFECTS

    useEffect(() => {

        recupera_dados_comId_noDoc("orcamento", user_id);



    }, [])



    useEffect(() => {

        if (valorRecuperadoGetWithId != undefined || valorRecuperadoGetWithId != null) {
            setDadosOrcamento(valorRecuperadoGetWithId);

        }


    }, []);




















    //LETS

    //let Local_user = valorRecuperadoGetWithId.documento.dados_Confirmacao.dados.localUserAtual;

    let valor_deslocamento = dados_orcamento_props.dados_Confirmacao.dados.distPrice.valorDeslocamento;


    let veiculo = dados_orcamento_props.dados_Confirmacao.detalhes_orcamento.veiculo;
    let numeracao_pneu = dados_orcamento_props.numeracao_do_pneu;
    let qnt_pneu = dados_orcamento_props.qntd_de_pneu;
    let tipo_servico = dados_orcamento_props.tipo_de_servico;
    let forma_pagamento = dados_orcamento_props.forma_pagamento;


    let valor_servio = 0;
    let Valor_total = 0;

    let tipo_servico_string = '';
    let forma_pagamento_string = '';




    if (dadosOrcamento !== undefined || dadosOrcamento !== null) {




        if (numeracao_pneu == '175 65 R14') {

            valor_servio = 25 * qnt_pneu

        } else if (numeracao_pneu == '175 65 R15') {

            valor_servio = 25 * qnt_pneu

        } else if (numeracao_pneu == '175 65 R17') {

            valor_servio = 30 * qnt_pneu

        }




        if (tipo_servico == 1) {

            tipo_servico_string = 'Calibragem';


        } else if (tipo_servico == 2) {
            tipo_servico_string = 'Conserto de pneu';

        } else if (tipo_servico == 3) {
            tipo_servico_string = 'Troca de pneu';

        } else if (tipo_servico == 4) {
            tipo_servico_string = 'Vulcanizão(fria ou quente)';

        }






        if (forma_pagamento == 1) {

            forma_pagamento_string = 'Dinheiro';


        } else if (forma_pagamento == 2) {
            forma_pagamento_string = 'Pix';

        } else if (forma_pagamento == 3) {
            forma_pagamento_string = 'Cartão de débito';

        } else if (forma_pagamento == 4) {
            forma_pagamento_string = 'Cartão de crédito';

        }



        Valor_total = valor_servio + valor_deslocamento;



    }

























    //FUNCS

    function h_tela_de_orcamento() {

        navegacao.navigate('Tela_de_Orcamento');

    }



















    return (
        <SafeAreaView style={css.bg}>
            <StatusBar hidden={true} />
            <ScrollView>

                <View style={{ padding: 15 }}>


                    <BotaoVoltarAoInicio
                        titulo={'Voltar'}
                        acao={h_tela_de_orcamento} />


                    <CardText
                        titulo={nomeFix}
                        icone={'location'}
                        iconeCor={"#ff0000"}
                    />

                    <CardText
                        titulo={'Local_user'}
                        icone={'location'}
                        iconeCor={colorPretoMaisFraco}
                    />





                    <CardText
                        titulo={`Deslocamento R$ ${valor_deslocamento}`}
                        icone={'card-outline'}
                        iconeCor={colorPretoMaisFraco}
                    />



                    <CardText
                        titulo={`Serviço R$ ${valor_servio.toFixed(0)},00`}
                        icone={'card-outline'}
                        iconeCor={colorPretoMaisFraco}
                    />



                    <CardText
                        titulo={`TOTAL R$ ${Valor_total.toFixed(0)},00`}
                        icone={'card-outline'}
                        iconeCor={colorPretoMaisFraco}
                    />










                    <CardText
                        titulo={veiculo}
                        icone={'car-outline'}
                        iconeCor={colorPretoMaisFraco}
                    />




                    <CardText
                        titulo={`Numeração do pneu ${numeracao_pneu}`}
                        icone={'car-outline'}
                        iconeCor={colorPretoMaisFraco}
                    />




                    <CardText
                        titulo={`Serviço em ${qnt_pneu} pneus`}
                        icone={'car-outline'}
                        iconeCor={colorPretoMaisFraco}
                    />





                    <CardText
                        titulo={`${tipo_servico_string}`}
                        icone={'construct-outline'}
                        iconeCor={colorPretoMaisFraco}
                    />




                    <CardText
                        titulo={`${forma_pagamento_string}`}
                        icone={'card-outline'}
                        iconeCor={colorPretoMaisFraco}
                    />










                    <BotaoAzul
                        titulo={'Confirmar atendimento'} />



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