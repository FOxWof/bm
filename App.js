import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import{ NavigationContainer} from '@react-navigation/native';
import AuthProvider from './srcs/Context/AuthContext'; 
import Rota from './srcs/Rotas/Rota';


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Rota/>
      </AuthProvider>
    </NavigationContainer>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
