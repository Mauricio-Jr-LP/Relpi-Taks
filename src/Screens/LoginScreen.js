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


export default function LoginScreen()
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged(function(val){
      if(val != null){
        setUser(val.email);
      }
    })
  }, [])

  const login = () => {
    auth.signInWithEmailAndPassword(email, password).them(function(val)
    {
      setUser(val.email);
    }).catch(function(error){
      alert(erro.message);
    })
  }

  const logout = () => {
    auth.signOut();
    setUser('');
  }

  
  
  /*const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000
    }).start();
  },[])
  */


    if(!user){
    return(
       <View style = {{flex: 1}}>

          <View style = {{flex: 1}}>
            <Image source = {require('../myproject/assets/logo.png')} />
        </View>

        <View>
          <TextInput placeholder = 'Usuario' onChangeText = {(email) => setEmail(email)} value = {email}/>
          <TextInput placeholder = 'Senha' secureTextEntry = {true}  onChangeText = {(password) => setPassword(password)} value = {password} />
          
          <TouchableOpacity onPress = {() => {login()}}>
            <Text>
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  else{
    return(
      <View style = {{flex: 1}}>

          <View style = {{flex: 1}}>
            <Image source = {require('../myproject/assets/logo.png')} />
        </View>

        <View>
          
          <TouchableOpacity onPress = {() => {logout()}}>
            <Text>
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
/**/ 
