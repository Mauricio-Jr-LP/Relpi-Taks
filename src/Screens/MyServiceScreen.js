import React,{useEffect,useState} from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {db}  from '../../firebase';
import Modal from '../../Modal.js';

export default function MyServiceScreen() 
{
  const [showModal, setModal] = useState(false);
  const abrirModal = () => {
    setModal(!showModal);
  }
  const [servicos,setarServicos] = useState([]);
  useEffect(()=>{
    db.collection('servicos').onSnapshot(snapshot=>{
      setarServicos(snapshot.docs.map(function(doc)
      {
        return {info:doc.data()}
      }));
    })
  },[])
  
  return (  
    <View style = {{flex:1, width: '100%', height: 75, backgroundColor: 'black'}}>
      {
        (showModal)?
          <Modal showModal = {showModal} setModal = {setModal}/>
        :
        <View></View>
      }

      <View style = {{ color: 'black'}}>
        <TouchableOpacity  onPress={() => abrirModal()} style = {{}}> 
          <Text style = {{color: 'white', backgroundColor: '#38A6FF', textAlignVertical: 'center', textAlign: 'center' , width: '100%', height: '100%'}}>
            Adicionar anúncio     
          </Text>
        </TouchableOpacity>
      </View>
    </View> 
  );
}