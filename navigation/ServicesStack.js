import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Services from "../screens/Services";
import Service from "../screens/Service";
import headerOptions from "../components/Header";
import Booking from "../screens/Booking";
const Stack = createStackNavigator();

export default function ServicesScreen(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Services"
        component={Services}
        options={headerOptions(props)}
      />
      <Stack.Screen name="Service" component={Service} />
      <Stack.Screen name="Booking" component={Booking} />
    </Stack.Navigator>
  );
}
