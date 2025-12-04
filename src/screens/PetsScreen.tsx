import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PetsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🐾 Pets para Adoção</Text>
      <Text style={styles.text}>Conheça os pets disponíveis.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16, color: "#555" },
});
