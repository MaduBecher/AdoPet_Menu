import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

import { Home, MessageSquare, Settings, LogOut } from "lucide-react-native";

export default function DrawerContent({ navigation }) {
  return (
    <DrawerContentScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>

        <Text style={styles.title}>AdoPet 🐾</Text>

        {/* Menu */}
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Home")}>
          <Home color="#fff" size={20} />
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Pets")}>
          <Home color="#fff" size={20} />
          <Text style={styles.text}>Pets para adoção</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Messages")}>
          <MessageSquare color="#fff" size={20} />
          <Text style={styles.text}>Mensagens</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Settings")}>
          <Settings color="#fff" size={20} />
          <Text style={styles.text}>Configurações</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Logout")}>
          <LogOut color="#fff" size={20} />
          <Text style={styles.text}>Sair</Text>
        </TouchableOpacity>

      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2ecc71",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "#a3e4d7",
    marginVertical: 20,
  },
});
