import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "../Components/Card";

export default function Home() {
  const navigation = useNavigation();
  
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.tituloContato}>Seja bem-vindo!</Text>

      {/* Usando o Card */}
      <Card
        title="Contato" 
        content="Saiba mais sobre nós e nossos serviços." 
        buttonText="Ir para Contato" 
        onPress={() => navigation.navigate('Contato')} 
      />
      <Text style={styles.tituloInfo}>Mais informações</Text>
    
      <Card 
        title="Mais informações" 
        content="Clique abaixo para saber mais sobre nossos serviços." 
        buttonText="Sobre, saiba mais" 
        onPress={() => navigation.navigate('Sobre')} 
      />
    </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5', // Cor de fundo
  },
  tituloContato: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  tituloInfo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBotton: 20,
    textAlign: 'center',
  },
});