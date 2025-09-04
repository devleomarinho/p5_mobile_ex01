import { View, Text, StyleSheet, } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native';

const Exercicio2 = () => {

    const [contador, setContador] = useState(0);

    function incrementar(){
        setContador(contador + 1);
    }

    function decrementar(){
        setContador(contador - 1);
    }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>{contador}</Text>
      </View>
      <View style={styles.button}>
        <Button title="Incrementar" onPress={incrementar} color="green" />
      </View>
      <View style={styles.button}>
        <Button title="Decrementar" onPress={decrementar} color="green" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 20,
    borderBlockColor: 'black',
    borderBlockWidth: 5,
  },
   button: {
    margin: 5,
    padding: 5,
    width: '50%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#333'
  }
});

export default Exercicio2