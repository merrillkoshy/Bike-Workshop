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
import Toast from "react-native-toast-message";
import { useFocusEffect } from "@react-navigation/native";

import styles from "./styles";
import firebase from "../../firebase";
import { Icon, Button } from "@ui-kitten/components";

function Login(props) {
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [eyeCon, setEyecon] = useState("eye-outline");
  const [secText, setSecText] = useState(true);

  useFocusEffect(
    useCallback(() => {
      if (firebase.auth().currentUser) {
        return props.navigation.navigate("Dashboard");
      }
    }, [])
  );

  useEffect(() => {
    if (firebase.auth().currentUser) {
      return props.navigation.navigate("Dashboard");
    }
    return () => {
      setSecText(true);
      setEmail(null);
      setPw(null);
      setEyecon("eye-outline");
    };
  }, [firebase.auth().currentUser]);

  return (
    <SafeAreaView style={styles.container}>
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
            <Icon name="person-outline" style={styles.iconStyle}></Icon>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="email@example.com"
              textContentType={"emailAddress"}
              style={styles.inputStyle}
            />
          </View>
          <View style={styles.inputBlock}>
            <Icon name="lock-outline" style={styles.iconStyle}></Icon>
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
