import React from 'react';
import { View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
import Main_user from '../Pages/Main_user';
import Tela_de_Orcamento from '../Pages/Tela_de_Orcamento';
import Tela_de_Confirmacao from '../Pages/Tela_de_Confirmacao';
import Conclusao from '../Pages/Conclusao';
import MeusAtendimentos from '../Pages/User/MeusAtendimentos';
import Infos from '../Pages/User/Infos';
import Notificacoes from '../Pages/User/Notificacoes';





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
         <stack.Screen name='Tela_de_Confirmacao' component={Tela_de_Confirmacao}/> 
         <stack.Screen name='Conclusao' component={Conclusao}/> 
         <stack.Screen name='MeusAtendimentos' component={MeusAtendimentos}/> 
         <stack.Screen name='Infos' component={Infos}/> 
         <stack.Screen name='Notificacoes' component={Notificacoes}/> 






         


     </stack.Navigator>

  );
}