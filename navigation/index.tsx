import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { Image } from "react-native";
import * as React from "react";
import LinkingConfiguration from "./LinkingConfiguration";
import Channel from "../screens/Chanel/Chanel";
import ChromeTabs from "../screens/Chrome";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import PhilzCoffee from "../screens/PhilzCoffee";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import { Entypo, Feather, Foundation } from "@expo/vector-icons";
import Breathe from "../screens/Breathe";

const Tab = createMaterialBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <StackNavigtor />
    </NavigationContainer>
  );
}

function StackNavigtor() {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: "#000",
      }}
      inactiveColor="#bbb"
      initialRouteName="PhilzCoffee"
      screenOptions={{}}
    >
      <Tab.Screen
        name="PhilzCoffee"
        component={PhilzCoffee}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Feather name="coffee" size={22} color="white" />
          ),
        }}
      />

      <Tab.Screen
        name="ChromeTabs"
        component={ChromeTabs}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="tab" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Chanel"
        component={Channel}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Foundation name="list" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Breathe"
        component={Breathe}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Entypo name="air" size={24} color="white" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
