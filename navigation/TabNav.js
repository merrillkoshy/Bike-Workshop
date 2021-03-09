import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import Services from "../screens/Services";
import PickAndDrop from "../screens/PickAndDrop";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../appStyles";
import ServicesScreen from "./ServicesStack";
import ProfilePage from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default function Home(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme?.PRIMARY_COLOR,
        inactiveTintColor: theme?.INACTIVE,
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
          ),
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
          ),
        }}
        name="Services"
        component={ServicesScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIconsIcon
              focused={focused}
              name="account"
              size={size}
              color={color}
            ></MaterialCommunityIconsIcon>
          ),
        }}
        name="Profile"
        component={ProfilePage}
      />
    </Tab.Navigator>
  );
}
