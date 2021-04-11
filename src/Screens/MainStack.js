import React from 'react';
import { createStackNavigator, Text } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import MyServiceScreen from './MyServiceScreen';
import SettingsSreen from './SettingsSreen';
import ServicoScreen from './ServicoScreen';
import Logout from './logout';

//para fazer testes
import LoginScreen from './LoginScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function MainStack(route) {
    getTabBarVisibility = (route) => {
        const routeName = route.state
          ? route.state.routes[route.state.index].name
          : '';
      
        if (routeName === 'Servico') {
          return false;
        }
      
        return true;
      }
    return(
        <NavigationContainer 
            screenOptions = {({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;            
                    if (route.name === 'Home') 
                    {
                        iconName = focused
                        ? 'home'
                        : 'home';
                    }      
                    else if (route.nome === 'Settings')
                    {
                    iconName = focused 
                    ? 'contact'
                    : 'contact';
                    }
                    else if (route.nome === 'Adicionar Servico')
                    {
                    iconName = focused 
                    ? 'contact'
                    : 'contact';
                    }
                    else if (route.nome === 'Servico')
                    {
                    iconName =  null
                    ? ''
                    : '';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions = {{
                activeTintColor: 'pink',
                inactiveTintColor: 'gray',
                style: 
                {
                    borderTopColor: 'blue',
                    shadowRadius: 50,
                    shadowColor: 'green',
                    backgroundColor: '#0D1418'
                }
            }}
        >
            
            <Tab.Navigator>
                
                <Stack.Screen name="Home" component={HomeScreen}  />
                <Stack.Screen name="Adicionar Servico" component={MyServiceScreen} />
                <Stack.Screen name="Settings" component={SettingsSreen} />
                <Stack.Screen name="Servico" component={ServicoScreen} />
                <Stack.Screen name="Login" component = {LoginScreen} />
            </Tab.Navigator>
        </NavigationContainer> 
    );
}