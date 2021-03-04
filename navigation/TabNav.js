import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import Services from "../screens/Services";
import PickAndDrop from "../screens/PickAndDrop";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function Home(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#ff2800",
        inactiveTintColor: "#616161"
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIconsIcon
              focused={focused}
              name="home"
              size={size}
              color={color}
            ></MaterialCommunityIconsIcon>
          )
        }}
        name="Home"
        props={props}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIconsIcon
              focused={focused}
              name="format-list-bulleted-type"
              size={size}
              color={color}
            ></MaterialCommunityIconsIcon>
          )
        }}
        name="Services"
        component={Services}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIconsIcon
              focused={focused}
              name="map-marker-radius"
              size={size}
              color={color}
            ></MaterialCommunityIconsIcon>
          )
        }}
        name="Pick and Drop"
        component={PickAndDrop}
      />
    </Tab.Navigator>
  );
}