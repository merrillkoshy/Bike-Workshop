import React, { useEffect, useState } from "react";
import {
  TextInput,
  View,
  Image,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Toast from "react-native-toast-message";

import SiteButton from "../../components/SiteButton";
import styles from "./styles";
import firebase from "../../firebase";

const UpdateDetails = (props) => {
  var user = firebase.auth().currentUser;
  const [name, setName] = useState(props?.name);

  const [image, setImage] = useState(props?.photoURL ? props?.photoURL : "");
  const [address, setAddress] = useState(props?.address);
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
      setName(props?.name);

      setImage(props?.photoURL ? props?.photoURL : "");
      setAddress(props?.address);
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
    <View style={styles.contentContainer}>
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
            source={require("../../assets/images/Monogram.png")}
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
                : "https://firebasestorage.googleapis.com/v0/b/bike-workshop-e2f5d.appspot.com/o/mono.png?alt=media&token=c208f0a6-aea9-4157-ae85-386f1310720d",
            });
            firebase
              .database()
              .ref("users/" + user?.uid)
              .update({
                username: name,
                phoneNumber: phoneNumber,
                photoURL: image
                  ? image
                  : "https://firebasestorage.googleapis.com/v0/b/bike-workshop-e2f5d.appspot.com/o/mono.png?alt=media&token=c208f0a6-aea9-4157-ae85-386f1310720d",
                phoneNumber: phoneNumber,
                address: address,
              })
              .then(function() {
                Toast.show({
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
      <TouchableOpacity style={styles.hideButton} onPress={props?.toggleModal}>
        <Text style={styles.closeIcon}>CLOSE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdateDetails;
