import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import{ NavigationContainer} from '@react-navigation/native';
import AuthProvider from './srcs/Context/AuthContext'; 
import Rota from './srcs/Rotas/Rota';
import OrcamentoProvider from './srcs/Context/OrcamentoContext';
import FirebaseProvider from './srcs/Context/FirebaseContext';
import { LogBox } from 'react-native';




export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <OrcamentoProvider>
          <FirebaseProvider>
            
          <Rota/>

          </FirebaseProvider>
        </OrcamentoProvider>
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
