import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Exercicio1 = ({ nome }) => {
  return (
    <View style={styles.container}>
      <Text>Olá, {nome}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100,
  },
});

export default Exercicio1;