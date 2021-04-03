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

export default function ServicoScreen({ route, navigation }) {
    const abrirNavegador = async () => 
    {
      let result = await WebBrowser.openBrowserAsync(route.params.contato);
    }
    return (
      <View style={{flex:1}}>
      <ScrollView style={{ flex: 1 }}>
        <ImageBackground style={styles.imageConteudo} source={{ uri: route.params.imagem }} >
          <View style={{width:'100%', height:'100%', backgroundColor:'rgba(0,0,0,0.5)', justifyContent:'flex-end', padding: 10}}>
            <Text style={{fontSize:27,color: 'white'}}>{route.params.usuario}</Text>
            <Text style={{fontSize:27,color: 'white'}}>{route.params.tipo}</Text>
          </View>          
        </ImageBackground>   
           <View style={{flex:0.8}}>
           <Text style={{
            fontSize:15,
            color: 'black',
            padding:20
          }}
          >
            {route.params.descricao}
          </Text>
        </View>
      </ScrollView>
      <View style = {{ padding: 10, width: '100%', alignItems: 'flex-end'}}>
        <TouchableOpacity onPress = {() => abrirNavegador(route.params.contato)}>
          <ImageBackground  style = {{width: 50, height: 50, }} source={{ uri: 'https://logosmarcas.net/wp-content/uploads/2020/05/WhatsApp-Logo.png' }}>
  
          </ImageBackground>
        </TouchableOpacity>
      </View>
      </View>
    );
  }