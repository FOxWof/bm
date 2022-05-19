import React from 'react';
import { View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Lobby from '../Pages/Lobby';
import Entrar from './../Pages/Entrar';
import Cadastro from './../Pages/Cadastro';




export default function Stack_auth() {


    const stack  = createNativeStackNavigator();


 return ( 
     <stack.Navigator
     screenOptions={{
         headerShown:false
     }}
     > 

         <stack.Screen name='Lobby' component={Lobby}/>
         <stack.Screen name='Entrar' component={Entrar}/>
         <stack.Screen name='Cadastro' component={Cadastro}/>


     </stack.Navigator>

  );
}