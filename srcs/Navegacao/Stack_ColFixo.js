import React,{useState, useContext} from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PainelColFixo from '../Pages/ColaboradorFixo/PainelColFixo';





export default function Stack_ColFixo() {


    const stack = createNativeStackNavigator();


    return (
        <stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >

            <stack.Screen name='PainelColFixo' component={PainelColFixo} />









        </stack.Navigator>

    );
}