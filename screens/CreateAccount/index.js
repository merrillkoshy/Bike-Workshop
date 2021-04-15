import React, { useEffect, useState, useRef } from "react";
import {
  TextInput,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Button,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SiteButton from "../../components/SiteButton";
import styles from "./styles";
import firebase from "../../firebase";
import "firebase/auth";
import "firebase/database";
import * as ImagePicker from "expo-image-picker";
import { StatusBar } from "expo-status-bar";

import Toast from "react-native-toast-message";
import { ImageBackground } from "react-native";
import { buildNotification, sendNotif } from "../../lib/NotificationsHandler";

function CreateAccount(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [retypePw, setRetypePw] = useState("");
  const [eyeCon, setEyecon] = useState("eye-outline");
  const [secText, setSecText] = useState(true);
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");

  //Phone

  const [phoneNumber, setPhoneNumber] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
    return () => {
      setName("");
      setEmail("");
      setPw("");
      setRetypePw("");
      setEyecon("eye-outline");
      setSecText(true);
      setImage("");
      setPhoneNumber(null);
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
    <View style={styles.container}>
      <StatusBar style="light" animated={true} />
      <ImageBackground
        source={require("../../assets/images/loginBackground.jpg")}
        style={styles.image}
        blurRadius={1}
      >
        <View style={styles.contentContainer}>
          <View
            style={{
              alignItems: "center",
              marginTop: 50,
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
            <Text style={styles.helpText}>Upload Profile Picture</Text>
          </View>
          <View style={styles.inputWrapper}>
            <View style={styles.inputBlock}>
              <Icon name="account" style={styles.iconStyle}></Icon>
              <TextInput
                onChangeText={(text) => setName(text)}
                autoFocus
                value={name}
                placeholder="Yusuf Yakub"
                placeholderTextColor="#FFFFFF"
                style={styles.inputStyle}
              />
            </View>

            <View style={styles.inputBlock}>
              <Icon name="email" style={styles.iconStyle}></Icon>
              <TextInput
                onChangeText={(text) => setEmail(text)}
                placeholder="email@example.com"
                placeholderTextColor="#FFFFFF"
                textContentType={"emailAddress"}
                value={email}
                style={styles.inputStyle}
              />
            </View>
            <View style={styles.inputBlock}>
              <Icon name="cellphone-basic" style={styles.iconStyle}></Icon>
              <TextInput
                style={styles.inputStyle}
                placeholder="+971 55 555 5555"
                placeholderTextColor="#FFFFFF"
                autoCompleteType="tel"
                keyboardType="phone-pad"
                textContentType="telephoneNumber"
                value={phoneNumber}
                onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
              />
            </View>
            <View style={styles.inputBlock}>
              <Icon name="account-key" style={styles.iconStyle}></Icon>
              <TextInput
                secureTextEntry={secText}
                textContentType={"newPassword"}
                onChangeText={(text) => setPw(text)}
                placeholder="Password"
                placeholderTextColor="#FFFFFF"
                value={pw}
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
                onChangeText={(text) => setRetypePw(text)}
                placeholder="Retype Password"
                placeholderTextColor="#FFFFFF"
                value={retypePw}
                style={styles.inputStyle}
              ></TextInput>
            </View>
            <View style={styles.inputBlock}>
              <Icon name="home" style={styles.iconStyle}></Icon>
              <TextInput
                onChangeText={(text) => setAddress(text)}
                value={address}
                placeholder="Flat #1, Street, District, Dubai"
                placeholderTextColor="#FFFFFF"
                style={styles.inputStyle}
              />
            </View>
          </View>
          <SiteButton
            onPress={() => {
              let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
              let regPhone = /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g;
              if (reg.test(email) === true) {
                retypePw === pw
                  ? firebase
                      .auth()
                      .createUserWithEmailAndPassword(email, pw)
                      .then(() => {
                        var user = firebase.auth().currentUser;
                        user?.updateProfile({
                          displayName: name,
                          photoURL: image
                            ? image
                            : "https://firebasestorage.googleapis.com/v0/b/bike-workshop-e2f5d.appspot.com/o/icon.png?alt=media&token=68d4488a-adaa-4d3a-94e9-2842a25c86d5",
                        });
                        firebase
                          .database()
                          .ref("users/" + user?.uid)
                          .set({
                            username: name,
                            email: email,
                            phoneNumber: phoneNumber,
                            photoURL: image
                              ? image
                              : "https://firebasestorage.googleapis.com/v0/b/bike-workshop-e2f5d.appspot.com/o/icon.png?alt=media&token=68d4488a-adaa-4d3a-94e9-2842a25c86d5",
                            phoneNumber: phoneNumber,
                            address: address,
                          });
                      })
                      .then(function() {
                        const notification = buildNotification(name);
                        sendNotif(notification);
                        Toast.show({
                          position: "top",
                          text1: "You are all set " + name + "!",
                          text2: "Get Started. Log in!",
                        });
                        props.navigation.navigate("Login");
                      })
                      .catch(function(error) {
                        Toast.show({
                          position: "top",
                          type: "error",
                          text1: " " + error + " ",
                          text2: "Lets try that again",
                        });
                      })
                  : Toast.show({
                      position: "top",
                      type: "error",
                      text1: "Passwords does not match",
                      text2: "Lets try that again",
                    });
              } else {
                Toast.show({
                  position: "top",
                  type: "error",
                  text1: "Please fill in all the details",
                  text2: "Lets try that again",
                });
              }
            }}
            buttonText={"CREATE"}
            style={styles.matButton}
          />
          <Text style={styles.termsConditions}>Terms &amp; Conditions</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default CreateAccount;
