import React, { useState, useContext, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import { colorFacebookAzul } from '../../Paleta_cores';
import { Picker } from '@react-native-picker/picker';
import { colorBranco, colorPretoMaisFraco } from './../../Paleta_cores';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { OrcamentoContext } from './../Context/OrcamentoContext';




export default function PickerColaboradorAdm() {

  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [colabs, setColabs] = useState([]);

  const { get_numPneu } = useContext(OrcamentoContext);


  let data = [

    { id: 1, nome: 'Wilson Novaes' },
    { id: 2, nome: 'Evaldo Novaes' },


  ]





  useEffect(() => {

    setColabs(data);

  }, [])








  useEffect(() => {

    get_numPneu(selectedLanguage);




  }, [selectedLanguage])





  const renderProductList = () => {
    return colabs.map((colaboradores) => {
      return <Picker.Item label={colaboradores.nome} value={colaboradores} />
    })
  }





  return (
    <View style={css.cardInput} >

      <View style={css.headerCard}>

        <Text style={css.fontCard}>{'Colaborador'}</Text>



      </View>


      <View style={{ flexDirection: 'column', marginTop: -15 }}>

        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>


          {renderProductList}

        </Picker>
      </View>


    </View>

  );



}





const css = StyleSheet.create({


  cardInput: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 5,
    marginTop: 20

  },


  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',

  },


  fontCard: {
    fontSize: 15,
    marginLeft: 2,
    color: colorPretoMaisFraco,

  },


})