import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Exercicio1 = () => {
  return (
    <View style={styles.container}>
      <Text>Olá, mundo</Text>
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