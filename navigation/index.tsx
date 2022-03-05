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
import Duolingo from "../screens/Duolingo";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import PhilzCoffee from "../screens/PhilzCoffee";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import { Feather, Foundation } from "@expo/vector-icons";

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
          title: "Philz Coffee",
          tabBarIcon: ({ color, focused }) => (
            <Feather name="coffee" size={22} color="white" />
          ),
        }}
      />

      <Tab.Screen
        name="ChromeTabs"
        component={ChromeTabs}
        options={{
          title: "Chrome Tabs",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="tab" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Channel"
        component={Channel}
        options={{
          title: "Chanel",
          tabBarIcon: ({ color, focused }) => (
            <Foundation name="list" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Duolingo"
        component={Duolingo}
        options={{
          title: "Duolingo",
        }}
      />
    </Tab.Navigator>
  );
}
