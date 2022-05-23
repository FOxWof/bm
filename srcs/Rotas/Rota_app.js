import React, { useContext } from 'react';
import { View } from 'react-native';
import { AuthContext } from '../Context/AuthContext';
import Stack_app from './../Navegacao/Stack_app';
import Stack_adm from '../Navegacao/Stack_adm';
import Stack_ColMovel from '../Navegacao/Stack_ColMovel';
import Stack_ColFixo from '../Navegacao/Stack_ColFixo';



export default function Rota_app() {

  const { usuario } = useContext(AuthContext);



  let tipoU = usuario.tipo;

  if (tipoU == 0) {

    return (
      <Stack_app />
    )

  } else if (tipoU == 1) {


    return (
      <Stack_adm />
    )

  } else if (tipoU == 3) {


    return (
      <Stack_ColFixo />
    )

  } else if (tipoU == 4) {


    return (
      <Stack_ColMovel />
    )

  }







}