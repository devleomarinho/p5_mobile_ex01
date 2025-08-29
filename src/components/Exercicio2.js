import { View, Text, StyleSheet, } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-web';

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
  }
});

export default Exercicio2