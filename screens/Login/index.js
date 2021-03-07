import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import firebase from "../../components/firebase";
import "firebase/auth";
import styles from "./styles";
import SiteButton from "../../components/SiteButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Login(props) {
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState(null);
  const [pw, setPw] = useState(null);
  const [eyeCon, setEyecon] = useState("eye-outline");
  const [secText, setSecText] = useState(true);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@loggedUser", jsonValue);
    } catch (e) {
      console.log("saving error..probably");
    }
  };

  useEffect(() => {
    console.log(email, pw);

    return () => {
      setSecText(true);
      setEmail(null);
      setPw(null);
      setEyecon("eye-outline");
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/gulfmotorcycles.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>

      <View style={styles.inputBlock}>
        <Icon name="account" style={styles.iconStyle}></Icon>
        <TextInput
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
          firebase
            .auth()
            .signInWithEmailAndPassword(email, pw)
            .then((userCredential) => {
              storeData(userCredential.user);
            })
            .then(() => {
              props.navigation.navigate("Home");
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorCode, errorMessage);
            });
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
  );
}

export default Login;
