import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable , Image} from 'react-native';
import  { useNavigation } from '@react-navigation/native';
import Shoes from '../../component/Shoes';

export default function Home() {
 const navigation = useNavigation();

 return (
  
   <View style={styles.container}>
   <View style={styles.header}>
  

              <View onClick={()=> navigation.navigate('Anel')}>
              <Image style={{width: 55, height: 55,}} source={require('../../assets/pagina principal/anel.png')} />
              </View>
              <View onClick={()=> navigation.navigate('Colar')}>
              <Image style={{width: 55, height: 55,}} source={require('../../assets/pagina principal/colar.png')} />
              </View>
              <View onClick={()=> navigation.navigate('Braceletes')}>
              <Image style={{width: 57, height: 57,}} source={require('../../assets/pagina principal/pulseira.png')} />
              </View>
              <View onClick={()=> navigation.navigate('Carrinho')}>
              <Image style={{width: 47, height: 47,}} source={require('../../assets/pagina principal/carrinho.png')} />
              </View>
              <View onClick={()=> navigation.navigate('LoginPage')}>
              <Image style={{width: 47, height: 47,}} source={require('../../assets/pagina principal/user.png')} />

       </View>  
       </View>
       <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text1}>Joias De Luxo</Text>

        <View style={styles.imagem}>
          <Shoes img={require('../../assets/pagina principal/Anel Attract.webp')} cost="R$8.990,00" onClick={()=> navigation.navigate('Detail') }>
          Anel Attract Ouro Branco
          </Shoes>
          <Shoes img={require('../../assets/pagina principal/Bracelete Mesmera.webp')} cost="R$9.800,00" onClick={()=> navigation.navigate('Detail') }>
          Bracelete Mesmera Ouro Branco
          </Shoes>
          </View>

          <View style={styles.imagem}>
          <Shoes img={require('../../assets/pagina principal/Colar Millenia.webp')}cost="R$12.599,00" onClick={()=> navigation.navigate('Detail') }>
          Colar Millenia Ouro Branco
          </Shoes>
          <Shoes img={require('../../assets/pagina principal/AnelTwist.webp')}cost="R$12.900,00" onClick={()=> navigation.navigate('Detail') }>
          Anel Twist Ouro Branco
          </Shoes>
        </View>

        <View style={styles.imagem}>
          <Shoes img={require('../../assets/pagina principal/PulseiraArpege.webp')}cost="35.050,00" onClick={()=> navigation.navigate('Detail') }>
          Bracelete Arpege Ouro Branco
          </Shoes>
          <Shoes img={require('../../assets/pagina principal/ConjuntoAngelic.webp')}cost="R$13.500,00" onClick={()=> navigation.navigate('Detail') }>
            Colar Angelic Ouro Branco
          </Shoes>
        </View>

        <View style={styles.imagem}>
          <Shoes img={require('../../assets/pagina principal/AnelPrincesa.webp')}cost="R$6.100,00" onClick={()=> navigation.navigate('Detail') }>
            Anel Princesa Ouro Branco
          </Shoes>
          <Shoes img={require('../../assets/pagina principal/Pulseira Attract.webp')} cost="R$9.500,00" onClick={()=> navigation.navigate('Detail') }>
          Bracelete Attract Ouro Branco
          </Shoes>
        </View>

        <View style={styles.imagem}>
          <Shoes img={require('../../assets/pagina principal/Colar Dextera.webp')}cost="R$6.700,00" onClick={()=> navigation.navigate('Detail') }>
          Colar Dextera Ouro Branco
          </Shoes>
          <Shoes img={require('../../assets/pagina principal/AnelVittore.webp')} cost="R$7.897,00" onClick={()=> navigation.navigate('Detail') }>
          Anel Vittore Ouro Branco
          </Shoes>
        </View>

        <View style={styles.imagem}>
          <Shoes img={require('../../assets/pagina principal/Pulseira Subtle.webp')}cost="R$8.999,00" onClick={()=> navigation.navigate('Detail') }>
          Bracelete Subtle Ouro Branco
          </Shoes>
          <Shoes img={require('../../assets/pagina principal/Colar Mesmera.webp')} cost="R$10.176,00" onClick={()=> navigation.navigate('Detail') }>
          Colar Mesmera Ouro Branco
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
    backgroundColor: '#F5A9BC',
    height: 120,
    flexDirection: 'row', // A linha principal é horizontal
    justifyContent: 'space-between', // Distribui as imagens igualmente na linha
    alignItems: 'center', // Centraliza as imagens verticalmente
    padding: 30
  },
  
  text:{
    fontFamily: 'G',
    fontSize: 30,
    marginHorizontal: '3%',
    color: '#000000',
    marginTop:15
  },

  imagem:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1, 
    fontSize: 30,
    Color:'#F2F2F2'
  },
  text1:{
    fontFamily: ' ToniStudio ',
    fontSize: 35,
    marginLeft: '33%',
    marginTop: 20,
   color: '#000000',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  }
});