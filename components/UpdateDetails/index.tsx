import React, { useEffect, useState } from "react";
import {
	TextInput,
	View,
	Image,
	Text,
	Platform,
	TouchableOpacity,
	Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Toast from "react-native-toast-message";

import SiteButton from "../SiteButton";
import styles from "./styles";
import firebase from "../../firebase";

const UpdateDetails = (props: any) => {
	var user = firebase.auth().currentUser;
	const [name, setName] = useState(props?.name);

	const [image, setImage] = useState(props?.photoURL ? props?.photoURL : "");
	const [address, setAddress] = useState(props?.address);
	const [phoneNumber, setPhoneNumber] = useState<string>("");

	useEffect(() => {
		(async () => {
			if (Platform.OS !== "web") {
				const {
					status,
				} = await ImagePicker.requestMediaLibraryPermissionsAsync();
				if (status !== "granted") {
					Alert.alert(
						"Sorry, we need camera roll permissions to make this work!"
					);
				}
			}
		})();
		return () => {
			setName(props?.name);

			setImage(props?.photoURL ? props?.photoURL : "");
			setAddress(props?.address);
			setPhoneNumber("");
		};
	}, []);
	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [3, 3],
			quality: 1,
		});

		console.log(result);

		if (!result.cancelled) {
			setImage(result.uri);
		}
	};

	return (
		<View style={styles.contentContainer}>
			<View
				style={{
					alignItems: "center",
					paddingVertical: 30,
					paddingHorizontal: 20,
					borderRadius: 10,
					backgroundColor: "rgba(255,255,255,0.9)",
				}}
			>
				<View
					style={{
						alignItems: "center",
					}}
				>
					{image ? (
						<Image
							source={{ uri: image }}
							style={{ width: 100, height: 100, borderRadius: 50 }}
						/>
					) : (
						<Image
							source={require("../../assets/icon.png")}
							resizeMode="contain"
							style={styles.image1}
						></Image>
					)}
					<Icon
						name="lead-pencil"
						style={styles.pencilIcon}
						onPress={pickImage}
					></Icon>
					<Text style={styles.helpText}>Change Profile Picture</Text>
				</View>
				<View style={styles.inputWrapper}>
					<View style={styles.inputBlock}>
						<Icon name="account" style={styles.iconStyle}></Icon>
						<TextInput
							onChangeText={(text) => setName(text)}
							value={name}
							placeholder="Yusuf Yakub"
							placeholderTextColor="#808080"
							style={styles.inputStyle}
						/>
					</View>

					<View style={styles.inputBlock}>
						<Icon name="cellphone-basic" style={styles.iconStyle}></Icon>
						<TextInput
							style={styles.inputStyle}
							placeholder="+971 55 555 5555"
							placeholderTextColor="#808080"
							autoCompleteType="tel"
							keyboardType="phone-pad"
							textContentType="telephoneNumber"
							value={phoneNumber}
							onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
						/>
					</View>

					<View style={styles.inputBlock}>
						<Icon name="home" style={styles.iconStyle}></Icon>
						<TextInput
							onChangeText={(text) => setAddress(text)}
							value={address}
							placeholder="Flat #1, Street, District, Dubai"
							placeholderTextColor="#808080"
							style={styles.inputStyle}
						/>
					</View>
				</View>
				<SiteButton
					onPress={() => {
						try {
							user?.updateProfile({
								displayName: name,
								photoURL: image
									? image
									: "https://firebasestorage.googleapis.com/v0/b/bike-workshop-e2f5d.appspot.com/o/icon.png?alt=media&token=68d4488a-adaa-4d3a-94e9-2842a25c86d5",
							});
							firebase
								.database()
								.ref("users/" + user?.uid)
								.update({
									username: name,
									phoneNumber: phoneNumber,
									photoURL: image
										? image
										: "https://firebasestorage.googleapis.com/v0/b/bike-workshop-e2f5d.appspot.com/o/icon.png?alt=media&token=68d4488a-adaa-4d3a-94e9-2842a25c86d5",
									address: address,
								})
								.then(function() {
									Toast.show({
										type: "success",
										position: "top",
										text1: "Update success",
										text2: "",
									});
									props.navigation.navigate("Home");
								});
						} catch (error) {
							Toast.show({
								position: "top",
								type: "error",
								text1: " " + error + " ",
								text2: "Lets try that again",
							});
						}
					}}
					buttonText={"UPDATE"}
					style={styles.matButton}
				/>
				<TouchableOpacity
					style={styles.hideButton}
					onPress={props?.toggleModal}
				>
					<Text style={styles.closeIcon}>CLOSE</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default UpdateDetails;
