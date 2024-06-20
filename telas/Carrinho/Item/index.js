import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import CampoInteiro from '../../../components/CampoInteiro';
import Botao from '../../../components/Botao';
import styles from './styles';  


export default function Carrinho() {
  const [carrinho, setCarrinho] = useState([
    { id: 1, nome: 'anel', preco: 799.9,  quantidade: 1 },
    { id: 2, nome: 'colar', preco: 899.9, quantidade: 1 },
    { id: 3, nome: 'Bracelete', preco: 499.9, quantidade: 1 },
  ]);

  const removerItem = (id) => {
    const novoCarrinho = carrinho.filter(item => item.id !== id);
    setCarrinho(novoCarrinho);
  };

  const atualizarQuantidade = (id, novaQuantidade) => {
    const novoCarrinho = carrinho.map(item => {
      if (item.id === id) {
        return { ...item, quantidade: novaQuantidade };
      }
      return item;
    });
    setCarrinho(novoCarrinho);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      {carrinho.map(item => (
        <View key={item.id} style={styles.itemContainer}>
        <View style={styles.informacao}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.descricao}>{item.descricao}</Text>
            <Text style={styles.preco}>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(item.preco)}
            </Text>
            </View>
            <View style={styles.carrinho}>
            <View style={styles.valor}>
              <Text style={styles.descricao}>Quantidade:</Text>
                <CampoInteiro
                  estilos={styles.quantidade}
                  valor={item.quantidade}
                  acao={(novaQuantidade) => atualizarQuantidade(item.id, novaQuantidade)}
                />
            </View>
              <View style={styles.valor}>
                <Text style={styles.descricao}>Total:</Text>
                <Text style={styles.preco}>
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(item.preco * item.quantidade)}
                </Text>
              </View>
              <Botao
                valor="Remover do Carrinho"
                acao={() => removerItem(item.id)}
                style={styles.botao}
              />
            </View>
            <View style={styles.divisor}></View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}