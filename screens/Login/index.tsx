import React, { useEffect, useState, useCallback } from "react";
import {
	View,
	Image,
	Text,
	TouchableOpacity,
	TextInput,
	ImageBackground,
	SafeAreaView,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import "firebase/auth";
import Toast, { ToastProps } from "react-native-toast-message";

import styles from "./styles";
import firebase from "../../firebase";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from "@ui-kitten/components";

function Login(props: any) {
	const [email, setEmail] = useState<string>("");
	const [pw, setPw] = useState<string>("");
	const [eyeCon, setEyecon] = useState<string>("eye-outline");
	const [secText, setSecText] = useState<boolean>(true);
	const [userName, setUsername] = useState<string | null>("");

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				props.navigation.navigate("Dashboard");
				setUsername(user.displayName);
			}
		});
		return () => {
			setSecText(true);
			setEmail("");
			setPw("");
			setEyecon("eye-outline");
		};
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar backgroundColor="transparent" style="light" animated={true} />
			<ImageBackground
				source={require("../../assets/images/loginBackground.jpg")}
				style={styles.image}
				resizeMode="cover"
				blurRadius={2}
			>
				<View style={styles.contentContainer}>
					<Image
						source={require("../../assets/icon.png")}
						resizeMode="contain"
						style={styles.image1}
					></Image>

					<View style={styles.inputBlock}>
						<Icon name="account-outline" style={styles.iconStyle}></Icon>
						<TextInput
							autoCompleteType={"email"}
							value={email}
							importantForAutofill={"yes"}
							onChangeText={(text) => setEmail(text)}
							placeholder="email@example.com"
							textContentType={"emailAddress"}
							style={styles.inputStyle}
						/>
					</View>
					<View style={styles.inputBlock}>
						<Icon name="lock-outline" style={styles.iconStyle}></Icon>
						<TextInput
							autoCompleteType={"password"}
							importantForAutofill={"yes"}
							secureTextEntry={secText}
							value={pw}
							textContentType={"newPassword"}
							onChangeText={(text) => setPw(text)}
							placeholder="Password"
							style={styles.inputStyle}
						></TextInput>
						<TouchableOpacity
							onPress={() => {
								eyeCon === "eye-outline"
									? setEyecon("eye-off-outline")
									: setEyecon("eye-outline");
								secText === true ? setSecText(false) : setSecText(true);
							}}
						>
							<Icon name={eyeCon} style={styles.iconStyle}></Icon>
						</TouchableOpacity>
					</View>

					<Button
						status="secondary"
						onPress={() => {
							try {
								firebase
									.auth()
									.signInWithEmailAndPassword(email, pw)
									.then(() => {
										Promise.resolve(
											Toast.show({
												type: "success",
												text1: "Success!",
												text2: `Welcome ${userName}`,
											})
										).then(() => {
											props.navigation.navigate("Dashboard");
										});
									})
									.catch((error) => {
										var errorCode = error.code;
										var errorMessage = error.message;
										Toast.show({
											type: "error",
											text1: "Error!",
											text2: `${errorMessage}`,
										});
										console.log(errorCode, errorMessage);
									});
								// prettier-ignore-start
							} catch (error) {
								Toast.show({
									type: "error",
									text1: "Error!",
									text2: `${error}`,
								});
							}
							// prettier-ignore-end
						}}
						style={styles.materialButtonPink}
					>
						LOGIN
					</Button>
					{/* <Button
        title={"Sign-in With Google"}
        onPress={() => firebase.auth.GoogleAuthProvider()}
      /> */}

					<Text style={styles.loremIpsum}>Dont have an account yet?</Text>
					<TouchableOpacity
						onPress={() => {
							props.navigation.navigate("Create Account");
						}}
					>
						<Text style={styles.createNow}>Create now</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
}

export default Login;
