import React from 'react'
import { FlatList } from 'react-native'
import StatusCarrinho from '../../components/StatusCarrinho'
import Item from './Item'

const servicos = [
  {
    id: 1,
    nome: 'Anel',
    preco: 79.9,
    descricao: 'Anel Diamont',
  },

]

export default function Carrinho() {

  const total = servicos.reduce(
    (soma, { preco, quantidade }) => soma + preco * quantidade,
    0
  )
  return (
    <>
      <StatusCarrinho total={total} />
      <FlatList
        data={servicos}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </>
  )
}
