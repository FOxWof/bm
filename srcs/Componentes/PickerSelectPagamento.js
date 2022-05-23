import React, { useState, useContext, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import { colorFacebookAzul } from '../../Paleta_cores';
import { Picker } from '@react-native-picker/picker';
import { colorBranco, colorPretoMaisFraco } from './../../Paleta_cores';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { OrcamentoContext } from './../Context/OrcamentoContext';





export default function PickerSelectPagamento() {

  const [selectedLanguage, setSelectedLanguage] = useState(1);
  const {get_formaPagamento} = useContext(OrcamentoContext);



  useEffect(()=>{

    get_formaPagamento(selectedLanguage);


  }, [selectedLanguage])






  return (
    <View style={css.cardInput} >

      <View style={css.headerCard}>


        <Ionicons name={'card-outline'} color={colorPretoMaisFraco} size={24} />
        <Text style={css.fontCard}>{'Forma de pagamento'}</Text>



      </View>


      <View style={{ flexDirection: 'column', marginLeft: 15, marginRight: 15, marginTop: -15 }}>

        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue, itemIndex)

          }>

          <Picker.Item label="Dinheiro" value={1} />
          <Picker.Item label="Pix" value={2} />
          <Picker.Item label="Cartão de debito" value={3} />
          <Picker.Item label="Cartão de credito" value={4} />

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