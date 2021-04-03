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
import Modal from './Modal.js.js';


export default function HomeScreen({navigation}) 
{  
  const [servicos,setarServicos] = useState([]);
  useEffect(()=>{
      db.collection('servicos').onSnapshot(snapshot=>{
        setarServicos(snapshot.docs.map(function(doc){
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

      <View style={{ flex:0.3, paddingTop: 10}}>
        <Text style = {{paddingLeft: 20, paddingBottom: 10, fontSize: 20, color: '#595959'}}>Destaques</Text>
        <ScrollView horizontal contentContainerStyle={{width:'200%',height:'100%'}} style={{flex:1, paddingTop: 10}}>
          <StatusBar hidden/>
          {
            servicos.map((val,index)=>{
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
            servicos.map((val,index)=>{
              return (
                <View style={{flexDirection: 'column',marginBottom:10}}>
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
                    <View style = {{justifyContent: 'center'}}>
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

export default HomeScreen;