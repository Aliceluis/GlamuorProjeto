import React from 'react'
import { FlatList } from 'react-native'

import Item from './Item'

const servicos = [
  {
    id: 1,
    nome: 'Anel',
    preco: 79.9,
    descricao: 'Anel Glamour',
  },
]

export default function Servicos() {
  return (
    <>
      <FlatList
        data={servicos}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </>
  )
}