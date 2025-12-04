import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function LogoutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deseja sair?</Text>
      <Text style={styles.text}>Você será desconectada do AdoPet.</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.button, { backgroundColor: "#e63946" }]}>
          <Text style={styles.buttonText}>Sim, sair</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#ccc" }]}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.buttonText, { color: "#111" }]}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16, color: "#555" },
  buttons: { flexDirection: "row", marginTop: 20 },
  button: { padding: 12, borderRadius: 10, marginRight: 10 },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
