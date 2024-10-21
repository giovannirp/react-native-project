import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const enviarContato = async () => {
    if (!nome || !telefone) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }
  
    const novoContato = { nome, telefone };
  
    axios.post('http://10.0.2.2:3000/contatos', novoContato)
      .then(resposta => {
        if (resposta.status === 201) {
          Alert.alert('Sucesso', 'Contato adicionado!');
          setNome('');
          setTelefone('');
        } else {
          Alert.alert('Erro', 'Falha ao adicionar contato.');
        }
      })
      .catch(error => {
        console.error('Erro ao enviar contato:', error);
        Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome"
      />

      <Text style={styles.label}>Telefone:</Text>
      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
        placeholder="Digite o telefone"
        keyboardType="phone-pad"
      />

      <Button title="Enviar Contato" onPress={enviarContato} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});
