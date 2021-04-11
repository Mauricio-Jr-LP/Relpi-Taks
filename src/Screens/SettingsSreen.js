import React,{ useEffect,useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import {auth}  from '../../firebase';


import LoginScreen from './LoginScreen';
import MainStack from './MainStack';



export default function SettingsScreen() 
{
  const [user, setUser] = useState('');


  const logout = () => {
    auth.signOut();
    setUser('');
    <SettingsScreen />
    
  }

    if(!user){
      return(
        <View style = {{ height: '100%', width: '100%', backgroundColor: '#38A6FF', justifyContent: 'center' }}>
        <TouchableOpacity onPress = {() => {logout()}}> 
        <Text style = {{textAlignVertical: "center",textAlign: "center", color: 'white'}}>
          TODO: Fazer pezer perfil e logout aqui
        </Text>
        </TouchableOpacity> 
      </View>
      )
    }

    else{
    return (
      <View style = {{flex: 1}}>
        <LoginScreen title = "login" />
      </View>
    )
    }
}