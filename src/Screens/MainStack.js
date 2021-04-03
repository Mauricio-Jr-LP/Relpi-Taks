import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Servico" component={ServicoScreen} display = {'none'} />
        <Stack.Screen name="Adicionar Servico" component={MyServiceScreen} />
        </Stack.Navigator>
);