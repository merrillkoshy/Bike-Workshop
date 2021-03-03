import React, { useEffect, useState } from "react";
import { TextInput, View, Image, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SiteButton from "../../components/SiteButton";
import styles from "./styles";
import firebase from "../../components/firebase";
import "firebase/auth";

function CreateAccount(props) {
  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [pw, setPw] = useState(null);
  const [retypePw, setRetypePw] = useState(null);
  const [eyeCon, setEyecon] = useState("eye-outline");
  const [secText, setSecText] = useState(true);

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@loggedUser", jsonValue);
    } catch (e) {
      console.log("saving error..probably");
    }
  };

  useEffect(() => {
    submit
      ? firebase
          .auth()
          .createUserWithEmailAndPassword(email, pw)
          .then(userCredential => {
            var user = userCredential.user;
            storeData(user);
          })
          .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
          })
      : console.log("Not yet submitted");
    return () => {
      setSubmit(false);
      setName(null);
    };
  }, [submit === true]);
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/gmRepair-lines-05.png")}
        resizeMode="contain"
        style={styles.image1}
      />

      <View style={styles.inputBlock}>
        <Icon name="account" style={styles.iconStyle}></Icon>
        <TextInput
          onChangeText={text => setName(text)}
          placeholder="Yusuf Yakub"
          style={styles.inputStyle}
        />
      </View>
      <View style={styles.inputBlock}>
        <Icon name="email" style={styles.iconStyle}></Icon>
        <TextInput
          onChangeText={text => setEmail(text)}
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
          onChangeText={text => setPw(text)}
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
      <View style={styles.inputBlock}>
        <Icon name="key-change" style={styles.iconStyle}></Icon>
        <TextInput
          secureTextEntry={secText}
          textContentType={"newPassword"}
          onChangeText={text => setRetypePw(text)}
          placeholder="Retype Password"
          style={styles.inputStyle}
        ></TextInput>
      </View>

      <SiteButton
        onPress={() => {
          let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          reg.test(email) === true
            ? retypePw === pw
              ? setSubmit(true)
              : console.log("Passwords does not match")
            : console.log("Please check email format");
        }}
        buttonText={"CREATE"}
        style={styles.matButton}
      />
      <Text style={styles.termsConditions}>Terms &amp; Conditions</Text>
    </View>
  );
}

export default CreateAccount;
