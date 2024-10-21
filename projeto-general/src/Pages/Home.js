import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Card from '../Components/Card';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Text style={styles.tituloContato}>Seja bem-vindo!</Text>
        
        <Card
          title="Sobre"
          content="Saiba mais sobre nós e nossos serviços."
          buttonText="Ir para Sobre"
          onPress={() => navigation.navigate('Sobre')}
        />

        <Text style={styles.tituloInfo}>Mais Informações</Text>

        <Card
          title="Contato"
          content="Clique abaixo para saber mais sobre nosso serviços."
          buttonText="Ir para Contato"
          onPress={() => navigation.navigate('Contato')}
        />
        
        {/* <Button
          title="Ir para Contato"
          onPress={() => navigation.navigate('Contato')}
        /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  }, 
  tituloContato: {
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: "center"
  },
  tituloInfo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center'
  }
})
