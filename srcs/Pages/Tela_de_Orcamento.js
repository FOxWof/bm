import React, { useState, useEffect, useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, ScrollView, StatusBar, Dimensions, TextInput } from 'react-native';
import BotaoVoltarAoInicio from './../Componentes/BotaoVoltarAoInicio';
import { useNavigation } from '@react-navigation/native';
import CardInput from './../Componentes/CardInput';
import CardText from '../Componentes/CardText';
import { colorFacebookAzul, colorPretoMaisFraco, colorBranco } from './../../Paleta_cores';
import CardInputForm from '../Componentes/CardInputForm';
import PickerSelect from './../Componentes/PickerSelect';
import PickerSelectServico from '../Componentes/PickerSelectServico';
import PickerSelectPagamento from '../Componentes/PickerSelectPagamento';
import BotaoAzul from './../Componentes/BotaoAzul';
import { AuthContext } from '../Context/AuthContext';





export default function Tela_de_Orcamento(props) {

    const navegacao = useNavigation();
    const dados = props.route.params

    const { usuario } = useContext(AuthContext);

    const [veiculo, setVeiculo] = useState();
    const [obs, setObs] = useState();





    let dados_Confirmacao = {
        dados,
        usuario,

    }





    function h_voltar() {

        navegacao.navigate('Inicio');

    }



    function h_orcamento() {

        navegacao.navigate('Tela_de_Confirmacao', dados_Confirmacao);

    }




    return (
        <SafeAreaView style={css.bg}>
            <StatusBar hidden={true} />
            <ScrollView>

                <View style={{ padding: 15 }}>


                    <BotaoVoltarAoInicio
                        acao={h_voltar} />



                    <CardText
                        titulo={dados}
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
                        titulo={usuario.dados.whatsapp}
                        icone={'logo-whatsapp'}
                        iconeCor={colorPretoMaisFraco}
                    />



                    <CardText
                        titulo={usuario.dados.nome}
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