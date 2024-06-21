import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import  { useNavigation } from '@react-navigation/native';
import Shoes from '../../component/Shoes';


export default function Colar() {
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
          <Shoes img={require('../../assets/colar/ColarFamília.png')}cost="R$1.169,00" onClick={()=> navigation.navigate('Detail') }>
          Colar Arvore Forever
          </Shoes>
          <Shoes img={require('../../assets/colar/colarapaixonado.png')}cost="R$1.529,00"  onClick={()=> navigation.navigate('Detail') }>
          Colar Coração Apaixonado
          </Shoes>
        </View>
     
     
        <View style={styles.imagem}>
          <Shoes img={require('../../assets/colar/colarchevron.png')}cost="R$1.600,00" onClick={()=> navigation.navigate('Detail') }>
          Colar Chevron Coração
          </Shoes>
          <Shoes img={require('../../assets/colar/colararvore.png')}cost="R$1.009,00"  onClick={()=> navigation.navigate('Detail') }>
          Colar Arvore Família
          </Shoes>
        </View>

        <View style={styles.imagem}>
          <Shoes img={require('../../assets/colar/colarbeleza.png')} cost="R$1.249,00" onClick={()=> alert('Detail')}>
            Anel Beleza
          </Shoes>
          <Shoes img={require('../../assets/colar/ColarChoker.png')} cost="R$1.189,00" onClick={()=> navigation.navigate('Detail') }>
          Colar Choker Essence
          </Shoes>
        </View>
     
     
        <View style={styles.imagem}>
          <Shoes img={require('../../assets/colar/colarcoracao.png')}cost="R$1.529,00" onClick={()=> navigation.navigate('Detail') }>
          Colar Apaixonado
          </Shoes>
          <Shoes img={require('../../assets/colar/colarinfinito.png')} cost="R$1.789,00" onClick={()=> navigation.navigate('Detail') }>
            Colar Infinito Brilhante
          </Shoes>
        </View>


        <View style={styles.imagem}>
          <Shoes img={require('../../assets/colar/colarlua.png')}cost="R$1.769,00"  onClick={()=> navigation.navigate('Detail') }>
          Colar Lua e estrela Brilhante
          </Shoes>
          <Shoes img={require('../../assets/colar/colarprata.png')}cost="R$1.430,00"  onClick={()=> navigation.navigate('Detail') }>
         Colar de Prata
          </Shoes>
        </View>

        <View style={styles.imagem}>
          <Shoes img={require('../../assets/colar/ColarRaízes.png')}cost="R$1.800,00"  onClick={()=> navigation.navigate('Detail') }>
          Colar Raízes Amor
          </Shoes>
          <Shoes img={require('../../assets/colar/colarshine.png')} cost="R$1.169,00" onClick={()=> navigation.navigate('Detail') }>
         Colar Shine
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
   color: '#000000',
  }

});