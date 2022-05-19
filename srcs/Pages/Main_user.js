import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, ScrollView, StatusBar, Dimensions, TextInput } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Callout } from 'react-native-maps';
import BotaoOrçamento from '../Componentes/BotaoOrçamento';
import { useNavigation } from '@react-navigation/native';





export default function Main_user() {

  const navegacao = useNavigation();

  const [location, setLocation] = useState([]);
  const [origem, setOrigem] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [dadoslocation, setDadoslocation] = useState([]);

  const [localUserAtual, setLocalUserAtual] = useState();



  let text = 'Aguarde..';




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
        
        }


      }


    })();
  }, []);






  useEffect(() => {


    if (location) {


      setDadoslocation(location);


    } else {
      text = "Error"
    }


  }, [location])





  function h_orcamento() {
    navegacao.navigate('Tela_de_Orcamento', localUserAtual);

  }


 

  return (
    <SafeAreaView style={css.bg}>
      <StatusBar hidden={true} />
      <View>


        <MapView
          style={css.map}
          region={origem}
          showsUserLocation={true}
          zoomEnabled={true}
        >
        </MapView>



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