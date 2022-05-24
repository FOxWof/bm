import React,{useState, useContext} from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PainelAdm from '../Pages/Adm/PainelAdm'; 
import Orcamentos from '../Pages/Adm/Orcamentos';
import Clientes from '../Pages/Adm/Clientes';
import Colaboradores from '../Pages/Adm/Colaboradores';
import GridFiltros from '../Pages/Adm/GridFiltros';






export default function Stack_adm() {


    const stack = createNativeStackNavigator();


    return (
        <stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >

            <stack.Screen name='PainelAdm' component={PainelAdm} />
            <stack.Screen name='Orcamentos' component={Orcamentos} />
            <stack.Screen name='Clientes' component={Clientes} />
            <stack.Screen name='Colaboradores' component={Colaboradores} />
            <stack.Screen name='GridFiltros' component={GridFiltros} />

            










        </stack.Navigator>

    );
}