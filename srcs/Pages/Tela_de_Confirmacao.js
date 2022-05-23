import React, { useState, useEffect, useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, ScrollView, StatusBar, Dimensions, TextInput } from 'react-native';
import BotaoVoltarAoInicio from './../Componentes/BotaoVoltarAoInicio';
import { useNavigation, StackActions } from '@react-navigation/native';
import CardText from '../Componentes/CardText';
import { colorFacebookAzul, colorPretoMaisFraco, colorBranco, colorBrancoFosco } from './../../Paleta_cores';
import BotaoAzul from './../Componentes/BotaoAzul';
import { nomeFix } from './../../LocationFix';
import { FirebaseContext } from './../Context/FirebaseContext';
import { OrcamentoContext } from '../Context/OrcamentoContext';
import ExpandableCard from 'react-native-expandable-card';
import BotaoBranco from './../Componentes/BotaoBranco';









export default function Tela_de_Confirmacao(props) {





    //CONST

    const dados_orcamento_props = props.route.params
    const navegacao = useNavigation();

    const user_id = dados_orcamento_props.user_id;
    const { recupera_dados_comId_noDoc, valorRecuperadoGetWithId, salvar_dados, deletar_documento } = useContext(FirebaseContext);
    const { localizacaoAtualUser, precoDeslocamento } = useContext(OrcamentoContext)
    const [dadosOrcamento, setDadosOrcamento] = useState([]);
    const [doc, setDoc] = useState([]);









    //USEEFFECTS




    useEffect(() => {

        setDoc(dados_orcamento_props);


    }, [dados_orcamento_props]);









    //LETS
    let valor_deslocamento = precoDeslocamento.valorDeslocamento;


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









    function GeraAtendimento() {


        if (doc != null || doc != []) {

            let docatt = {
                doc,
                valor_servio,
                Valor_total,
                status: 0
            }


            salvar_dados("atendimentos", docatt, user_id);

            deletar_documento("orcamento", user_id);
            
            navegacao.dispatch(StackActions.replace('Conclusao'));

        }




    }



    function DeletarOrcamento() {
        deletar_documento("orcamento", user_id);
        navegacao.dispatch(StackActions.replace('Inicio'));

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
                        titulo={localizacaoAtualUser}
                        icone={'location'}
                        iconeCor={colorPretoMaisFraco}
                    />





                    <CardText
                        titulo={`Deslocamento R$ ${valor_deslocamento.toFixed(0)},00`}
                        icone={'card-outline'}
                        iconeCor={colorPretoMaisFraco}
                    />



                    <CardText
                        titulo={`Serviço R$ ${valor_servio.toFixed(0)},00`}
                        icone={'card-outline'}
                        iconeCor={colorPretoMaisFraco}
                    />



                    <CardText
                        titulo={`Total R$ ${Valor_total.toFixed(0)},00`}
                        icone={'card-outline'}
                        iconeCor={colorPretoMaisFraco}
                    />


                    <CardText
                        titulo={'Lembrando quê, esse valor poderá sofrer alterações se houver mudanças durante o serviço.'}
                        icone={'alert-outline'}
                        iconeCor={colorPretoMaisFraco}
                    />










                    <ExpandableCard
                        collapsedCardItems={[
                            { label: 'Detalhes', value: 'ver mais' },
                        ]}
                        expandedCardItems={[
                            { label: 'Veiculo', value: veiculo },
                            { label: 'Serviço', value: tipo_servico_string },
                            { label: 'Numeração do pneu', value: numeracao_pneu },
                            { label: 'Quantidade de pneus', value: qnt_pneu },
                            { label: 'Forma de pagamento', value: forma_pagamento_string }

                        ]}
                        style={{ backgroundColor: colorBrancoFosco, marginHorizontal: 10, marginTop: 30 }}
                        labelStyle={{ fontSize: 16 }}
                        valueStyle={{ fontSize: 15, fontWeight: 'bold' }}
                        useNativeDriver={true}


                    />








                    <BotaoAzul
                        acao={GeraAtendimento}
                        titulo={'Confirmar atendimento'} />

                    <BotaoBranco
                        acao={DeletarOrcamento}
                        titulo={'Cancelar orçamento'} />



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