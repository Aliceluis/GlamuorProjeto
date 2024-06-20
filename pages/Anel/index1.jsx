import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import  { useNavigation } from '@react-navigation/native';
import Shoes from '../../component/Shoes';

export default function Anel() {
 const navigation = useNavigation();

 return (
   <View style={styles.container}>
   <View style={styles.header}>
   <View style={styles.textContainer}>      
      </View>
      </View>
      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text1}>Acessórios</Text>

        <View style={styles.imagem}>
          <Shoes img={require('../../assets/anel/anelazul.png')} cost="R$ 1.190,00" onClick={()=> navigation.navigate('Detail') }>
          Anel Tres Pedras Retangulares Azul
          </Shoes>
          <Shoes img={require('../../assets/anel/anelaberto.png')}cost="R$ 1.189,00" onClick={()=> navigation.navigate('Detail') }>
         Anel Aberto Elegancia
          </Shoes>
          </View>

          <View style={styles.imagem}>
          <Shoes img={require('../../assets/anel/AnelCoração.png')}cost="R$ 1.529,00"  onClick={()=> navigation.navigate('Detail') }>
          Anel de Coração 
          </Shoes>
          <Shoes img={require('../../assets/anel/anelreal.png')}cost="R$ 1.100,90"  onClick={()=> navigation.navigate('Detail') }>
          Anel Solitaria Real Azul
          </Shoes>
        </View>
     
     
        <View style={styles.imagem}>
          <Shoes img={require('../../assets/anel/aneldepavé.png')}cost="R$ 1.939,00" onClick={()=> navigation.navigate('Detail') }>
          Anel de Pavé
          </Shoes>
          <Shoes img={require('../../assets/anel/aneldecoracao.png')}cost="R$ 1.119,00"  onClick={()=> navigation.navigate('Detail') }>
          Anel de Coração Red
          </Shoes>
        </View>
        
        <View style={styles.imagem}>
          <Shoes img={require('../../assets/anel/aneldelicada.png')}cost="R$ 1.190,00"  onClick={()=> alert('Detail')}>
            Anel Delicada Brilhante
          </Shoes>
          <Shoes img={require('../../assets/anel/anelpetala.png')}cost="R$190,00" onClick={()=> alert('Detail')}>
          Anel Petela    
           </Shoes>
        </View>

        <View style={styles.imagem}>
          <Shoes img={require('../../assets/anel/anelinfinito.png')}cost="R$190,00"  onClick={()=> alert('Detail')}>
          Anel Infinito
          </Shoes>
          <Shoes img={require('../../assets/anel/aneldepavé.png')}cost="R$190,00"  onClick={()=> alert('Detail')}>
          Anel Princes
          </Shoes>
        </View>

        <View style={styles.imagem}>
          <Shoes img={require('../../assets/anel/anelyoueme.png')}cost="R$190,00"  onClick={()=> alert('Detail')}>
          Anel de Coração
          </Shoes>
          <Shoes img={require('../../assets/anel/anelsolitario.png')}cost="R$190,00"  onClick={()=> alert('Detail')}>
          Anel you & Me
          </Shoes>
        </View>

      </ScrollView>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header:{
    backgroundColor: '#f9d4dd',
    height: 5,
  },
  image:{
    width: '100%',
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
  },
  text:{
    fontFamily: 'G',
    fontSize: 26,
    marginHorizontal: '5%',
    color: '#000000',
  },
  text1:{
    fontFamily: 'G',
    fontSize: 35,
    marginLeft: '35%',
   color: '#000000',
  },
  imagem:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1, 
    fontSize: 30,
  },
  Icon:{
    flex: 1,
  }
});