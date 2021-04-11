import React from 'react';
import { View } from 'react-native';

import LoginScreen from './src/Screens/LoginScreen';
import MainStack from './src/Screens/MainStack';

//Dev - @mauricio_jr_lp

export default function App() 
{
  return (
  <View style = {{flex: 1}}>
    <MainStack title = "login" />
  </View>
  )
}