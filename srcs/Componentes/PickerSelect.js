import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import { colorFacebookAzul } from '../../Paleta_cores';
import { Picker } from '@react-native-picker/picker';
import { colorBranco, colorPretoMaisFraco } from './../../Paleta_cores';
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function PickerSelect() {

  const [selectedLanguage, setSelectedLanguage] = useState();



  return (
    <View style={css.cardInput} >

      <View style={css.headerCard}>


        <Ionicons name={'car-outline'} color={colorPretoMaisFraco} size={25} />
        <Text style={css.fontCard}>{'Numeração do pneu'}</Text>



      </View>


      <View style={{ flexDirection: 'column', marginLeft: 15, marginRight: 15, marginTop: -15 }}>

        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue, itemIndex)

          }>

          <Picker.Item label="175 65 R14" value={'R14'} />
          <Picker.Item label="175 65 R15" value={'R15'} />
          <Picker.Item label="175 65 R17" value={'R17'} />

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