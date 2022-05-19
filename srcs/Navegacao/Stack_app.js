import React from 'react';
import { View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
import Main_user from '../Pages/Main_user';
import Tela_de_Orcamento from '../Pages/Tela_de_Orcamento';



export default function Stack_app() {


    const stack  = createNativeStackNavigator();


 return ( 
     <stack.Navigator
     screenOptions={{
         headerShown:false
     }}
     > 

         <stack.Screen name='Inicio' component={Main_user}/> 
         <stack.Screen name='Tela_de_Orcamento' component={Tela_de_Orcamento}/> 


     </stack.Navigator>

  );
}