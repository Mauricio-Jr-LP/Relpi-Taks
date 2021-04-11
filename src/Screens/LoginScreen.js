import React,{useEffect,useState, useRef} from 'react';
import { View, Text, TextInput, Image, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {auth}  from '../../firebase';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainStack from './MainStack';

const Tab = createBottomTabNavigator();

export default function LoginScreen()
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  useEffect(() =>{
    auth.onAuthStateChanged(function(val)
    {
      if(val != null)
      {
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
    alert("logout")
  }

  const criar = () => {
    auth.createUserWithEmailAndPassword(email, password)
  .then(function(val)
  {
    setUser(val.email);
    }).catch(function(error){
      alert(erro.message);
    })
  }

  /*
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000
    }).start();
  },[])  
  */

  if(!user)
  {
    return(
      <View style = {{flex: 1, backgroundColor: '#38A6FF', height: '100%', width: '100%'}}>
        <View style = {{flex: 1, alignItems: 'center', width: '100%', height: '50%', paddingTop: '40%'}}>
          <Image source = {require('../../assets/logo.png')} />
        
          <TextInput placeholder = 'Usuario' placeholderTextColor = "white" onChangeText = {(email) => setEmail(email)} value = {email} style = {{ width: '75%', height: 60, borderBottomWidth: 2, borderBottomColor: 'white'}}/>
          <TextInput placeholder = 'Senha' placeholderTextColor = "white" secureTextEntry = {true}  onChangeText = {(password) => setPassword(password)} value = {password}  style = {{ textDecorationColor: 'red', width: '75%', height: 60, borderBottomWidth: 2, borderBottomColor: 'white'}}/>
          
          <View style = {{ flex: 1, width: '75%', paddingTop: 25}}> 
            <TouchableOpacity onPress = {() => {login()}}>
              <View style = {{width: '100%', height: 50, borderColor: 'white', borderWidth: 2, borderRadius: 25, alignItems: 'center', justifyContent: 'center'}}>    
                <Text style = {{color: 'white'}}>
                  Entrar
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => {criar()}}>
              <View style = {{width: '100%', height: 50, borderColor: 'white', borderWidth: 2, borderRadius: 25, alignItems: 'center', justifyContent: 'center'}}>    
                <Text style = {{color: 'white'}}>
                  Criar
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
  
  else{
    return(
      <View style = {{flex: 1}}>
        <MainStack></MainStack>
      </View>
    )
  }
}