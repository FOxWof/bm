import React, { useState, useContext, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import { colorFacebookAzul } from '../../Paleta_cores';
import { Picker } from '@react-native-picker/picker';
import { colorBranco, colorPretoMaisFraco } from './../../Paleta_cores';
import Ionicons from 'react-native-vector-icons/Ionicons';   
import { OrcamentoContext } from './../Context/OrcamentoContext';







export default function PickerSelectServico() {

  const [selectedLanguage, setSelectedLanguage] = useState(1);
  const {get_servico} = useContext(OrcamentoContext);





  useEffect(()=>{

    get_servico(selectedLanguage);



  }, [selectedLanguage])





  return (
    <View style={css.cardInput} >

      <View style={css.headerCard}>


        <Ionicons name={'construct-outline'} color={colorPretoMaisFraco} size={24} />
        <Text style={css.fontCard}>{'Qual serviço você precisa'}</Text>



      </View>


      <View style={{ flexDirection: 'column', marginLeft: 15, marginRight: 15, marginTop: -15 }}>

        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue, itemIndex)

          }>

          <Picker.Item label="Calibragem" value={1} />
          <Picker.Item label="Conserto de pneu" value={2} />
          <Picker.Item label="Troca de pneu" value={3} />
          <Picker.Item label="Vulcanização (Fria ou quente)" value={4} />

        </Picker>
      </View>


    </View>

  );



}





const css = StyleSheet.create({


  cardInput: {
    height: 100,
    backgroundColor: colorBranco,
    borderRadius: 20,
    marginBottom: 5

  },


  headerCard: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    paddingLeft: 15

  },


  fontCard: {
    marginLeft: 15,
    fontSize: 15,
    fontWeight: 'bold',
    color: colorPretoMaisFraco,

  },


})