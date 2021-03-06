import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,ImageBackground,Image, StatusBar } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {db, auth}  from '../../firebase';
import * as WebBrowser from 'expo-web-browser';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ServicoScreen from './ServicoScreen';


export default function HomeScreen({navigation}) 
{  
  const [servicos,setarServicos] = useState([]);
  useEffect(()=>{
    db.collection('servicos').onSnapshot(snapshot =>{
        setarServicos(snapshot.docs.map(function(doc)
        {
          return {info:doc.data()}
        }));
    })
  },[])
  

  const image = { uri: 'https://scontent.fssa6-1.fna.fbcdn.net/v/t1.6435-9/167915955_2041335076008016_2340786154038023060_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=4PuIVy8lmu4AX-w4cIe&_nc_ht=scontent.fssa6-1.fna&oh=1658e87513c1e9e4ef89a35876b33c30&oe=608ECDBC' };

  return (
    <View style={{flex:1}}>

      <View style = {{backgroundColor: '#38A6FF', paddingLeft: 20, flexDirection: 'row', width: '100%', height: 100, alignItems: 'center'}}>
        <TouchableOpacity>
          <ImageBackground style = {{width: 100, height: 100}} source = {image}/>
        </TouchableOpacity>
      </View>

      <View style={{ flex:0.5}}>
        <View style = {{height: 50, width: '100%', backgroundColor: '#38A6FF'}}>
          <View style = {{height: 50, width: '100%', backgroundColor: '#F2F2F2', borderTopLeftRadius: 25, borderTopRightRadius: 25,}}>
            <Text style = {{paddingLeft: 20, paddingTop: 10, fontSize: 20, color: '#595959'}}>
              Destaques
            </Text>
          </View>
        </View>
        <ScrollView horizontal contentContainerStyle={{width:'200%',height:'100%'}} style={{flex:1}}>
          <StatusBar hidden/>
          {
            servicos.map((val,index)=>
            {
              if(index < 2)
              {
                return (
                  <ImageBackground style={styles.image} source={{ uri: val.info.imagem }}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Servico',
                      {
                        usuario: val.info.usuario,
                        descricao: val.info.descricao,
                        imagem: val.info.imagem,
                        tipo: val.info.tipo,
                        preco: val.info.preco,
                        contato: val.info.contato
                      })} 
                      style = {{ width:'100%', height:'100%', backgroundColor:'rgba(0,0,0,0.1)', justifyContent:'flex-end' }}
                    >
                      <Text style={{fontSize:27,color:'white'}}>{val.info.usuario} - {val.info.tipo}</Text>
                    </TouchableOpacity>
                  </ImageBackground>
                )
              }
            })
          }
        </ScrollView>
      </View>
        
      <View style = {{flex:0.7,padding:20}}>
        <View style = {{width:70,height:2,backgroundColor:'#595959',position:'absolute', left:20, top:50}}></View>
        <Text style = {{fontSize: 20, color: '#595959'}}>Relpers</Text>
        <ScrollView contentContainerStyle={{paddingTop:20}} style={{flex:1 }}>
          {
            servicos.map((val,index)=>
            {
              return (
                <View style={{ width: '95%', flexDirection: 'column', borderRadius: 20 ,marginBottom:10, marginLeft: '2%', backgroundColor: '#F2F2F2', 
                shadowColor: "#000", shadowOffset: { width: 3, height: 12,}, shadowOpacity: 0.6, shadowRadius: 20, elevation: 5,}}>
                  <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>navigation.navigate('Servico',
                    {
                      usuario: val.info.usuario,
                      tipo: val.info.tipo,
                      descricao: val.info.descricao,
                      imagem: val.info.imagem,
                      contato: val.info.contato
                    })}
                  >
                    <Image source = {{ uri: val.info.imagem}} style={{width:100,height:100, borderRadius: 20}} />
                    <View style = {{justifyContent: 'center' }}>
                      <Text style={{padding:10, color: 'black'}}>{val.info.usuario}</Text>
                      <Text style={{padding:10, color: 'black'}}>{val.info.tipo}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            })
          }      
        </ScrollView>
      </View>        
    </View>
  );
}
/*
function ServicoScreen({ route, navigation }) {
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
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
<NavigationContainer >
  <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Servico" component={ServicoScreen} />
  </Stack.Navigator>
</NavigationContainer>
*/

const styles = StyleSheet.create({
  image: 
  {
    resizeMode: 'cover',
    justifyContent:'flex-end',
    width:'100%',
    flex:1
  },
  imageConteudo: 
  {
    resizeMode: 'cover',
    width:'100%',
    flex:0.5,
    height:200
  }
});