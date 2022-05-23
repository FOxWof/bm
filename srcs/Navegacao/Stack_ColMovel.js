import React,{useState, useContext} from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  
import PainelColMovel from '../Pages/ColaboradorMovel/PainelColMovel';






export default function Stack_ColMovel() {


    const stack = createNativeStackNavigator();


    return (
        <stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >

            <stack.Screen name='PainelColMovel' component={PainelColMovel} />









        </stack.Navigator>

    );
}