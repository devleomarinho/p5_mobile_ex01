import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ListaItens = () => {
  // Array de strings para exemplo
  const itens = [
    'Item 1 - Primeiro item da lista',
    'Item 2 - Segundo item da lista',
    'Item 3 - Terceiro item da lista',
    'Item 4 - Quarto item da lista',
    'Item 5 - Quinto item da lista',
    'Item 6 - Sexto item da lista',
    'Item 7 - Sétimo item da lista',
    'Item 8 - Oitavo item da lista'
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Itens</Text>
      
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.listaContainer}>
          {itens.map((item, index) => (
            <Text key={index} style={styles.itemTexto}>
              {item}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollContainer: {
    flex: 1,
  },
  listaContainer: {
    gap: 10,
  },
  itemTexto: {
    fontSize: 16,
    color: '#555',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default ListaItens;