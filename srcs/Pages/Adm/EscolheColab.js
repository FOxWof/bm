import React, { useState, useEffect, useContext } from 'react';
import { View, SafeAreaView, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { FAB } from 'react-native-paper';
import { colorFacebookAzul } from './../../../Paleta_cores'; 
import { initializeAppIfNecessary } from '../../../FirebaseConfig';
import { getFirestore, collection, getDocs, doc, setDoc, getDoc, addDoc, updateDoc, query, where, deleteDoc, orderBy, onSnapshot } from 'firebase/firestore';








const css = StyleSheet.create({

    bg: { flex: 1, backgroundColor: 'white' },

    itemBody: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 },

    divisor: { height: 1, backgroundColor: '#f7f7f7' },

    indicator: { height: 15, width: 15, borderRadius: 30, backgroundColor: 'red' },

    font: { fontSize: 15 },

    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: colorFacebookAzul
    },



});






export default function EscolheColab(props) {

    initializeAppIfNecessary();

    const [colab, setColab] = useState([]);

    let verifica = null;
    let colabs = [
        { id: 1, nome: "Evaldo", selected: false },
        { id: 2, nome: "Wilson", selected: false },


    ]
 


    let doc_id = props.route.params.data.id

    console.log(doc_id);





    //Atuaizar um documento 

    async function att_documento(doc_id,) {

        const refDocUpdate = doc(db, 'atendimentos', doc_id,);

        await updateDoc(refDocUpdate, {
            status: valor
        });

    }





    useEffect(() => {

        setColab(colabs)

    }, [])







    const CorpoItem = ({ data, click }) => {

        verifica = data.selected;

        return (
            <>
                <View>

                    <TouchableOpacity style={css.itemBody} onPress={click} >
                        <Text style={css.font}>{data.nome}</Text>
                        <View style={{ height: 15, width: 15, borderRadius: 30, backgroundColor: data.selected ? colorFacebookAzul : 'grey' }} />
                    </TouchableOpacity>



                </View>


                <View style={css.divisor} />
            </>

        );
    }







    function handlerClick(item) {

        const newItem = colab.map((val) => {
            if (val.id == item.id) {
                return { ...val, selected: !val.selected }
            } else {
                return val;
            }
        });

        setColab(newItem)

    }



    function handler_attColab() {
        atualiza_documento("atendimentos")

    }





    return (
        <SafeAreaView style={css.bg}>

            <FlatList
                data={colab}
                renderItem={({ item }) => <CorpoItem data={item} click={() => handlerClick(item)} />}
                keyExtractor={item => item.id}
            />

            <FAB
                onPress={() => handler_attColab}
                style={css.fab}
                icon={'arrow-right'}
            />




        </SafeAreaView>
    );
}
