import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={estilos.topo}>
      <Text style={estilos.tituloHeader}>InfoSass</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: 120,
    backgroundColor: "#FF0000",
    borderBottomWidth: 2, // Largura da borda inferior
    borderBottomColor: "#696969", // Cor da borda inferior
  },
  tituloHeader: {
    width: "100%",
    textAlign: "center",
    paddingTop: 60,
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  }
})
