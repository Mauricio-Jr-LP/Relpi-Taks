import React,{useEffect,useState, useRef} from 'react';
import { View, Text, TextInput, Image, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {auth}  from '../../firebase';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainStack from './MainStack';
import LoginScreen from './LoginScreen';

const Tab = createBottomTabNavigator();

export default function logout()
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


  const logout = () => {
    auth.signOut();
    setUser('');
    alert("logout")
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
      <View style = {{flex: 1}}>
      <TouchableOpacity  onPress = {() => {logout()}}>
        <Text>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
    )
  }
  
  else{
    return(
      <View style = {{flex: 1}}>
        <TouchableOpacity  onPress = {() => {logout()}}>
          <Text>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}