# Exercícios slide 01

## Exercício 01: Criar um componente funcional que aceita um nome como prop e exibe uma mensagem de saudação.

- Solução: Criei um script chamado Exercicio1.js simples que recebe como <props> um nome e utiliza o componente <Text> para exibir na tela. Depois, esse componente é chamado no App.js, e então é executado.

```
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
```
![ex01_print](https://github.com/user-attachments/assets/ec08fa21-aa69-4ec2-95dd-6fe3b97e4a94)


## Exercício 02: Implementar um componente Counter que exibe um número (inicialmente 0) e dois botões para incrementar e decrementar o valor. Utilize o hook useState.

- Solução: Criei um script chamado Exercicio2.js,  que utiliza o hook useState para controlar o estado da variável contador. Os dois botões (incrementar e decrementar), ao serem pressionado (usando a função onPress() ) acionam as respectivas funções que modificar o estado do contador. O número é então exibido na tela. Além disso, estilizei os botões e texto usando o componente StyleSheet() para definir o visual dos elementos.

```
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
```
![ex02_print](https://github.com/user-attachments/assets/4eaea7ce-6ea0-4beb-9cb6-04297dd8eb5b)


## Exercício 02: Criar um componente que inclui um <TextInput> para entrada de texto e um <Text> para exibir o texto digitado. Use useState para armazenar e atualizar o valor do texto.

- Solução: Criei um componente que utiliza o hook useState para receber um texto através do componente <TextInput> e exibir o texto digitado na tela usando o <Text>. Fiz a estilização usando o StyleSheet para definir os elementos visuais.

```
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
```
![ex03_print](https://github.com/user-attachments/assets/db1a3157-ce9f-4532-94cd-ac889c8a9f1a)

