import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Exercicio3 = () => {

const [texto, setTexto] = useState('');



  return (
    <View style={styles.container}>

    <TextInput 
    style={styles.input}
        placeholder="Digite algo..."
        onChangeText={setTexto}
        value={texto}
        />

    <Text style={styles.displayText}>
        Você digitou: {texto}
      </Text>

      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    margin: 30,
    borderBlockColor: 'black',
    borderBlockWidth: 5,
  },
   button: {
    margin: 10,
  },
  text: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#333'
  },
  input: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  displayText: {
    fontSize: 18,
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  }
});



export default Exercicio3