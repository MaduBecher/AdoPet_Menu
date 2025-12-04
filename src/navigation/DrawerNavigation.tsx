import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from '../components/DrawerContent.js';

import HomeScreen from "../screens/HomeScreen";
import PetsScreen from "../screens/PetsScreen";
import MessagesScreen from "../screens/MenssagesScreen.js";
import SettingsScreen from "../screens/SettingsScreen";
import LogoutScreen from "../screens/LogoutScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Pets" component={PetsScreen} />
      <Drawer.Screen name="Messages" component={MessagesScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
}
