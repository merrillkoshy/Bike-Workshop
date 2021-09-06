import React, { useState, useEffect } from "react";
import {
	createDrawerNavigator,
	DrawerNavigationOptions,
	DrawerNavigationProp,
} from "@react-navigation/drawer";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../appStyles";
import Home from "./TabNav";
import AccountsScreen from "./AccountsStack";
import MenuDrawer from "../components/MenuDrawer";
import firebase from "../firebase";
import "firebase/auth";
import { Dimensions } from "react-native";

const Drawer = createDrawerNavigator();

interface Props {
	name: "HomeStack";
	component: (props: any) => Element;
	options: {
		drawerIcon: ({
			focused,
			color,
			size,
		}: {
			color: string;
			size: number;
			focused: boolean;
		}) => Element;
	};
}
export default function RootDrawer(props: any) {
	return (
		<Drawer.Navigator
			drawerContent={(props) => <MenuDrawer {...props} />}
			drawerPosition="right"
			drawerStyle={{
				backgroundColor: theme?.HASNAIN_GREY,
				width: Dimensions.get("window").width / 1.4,
			}}
			drawerContentOptions={{
				activeTintColor: theme?.TEXT_DARK,
				inactiveTintColor: theme?.TEXT_DARK,
			}}
		>
			<Drawer.Screen
				name="HomeStack"
				component={Home}
				options={{
					drawerIcon: ({
						focused,
						color,
						size,
					}: {
						focused: boolean;
						color: string;
						size: number;
					}) => (
						<MaterialCommunityIconsIcon
							// focused={focused}
							name="home"
							size={size}
							color={color}
						/>
					),
					drawerLabel: "Home",
				}}
				// props={props}
			/>
		</Drawer.Navigator>
	);
}
