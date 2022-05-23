import React, { useContext } from 'react';
import { View } from 'react-native';
import Rota_app from './Rota_app';
import Rota_auth from './Rota_auth';
import { AuthContext } from './../Context/AuthContext';



export default function Rota() {

  const { verifica_user_logado } = useContext(AuthContext);


  return (
    verifica_user_logado ? <Rota_app /> : <Rota_auth />
  );
}