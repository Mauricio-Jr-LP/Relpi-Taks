import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { db } from './firebase';

export default function Modal(props) 
{
    const [usuario, setUsuario] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState('');
    const [tipo, setTipo] = useState(''); 
    const [preco, setPreco] = useState('');
    const [contato, setContato] = useState('');
    const linkWhats = "https://api.whatsapp.com/send?phone=55";
    
    const criarTask = () =>{
        db.collection('servicos').add(
        {
            usuario: usuario,
            descricao: descricao,
            imagem: imagem,
            tipo: tipo,
            preco: preco,
            contato: contato
        })

        alert('Serviço anunciado com sucesso');
     
        setUsuario('');
        setDescricao('');
        setTipo('');
        setImagem('');
        setPreco('');
        setContato('');
    }
    
    return (
        
        <View style = {style.modalParent}>
            <View style = {{position: 'absolute', right: 0, top: 0, width:50, height: 50, backgroundColor: '#333', justifyContent: 'center'}}>
                <TouchableOpacity onPress = {() => props.setModal(!props.showModal)} style = {{height: '100%', width: '100%', backgroundColor: '#333', justifyContent: 'center'}}>
                    <Text style = {{color: 'white', textAlign: 'center'}}>X</Text>
                </TouchableOpacity>
            </View>
            <View style={style.boxModal}>
                <Text style = {{...style.textHeader, fontSize: 15}}>Qual o seu nome? </Text>
                <TextInput onChangeText = {(text) => setUsuario(text)} style = {style.txtIn} numberOfLines={4}></TextInput>
                
                <Text style = {{...style.textHeader, fontSize: 15}}>Qual o tipo de serviço? ("Encanador", "Pintor"...) </Text>
                <TextInput onChangeText = {(text) => setTipo(text)} style = {style.txtIn} numberOfLines={4}></TextInput>
                
                <Text style = {{...style.textHeader, fontSize: 15}}>Qual a descrição? </Text>
                <TextInput onChangeText = {(text) => setDescricao(text)} style = {{...style.txtIn, height: 100}} numberOfLines={8}></TextInput>
                
                <Text style = {{...style.textHeader, fontSize: 15}}>Qual o lik da sua imagem de perfil? </Text>
                <TextInput onChangeText = {(text) => setImagem(text)} style = {style.txtIn} numberOfLines={8}></TextInput>
                
                <Text style = {{...style.textHeader, fontSize: 15}}>Qual o preço? (Valor ou "A combinar se preferir") </Text>
                <TextInput onChangeText = {(text) => setPreco(text)} style = {style.txtIn} numberOfLines={8}></TextInput>
                
                <Text style = {{...style.textHeader, fontSize: 15}}>Qual o seu numero de contato? (Ex:75983525355)</Text>
                <TextInput onChangeText = {(text) => setContato(linkWhats + text)} style = {style.txtIn} numberOfLines={8}></TextInput>
              

                <TouchableOpacity onPress={() => criarTask()} style = {{...style. btnNavigation, justfyContent:'center', backgroundColor: '#3D4343'}}>
                    <Text style = {{color: 'white', fontSize: 14}}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
} 

const style = StyleSheet.create ({
    textHeader:
    {
        color: '#38A6FF',
        fontSize: 24,
        marginBottom: 5
    },
    modalParent:
  {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: 1
  },
  btnNavigation:
  {
    backgroundColor: '#38A6FF',
    padding: 20,
    marginTop: 15,
    flexDirection: 'row'
  },
  boxModal:
  {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    position: 'absolute',
    left: 0,
    top: '50%',
    marginTop: -285,
    padding: 10
  },
  txtIn:
  {
    height: 40, 
    width: '100%',  
    borderColor:'#ccc',
    borderWidth: 1, 
    marginBottom: 10
  }

})