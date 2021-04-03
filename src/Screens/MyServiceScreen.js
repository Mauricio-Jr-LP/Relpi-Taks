import React,{useEffect,useState, useRef} from 'react';
import { Animated, View, Text,Button,TextInput, KeyboardAvoidingView,StyleSheet,ImageBackground,Image, StatusBar, LogBox } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {db}  from './firebase';
import {auth}  from './firebase';
import * as WebBrowser from 'expo-web-browser';
import Modal from './Modal.js';
import HomeScreen from './src/Screens/HomeScreen';

function MyServiceScreen() {
    const [showModal, setModal] = useState(false);
    const abrirModal = () => {
      //alert('clic')
      setModal(!showModal);
    }
    const [servicos,setarServicos] = useState([]);
    useEffect(()=>{
        db.collection('servicos').onSnapshot(snapshot=>{
          setarServicos(snapshot.docs.map(function(doc){
                return {info:doc.data()}
            }));
        })
    },[])
    
    return (
      
      <View style = {{flex:1, width: '100%', height: 75, backgroundColor: 'black'}}>
      {
          (showModal)?
            <Modal showModal = {showModal} setModal = {setModal}/>
          :
          <View></View>
        }
  
            <View style = {{ color: 'black'}}>
              <TouchableOpacity  onPress={() => abrirModal()} style = {{}}> 
                <Text style = {{color: 'white', backgroundColor: '#38A6FF', textAlignVertical: 'center', textAlign: 'center' , width: '100%', height: '100%'}}>
                  Adicionar anúncio     
                </Text>
              </TouchableOpacity>
            </View>
        </View> 
    );
  }