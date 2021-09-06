import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";

import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../appStyles";
import ServicesScreen from "./ServicesStack";
import ProfilePage from "../screens/Profile";

import {
	BottomNavigation,
	BottomNavigationProps,
	BottomNavigationTab,
	Icon,
	Layout,
	Text,
} from "@ui-kitten/components";
import { Dimensions, Platform } from "react-native";

const { Navigator, Screen } = createBottomTabNavigator();

export default function Home() {
	const HomeIcon = (props: any) => <Icon {...props} name="home-outline" />;
	const ServiceIcon = (props: any) => <Icon {...props} name="list-outline" />;
	const ProfileIcon = (props: any) => <Icon {...props} name="person-outline" />;

	const BottomTabBar = ({
		navigation,
		state,
	}: {
		navigation: any;
		state: any;
	}) => (
		<BottomNavigation
			selectedIndex={state.index}
			onSelect={(index) => navigation.navigate(state.routeNames[index])}
			style={
				{
					height:
						Platform.OS == "ios" ? Dimensions.get("window").height * 0.1 : null,
				} as BottomNavigationProps
			}
		>
			<BottomNavigationTab
				title={(evaProps) => <Text {...evaProps}>Home</Text>}
				icon={HomeIcon}
			/>
			<BottomNavigationTab
				title={(evaProps) => <Text {...evaProps}>Services</Text>}
				icon={ServiceIcon}
			/>
			<BottomNavigationTab
				title={(evaProps) => <Text {...evaProps}>Profile</Text>}
				icon={ProfileIcon}
			/>
		</BottomNavigation>
	);

	return (
		<Navigator tabBar={(props) => <BottomTabBar {...props} />}>
			{/* <Tab.Navigator
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
          tabBarLabel: "Services",
        }}
        name="ServicesStack"
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
        props={props}
        component={ProfilePage}
      />
    </Tab.Navigator> */}
			<Screen name="Home" component={HomeScreen} />
			<Screen name="Services" component={ServicesScreen} />
			<Screen name="Profile" component={ProfilePage} />
		</Navigator>
	);
}
