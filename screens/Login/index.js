import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { StatusBar } from "expo-status-bar";
import "firebase/auth";
import Toast from "react-native-toast-message";

import styles from "./styles";
import firebase from "../../firebase";
import SiteButton from "../../components/SiteButton";

function Login(props) {
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [eyeCon, setEyecon] = useState("eye-outline");
  const [secText, setSecText] = useState(true);

  const gateKeeper = () => {
    if (firebase.auth().currentUser) {
      props.navigation.navigate("Dashboard");
    }
  };
  useEffect(() => {
    gateKeeper();
    return () => {
      setSecText(true);
      setEmail(null);
      setPw(null);
      setEyecon("eye-outline");
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" animated={true} />
      <ImageBackground
        source={require("../../assets/images/loginBackground.jpg")}
        style={styles.image}
        blurRadius={2}
      >
        <View style={styles.contentContainer}>
          <Image
            source={require("../../assets/images/gulfmotorcycles-light.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>

          <View style={styles.inputBlock}>
            <Icon name="account" style={styles.iconStyle}></Icon>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="email@example.com"
              textContentType={"emailAddress"}
              style={styles.inputStyle}
            />
          </View>
          <View style={styles.inputBlock}>
            <Icon name="account-key" style={styles.iconStyle}></Icon>
            <TextInput
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

          <SiteButton
            onPress={() => {
              try {
                firebase
                  .auth()
                  .signInWithEmailAndPassword(email, pw)
                  .then(() => {
                    Promise.resolve(
                      Toast.show({
                        text1: "Success!",
                        text2: `Welcome ${
                          firebase.auth().currentUser.displayName
                        }`,
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
              } catch (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                Toast.show({
                  type: "error",
                  text1: "Error!",
                  text2: `${errorMessage}`,
                });
              }
            }}
            buttonText={"LOGIN"}
            style={styles.materialButtonPink}
          />
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
    </View>
  );
}

export default Login;
