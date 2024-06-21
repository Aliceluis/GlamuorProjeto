import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import  { useNavigation } from '@react-navigation/native';
import Shoes from '../../component/Shoes';

export default function Bracelete() {
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
          <Shoes img={require('../../assets/bracelete/BraceleteMoments.png')}cost="R$5.829,00"  onClick={()=> navigation.navigate('/Detail') }>
          Bracelete Momentns Celebração
          </Shoes>
          <Shoes img={require('../../assets/bracelete/BraceleteBorboleta.png')}cost="R$1.139,00" onClick={()=> navigation.navigate('/Detail') }>
          Bracelete de Borboleta
          </Shoes>
          </View>

          <View style={styles.imagem}>
          <Shoes img={require('../../assets/bracelete/BraceleteAmor.png')}cost="R$1.189,00" onClick={()=> navigation.navigate('Detail') }>
          Bracelete Promessa de Amor
          </Shoes>
          <Shoes img={require('../../assets/bracelete/Braceletecoracao.png')}cost="R$1.519,00"  onClick={()=> navigation.navigate('Detail') }>
          Bracelete Sempre Coração
          </Shoes>
        </View>
     
     
        <View style={styles.imagem}>
          <Shoes img={require('../../assets/bracelete/BraceleteCoroa.png')}cost="R$1.169,00" onClick={()=> navigation.navigate('Detail') }>
          Bracelete Coroa Brilhante
          </Shoes>
          <Shoes img={require('../../assets/bracelete/BraceleteEsfera.png')}cost="R$1.249,00"  onClick={()=> navigation.navigate('Detail') }>
            Bracelete Esfera Brilhante
          </Shoes>
        </View>

        <View style={styles.imagem}>
          <Shoes img={require('../../assets/bracelete/BraceleteExplosão.png')}cost="R$1.200,90"   onClick={()=> navigation.navigate('Detail') }>
            Bracelete Estrelar
          </Shoes>
          <Shoes img={require('../../assets/bracelete/BraceleteInfinito.png')}cost="R$1.009,00"  onClick={()=> navigation.navigate('Detail') }>
          Bracelete Infinito Assimétrico
          </Shoes>
        </View>

        <View style={styles.imagem}>
          <Shoes img={require('../../assets/bracelete/BraceleteMarvel.png')}cost="R$1.329,00"   onClick={()=> navigation.navigate('Detail') }>
          Braselete Marvel Vingadores
          </Shoes>
          <Shoes img={require('../../assets/bracelete/BraceleteOuro.png')}cost="R$1.529,00"   onClick={()=> navigation.navigate('Detail') }>
         Bracelete Crie & Combine
          </Shoes>
        </View>

        <View style={styles.imagem}>
          <Shoes img={require('../../assets/bracelete/BraceletePavé.png')}cost="R$1.529,00"   onClick={()=> navigation.navigate('Detail') }>
          Braselete Pavé
          </Shoes>
          <Shoes img={require('../../assets/bracelete/BraceleteRigido.png')}cost="R$1.649,00"  onClick={()=> navigation.navigate('Detail') }>
         Bracelete Rigido Chevron
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
    width: '100%'
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '7%',
  },
  text:{
    fontFamily: 'G',
    fontSize: 26,
    marginHorizontal: '5%',
    color: '#000000',
  },
  imagem:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1, 
    fontSize: 30
  },
  text1:{
    fontFamily: 'G',
    fontSize: 35,
    marginLeft: '35%',
    marginTop: 20,
   color: '#000000',
  },
  img:{
    height: 2
  }

});