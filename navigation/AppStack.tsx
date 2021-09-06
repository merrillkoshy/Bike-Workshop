import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import "firebase/auth";
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";
import firebase from "../firebase";

import headerOptions, { partialHeader } from "../components/Header";
import RootDrawer from "./DrawerNav";

import Booking from "../screens/Booking";
import { StackHeaderOptions } from "@react-navigation/stack/lib/typescript/src/types";
const Stack = createStackNavigator();

export default function AppStack() {
	return (
		<Stack.Navigator
			initialRouteName={
				firebase.auth().currentUser != null ? "Dashboard" : "Login"
			}
		>
			<Stack.Screen
				options={{
					headerShown: false,
				}}
				name="Login"
				component={Login}
			/>
			<Stack.Screen
				options={{
					headerShown: false,
				}}
				name="Create Account"
				component={CreateAccount}
			/>
			<Stack.Screen
				options={{
					headerShown: false,
				}}
				name="Dashboard"
				component={RootDrawer}
			/>

			<Stack.Screen
				name="Booking"
				options={partialHeader() as StackHeaderOptions}
				component={Booking}
			/>
		</Stack.Navigator>
	);
}
