import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { DrawerNavigationProp } from '@react-navigation/drawer';


type MenuProps = {
  navigation: DrawerNavigationProp<any>;
};

export default function Menu({ navigation }: MenuProps) {
  return (
    <DrawerContentScrollView style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Pets para adoção')}
        >
          <Ionicons name="paw-outline" size={22} color={colors.white} />
          <Text style={styles.menuText}>Pets para adoção</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Mensagens')}
        >
          <Ionicons name="chatbubbles-outline" size={22} color={colors.white} />
          <Text style={styles.menuText}>Mensagens</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Configurações')}
        >
          <Ionicons name="settings-outline" size={22} color={colors.white} />
          <Text style={styles.menuText}>Configurações</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Sair')}
        >
          <Ionicons name="log-out-outline" size={22} color={colors.white} />
          <Text style={styles.menuText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  menuContainer: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  menuText: {
    color: colors.white,
    fontSize: 16,
    marginLeft: 15,
  },
});