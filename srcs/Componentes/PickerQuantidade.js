import React, { useState, useContext, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import { colorFacebookAzul } from '../../Paleta_cores';
import { Picker } from '@react-native-picker/picker';
import { colorBranco, colorPretoMaisFraco } from './../../Paleta_cores';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { OrcamentoContext } from './../Context/OrcamentoContext';





export default function PickerQuantidade() {

  const [selectedLanguage, setSelectedLanguage] = useState();
  const {get_qntd} = useContext(OrcamentoContext);



  useEffect(()=>{

    get_qntd(selectedLanguage);


  }, [selectedLanguage])






  return (
    <View style={css.cardInput} >

      <View style={css.headerCard}>


        <Ionicons name={'car-outline'} color={colorPretoMaisFraco} size={24} />
        <Text style={css.fontCard}>{'Serviço em quantos pneus'}</Text>



      </View>


      <View style={{ flexDirection: 'column', marginLeft: 15, marginRight: 15, marginTop: -15 }}>

        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue, itemIndex)

          }>

          <Picker.Item label="1 pneu" value={1} />
          <Picker.Item label="2 pneus" value={2} />
          <Picker.Item label="3 pneus" value={3} />
          <Picker.Item label="4 pneus" value={4} />
          <Picker.Item label="5 pneus" value={5} />
          <Picker.Item label="6 pneus" value={6} />
          <Picker.Item label="7 pneus" value={7} />
          <Picker.Item label="8 pneus" value={8} />
          <Picker.Item label="9 pneus" value={9} />
          <Picker.Item label="10 pneus" value={10} />
          <Picker.Item label="11 pneus" value={11} />
          <Picker.Item label="12 pneus" value={12} />
          <Picker.Item label="13 pneus" value={13} />
          <Picker.Item label="14 pneus" value={14} />
          <Picker.Item label="15 pneus" value={15} />
          <Picker.Item label="16 pneus" value={16} />
          <Picker.Item label="17 pneus" value={17} />
          <Picker.Item label="18 pneus" value={18} />
          <Picker.Item label="19 pneus" value={19} />
          <Picker.Item label="20 pneus" value={20} />


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