
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';
import Footer from '../../component/Footer';

export default function Detail({ navigation }) {

  navigation.setOptions({
     headerTitle: 'Anel Glamour'
  })

 return (
   <ScrollView style={styles.container}>
       <Image
       source={require('../../assets/anel/anelaberto.png')}
       style={styles.image}
       resizeMode="cover"
       />

       <View>
         <View>
           <Text style={[styles.title, { fontSize: 30 } ]}>Anel Glamuor</Text>
         </View>
         <View opacity={0.4}>
           <Text style={[styles.title, { fontSize: 24 } ]}>R$10.000</Text>
         </View>


         <View style={{flexDirection: 'row', width: '100%'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton  bgColor="#17181a" color="#FFF" >12</SizeButton>
            <SizeButton>14</SizeButton>
            <SizeButton>16</SizeButton>
            <SizeButton>18</SizeButton>
          </ScrollView>
         </View>

    
        <Button/>

        <View style={styles.line} />

        <Footer/>

       </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  image:{
    width: '100%',
    height:'50%'
  },
  title:{
    fontFamily: 'G',
    paddingHorizontal: '2%'
  },
  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle: {
    fontSize: 22,
    marginVertical: '2%'
  },
  textList:{
    fontSize: 16,
    lineHeight: 25,
  },
  line:{
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%',
  }
});