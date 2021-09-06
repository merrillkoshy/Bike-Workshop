import React, { useState, useEffect, SetStateAction } from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";

import CurrentBooking from "../../components/CurrentBooking";

import { createStackNavigator } from "@react-navigation/stack";
import styles from "./styles";
import headerOptions from "../../components/Header";
import { useFocusEffect } from "@react-navigation/native";

import * as Animatable from "react-native-animatable";

import firebase from "../../firebase";
import "firebase/auth";
import MainServices from "../../components/MainServices";

const Stack = createStackNavigator();

function HomeScreen(props: any) {
	const [mainServices, setMainServices] = useState<SetStateAction<Object[]>>(
		[]
	);

	const user = firebase.auth().currentUser;
	var dbRef = firebase.database().ref("mainServices/");

	const servicesList = () => {
		var serviceList: Object[] = [];
		dbRef
			.once("value", (snapshot) => {
				snapshot.forEach((snap) => {
					const svObject = snap.val();
					serviceList.push(svObject);
				});
			})
			.then(() => {
				setMainServices(serviceList);
			});
	};

	useEffect(() => {
		servicesList();
	}, []);

	function stackComponent() {
		return (
			<View style={styles.container}>
				<View style={styles.welcome}>
					<View style={styles.yusufsDashboardRow}>
						<Text style={styles.yusufsDashboard}>
							{user?.displayName}'s Dashboard
						</Text>
					</View>
				</View>
				<View style={styles.carding}>
					<View style={styles.scrollArea}>
						<View style={styles.bookingHeroPanel}>
							<CurrentBooking user={user} />
						</View>

						<MainServices
							{...props}
							mainServices={mainServices}
							style={styles.servicesListing}
						/>
					</View>
				</View>
			</View>
		);
	}
	return (
		<Stack.Navigator>
			<Stack.Screen
				options={headerOptions(props)}
				name="Home"
				component={stackComponent}
			/>
		</Stack.Navigator>
	);
}

export default HomeScreen;
