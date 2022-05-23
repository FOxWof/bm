import React, { useEffect, useState, useContext } from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView, FlatList } from 'react-native';
import BotaoVoltarAoInicio from '../../Componentes/BotaoVoltarAoInicio';
import { StackActions, useNavigation } from '@react-navigation/native';
import { FirebaseContext } from '../../Context/FirebaseContext';
import CardAtendimentoAdm from '../../Adapters/CardAtendimentoAdm';
import CardHeader from '../../Adapters/CardHeader';
import { initializeAppIfNecessary } from '../../../FirebaseConfig';
import { getFirestore, collection, getDocs, doc, setDoc, getDoc, addDoc, query, where, deleteDoc, orderBy, onSnapshot } from 'firebase/firestore';
import ModalAtendimentos from '../../Componentes/ModalAtendimentos';





export default function Atendimentos() {

  initializeAppIfNecessary();

  //CONST

  const navegacao = useNavigation();
  const db = getFirestore();

  const { recuperar_dados_atributos_personalizados, listaDados, recuperar_todos_dados_colecao, dadosRecuperados } = useContext(FirebaseContext);

  const [allAtendimentos, setAllAtendimentos] = useState([]);

  const [isVisivel, setIsVisivel] = useState(false);
  const [concluido, setConcluido] = useState([]);
  const [cancelado, setCancelado] = useState([]);
  const [acaminho, setAcaminho] = useState([]);
  const [noPago, setNoPago] = useState([]);
  const [local, setLocal] = useState([]);























  //USEEFFECTS

  useEffect(() => {

    recuperar_dados_atributos_personalizados("atendimentos", "status", 0, "desc");

  }, []);




  useEffect(() => {

    setAllAtendimentos(listaDados);



  }, [listaDados]);






  useEffect(() => {


    async function recupera() {


      const q = query(collection(db, 'atendimentos'), where("status", "==", 1));
      const querySnapshot = onSnapshot(q, (querySnap) => {

        const lista = ([]);

        querySnap.forEach(doc => {

          lista.push({
            ...doc.data(),
            id: doc.id
          });
        });


        setAcaminho(lista);


      });

    }


    recupera()


  }, [])







  useEffect(() => {


    async function recupera() {


      const q = query(collection(db, 'atendimentos'), where("status", "==", 2));
      const querySnapshot = onSnapshot(q, (querySnap) => {

        const lista = ([]);

        querySnap.forEach(doc => {

          lista.push({
            ...doc.data(),
            id: doc.id
          });
        });


        setLocal(lista.length);


      });

    }


    recupera()


  }, [])







  useEffect(() => {


    async function recupera() {


      const q = query(collection(db, 'atendimentos'), where("status", "==", 3));
      const querySnapshot = onSnapshot(q, (querySnap) => {

        const lista = ([]);

        querySnap.forEach(doc => {

          lista.push({
            ...doc.data(),
            id: doc.id
          });
        });


        setConcluido(lista.length);


      });

    }


    recupera()


  }, [])






  useEffect(() => {


    async function recupera() {


      const q = query(collection(db, 'atendimentos'), where("status", "==", 4));
      const querySnapshot = onSnapshot(q, (querySnap) => {

        const lista = ([]);

        querySnap.forEach(doc => {

          lista.push({
            ...doc.data(),
            id: doc.id
          });
        });


        setNoPago(lista.length);


      });

    }


    recupera()


  }, [])





  useEffect(() => {


    async function recupera() {


      const q = query(collection(db, 'atendimentos'), where("status", "==", 5));
      const querySnapshot = onSnapshot(q, (querySnap) => {

        const lista = ([]);

        querySnap.forEach(doc => {

          lista.push({
            ...doc.data(),
            id: doc.id
          });
        });


        setCancelado(lista);


      });

    }


    recupera()


  }, [])















  //FUNCS

  function handler_voltar() {
    navegacao.dispatch(StackActions.replace('PainelAdm'));
  }



  function abreModal() {

    setIsVisivel(true);


  }

  console.log(isVisivel)











  return (
    <>

      {allAtendimentos ?

        <SafeAreaView style={css.bg}>
          <ScrollView showsHorizontalScrollIndicator={false}>

            <ModalAtendimentos  data={acaminho} visible={isVisivel} />


            <View style={css.header}>

              <BotaoVoltarAoInicio
                acao={handler_voltar}
                titulo={'Voltar ao inicio'} />


            </View>

            <View style={css.body}>

              <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>


                  <CardHeader quantidade={allAtendimentos.length} tituloCard={'Em espera'} />
                  <CardHeader acao={abreModal} quantidade={acaminho.length} tituloCard={'A caminho'} />
                  <CardHeader quantidade={local} tituloCard={'No local'} />
                  <CardHeader quantidade={concluido} tituloCard={'Concluidos'} />
                  <CardHeader quantidade={noPago} tituloCard={'Não pagos'} />
                  <CardHeader quantidade={cancelado.length} tituloCard={'Cancelados'} />

                </ScrollView>

              </View>



              <FlatList
                data={allAtendimentos}
                renderItem={({ item }) => <CardAtendimentoAdm data={item} />}
                keyExtractor={item => item.id}
              />

            </View>


          </ScrollView>

        </SafeAreaView>
        :

        <SafeAreaView style={css.bg}>
          <View style={css.body}>
            <Text>Não há atendimentos</Text>
          </View>
        </SafeAreaView>

      }


    </>

  );


}



const css = StyleSheet.create({

  bg: {
    flex: 1
  },

  header: {
    padding: 15,
    backgroundColor: 'white'
  },

  body: {
    flex: 2,
    margin: 10,
  }



})