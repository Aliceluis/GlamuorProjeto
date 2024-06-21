import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Shoes from '../Shoes';

export default function Footer() {
 return (
   <View>
    
       <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR</Text>
       <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginHorizontal: 50}}>
                <Shoes img={require('../../assets/pagina principal/Anel Attract.webp')} cost="5.200,90"onClick={()=> navigation.navigate('Anel') }>
                    Anel Attract 
                </Shoes>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Shoes img={require('../../assets/pagina principal/Colar Dextera.webp')} cost="360,90" onClick={()=> navigation.navigate('Colar') }>
                    Colar Dextera
                </Shoes>
            </View>
            </ScrollView>
       </View>
       
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginHorizontal: 50}}>
                <Shoes img={require('../../assets/pagina principal/PulseiraArpege.webp')} cost="R$10.000"onClick={()=> navigation.navigate('Pulseira') }>
                    Pulseira Arpege
                </Shoes>
                </View>
                <View style={{marginHorizontal: 10}}>
                <Shoes img={require('../../assets/pagina principal/AnelPrincesa.webp')} cost="R$8.000"onClick={()=> navigation.navigate('Anel') }>
                    Anel Princesa
                    </Shoes>
            </View>
            </ScrollView>
       </View>
       </View>
        

  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '5%',
        marginLeft: '20%'

    }
})