import React, { useState, useEffect, useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, ScrollView, ToastAndroid, Alert, StatusBar, Dimensions, BackHandler, TextInput } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Callout } from 'react-native-maps';
import BotaoOrçamento from '../Componentes/BotaoOrçamento';
import { StackActions, useNavigation } from '@react-navigation/native';
import { getDistance, getPreciseDistance } from 'geolib';
import { longitudeFix, latitudeFix } from '../../LocationFix';
import { AuthContext } from '../Context/AuthContext';
import { OrcamentoContext } from '../Context/OrcamentoContext';
import { FirebaseContext } from './../Context/FirebaseContext';
import { colorFacebookAzul } from '../../Paleta_cores';
import Fab from '../Componentes/Fab';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import PopUp from '../Componentes/Popup';






export default function Main_user() {

  const navegacao = useNavigation();

  const [origem, setOrigem] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [localUserAtual, setLocalUserAtual] = useState();
  const [distPrice, setDistPrice] = useState();

  const { usuario } = useContext(AuthContext);
  const { salvar_dados_comId_noDoc } = useContext(FirebaseContext);
  const { recebe_localizacao_atual, recebe_preco_deslocamento } = useContext(OrcamentoContext);


  const [isvisible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);






  //USEEFFECTS


  useEffect(() => {

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('As permissões foram negadas');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setOrigem({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.000922,
        longitudeDelta: 0.000421,
      });

      let { coords } = await Location.getCurrentPositionAsync();

      if (coords) {

        const { latitude, longitude } = coords;


        let response = await Location.reverseGeocodeAsync({
          latitude,
          longitude
        });

        for (let item of response) {

          let address = `${item.district}, ${item.street}, ${item.streetNumber}`;
          setLocalUserAtual(address);
          recebe_localizacao_atual(address);


          let dados_localizacao_atual_usuario = {
            latitude,
            longitude,
            address

          }

          salvar_dados_comId_noDoc('localizacao_atual', dados_localizacao_atual_usuario, user_id);



        }





        var pdis = getPreciseDistance(

          //location usuario
          { latitude: latitude, longitude: longitude },

          //location bm fix
          { latitude: latitudeFix, longitude: longitudeFix }
        );

        const distanceKm = pdis / 1000;
        const valorDeslocamento = distanceKm * 8;


        let dist_and_price = {
          distanceKm,
          valorDeslocamento
        }


        setDistPrice(dist_and_price);
        recebe_preco_deslocamento(dist_and_price);







      }


    })();
  }, []);













  //LETS

  let user_id = usuario.dados.user_id;
  let nome_cliente = usuario.dados.nome;

  let text = 'Aguarde..';










  //FUNCS

  function h_orcamento() {
    navegacao.navigate('Tela_de_Orcamento', { localUserAtual, distPrice });

  }








  function abreMenu() {
    navegacao.navigate('MeusAtendimentos');

  }











  return (
    <SafeAreaView style={css.bg}>
      <StatusBar hidden={true} />
      <View>

        <PopUp nomeCliente={nome_cliente} onDismiss={closeMenu} visible={isvisible} />

        <MapView
          style={css.map}
          region={origem}
          showsUserLocation={true}
          zoomEnabled={true}
        >
        </MapView>


        <Fab
          icone={'menu'}
          acao={openMenu}
          colorBG={colorFacebookAzul}
        />





        <View style={css.footer}>
          <BotaoOrçamento
            acao={h_orcamento}
            titulo={'Faça seu orçamento'}
          />
        </View>




      </View>

    </SafeAreaView>
  );
}


const css = StyleSheet.create({


  bg: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  buttonCallout: {

    position: 'absolute',
    bottom: 10,
    alignSelf: "center",
    height: 150
  },


  footer: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 32,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",

    elevation: 3,
  },

  footerText: {
    width: 200,
    color: "#8fa7b3",
  },

})