import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Modal, { ReactNativeModal } from "react-native-modal";
import Toast from "react-native-toast-message";
import { createStackNavigator } from "@react-navigation/stack";
import "firebase/auth";
import * as Animatable from "react-native-animatable";
import { useFocusEffect } from "@react-navigation/native";

import styles from "./styles";
import firebase from "../../firebase";
import SiteButton from "../../components/SiteButton";
import headerOptions from "../../components/Header";
import UpdateDetails from "../../components/UpdateDetails";
import History from "../../components/History";
import Shimmer from "../../components/Shimmer";

const Stack = createStackNavigator();

interface User {
	currentUser: firebase.User;
	photoURL: string;
}
function ProfilePage(props: any) {
	const [user, setUser] = useState<any>(null);
	const [datum, setDatum] = useState<any>(null);
	const [isModalVisible, setModalVisible] = useState(false);
	const [isHistoryModalVisible, setHistoryModalVisible] = useState(false);
	const [pageLoad, setPageLoad] = useState(false);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};
	const toggleHistoryModal = () => {
		setHistoryModalVisible(!isHistoryModalVisible);
	};

	var currentUser = firebase.auth().currentUser;
	const stackUp = {
		from: {
			marginTop: 50,
		},
		to: {
			marginTop: 30,
		},
	};
	const stackDown = {
		from: {
			marginTop: 30,
		},
		to: {
			marginTop: 50,
		},
	};

	const fetch = () => {
		const db = firebase.database().ref("users/" + currentUser?.uid);
		db.on("value", (snapshot) => {
			const data = snapshot.val();

			setDatum(data);
		});
	};
	const authenticate = () => {
		if (currentUser) {
			setUser(currentUser);
		} else {
			setUser(undefined);
		}
	};

	useFocusEffect(
		React.useCallback(() => {
			setPageLoad(true);

			return () => {
				setPageLoad(false);
			};
		}, [])
	);

	useEffect(() => {
		authenticate();
		fetch();
	}, []);

	const stackComponent = () => {
		return (
			<View style={styles.container}>
				<Animatable.View
					style={styles.animatableCard}
					animation={pageLoad ? stackUp : stackDown}
					delay={100}
				>
					<View style={styles.carding}>
						{(user as User)?.photoURL ? (
							<>
								<Image
									style={styles.photo}
									source={{ uri: (user as User)?.photoURL }}
								/>
							</>
						) : (
							<Icon name="account-circle" style={styles.icon}></Icon>
						)}

						<Text style={styles.profileName}>{user?.displayName}</Text>

						<View style={styles.scrollArea}>
							<ScrollView
								contentContainerStyle={styles.scrollArea_contentContainerStyle}
							>
								<View style={styles.infoBlock}>
									{datum?.address ? (
										<View style={styles.rowField}>
											<Text style={styles.detailText}>Address:</Text>
											<Text style={styles.outputText}>{datum?.address}</Text>
										</View>
									) : null}

									{datum?.email ? (
										<View style={styles.rowField}>
											<Text style={styles.detailText}>Email:</Text>
											<Text style={styles.outputText}>{datum?.email}</Text>
										</View>
									) : null}
									{datum?.phoneNumber ? (
										<View style={styles.rowField}>
											<Text style={styles.detailText}>Phone:</Text>
											<Text style={styles.outputText}>
												{datum?.phoneNumber}
											</Text>
										</View>
									) : null}

									<Modal
										style={styles.modalContainer}
										animationIn={"rubberBand"}
										animationOut={"slideOutDown"}
										isVisible={isModalVisible}
										animationInTiming={500}
										animationOutTiming={500}
										// transparent={true}
									>
										<View style={styles.modalContent}>
											<UpdateDetails
												name={user?.displayName}
												address={datum?.address}
												phone={datum?.phoneNumber}
												photoURL={user?.photoURL}
												toggleModal={toggleModal}
											/>
										</View>
									</Modal>
									<Modal
										style={styles.modalContainer}
										animationIn={"slideInUp"}
										animationOut={"slideOutDown"}
										isVisible={isHistoryModalVisible}
										animationInTiming={1000}
										animationOutTiming={1000}
										// transparent={true}
									>
										<View style={styles.modalContent}>
											<History toggleModal={toggleHistoryModal} />
										</View>
									</Modal>
								</View>
								<View style={styles.infoBlock}>
									<TouchableOpacity
										style={styles.infoCard}
										onPress={toggleModal}
									>
										<Text style={styles.buttonText}>{"Edit Profile"}</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={styles.infoCard}
										onPress={toggleHistoryModal}
									>
										<Text style={styles.buttonText}>{"Booking History"}</Text>
									</TouchableOpacity>
								</View>

								<SiteButton
									buttonText={"Logout"}
									style={styles.logout}
									onPress={() => {
										firebase
											.auth()
											.signOut()
											.then(() => {
												Toast.show({
													type: "success",
													text1: "Succesfully signed out",
													text2: "Byee! 👋",
												});
												props.navigation.navigate("Login");
											})
											.catch((error) => {
												Toast.show({
													type: "error",
													text1:
														"An error " +
														error +
														" - occured while signing out",
													text2: "Oops...",
												});
											});
									}}
								/>
							</ScrollView>
						</View>
					</View>
				</Animatable.View>
			</View>
		);
	};

	return (
		<Stack.Navigator>
			<Stack.Screen
				options={headerOptions(props)}
				name="Profile"
				component={stackComponent}
			/>
		</Stack.Navigator>
	);
}

export default ProfilePage;
