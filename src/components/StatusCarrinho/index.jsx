import React from 'react'
import { Text, View, TouchableOpacity, Pressable} from 'react-native'
import Botao from '../Botao'
import styles from './styles'
import  { useNavigation } from '@react-navigation/native';

export default function StatusCarrinho({ total }) {
const navigation = useNavigation();
  return (
    <View style={styles.conteudo}>
      <View tyle={styles.total}>
        <Text style={styles.descricao}>Total do carrinho</Text>
        <Text style={styles.valor}>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(total)}
        </Text>
      </View>
      
      <TouchableOpacity style={styles.botao} onClick={()=> navigation.navigate('PageLogin') }>
      <Botao valor="Concluir pedido" invertido />
    </TouchableOpacity>
    </View>
  )
}

