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
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SiteButton from "../../components/SiteButton";
import styles from "./styles";
import firebase, { firebaseConfig } from "../../components/firebase";
import "firebase/auth";
import "firebase/database";
import * as ImagePicker from "expo-image-picker";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";

function CreateAccount(props) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [pw, setPw] = useState(null);
  const [retypePw, setRetypePw] = useState(null);
  const [eyeCon, setEyecon] = useState("eye-outline");
  const [secText, setSecText] = useState(true);
  const [image, setImage] = useState(null);

  //Phone
  const recaptchaVerifier = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [verificationId, setVerificationId] = React.useState();
  const [verificationCode, setVerificationCode] = React.useState();
  const attemptInvisibleVerification = true;

  //Verification Modal
  const [modalVisible, setModalVisible] = useState(false);

  // const storeData = async (value) => {
  //   try {
  //     const jsonValue = JSON.stringify(value);
  //     await AsyncStorage.setItem("@loggedUser", jsonValue);
  //   } catch (e) {
  //     console.log("saving error..probably");
  //   }
  // };

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
      setName(null);
      setEmail(null);
      setPw("");
      setRetypePw(null);
      setEyecon("eye-outline");
      setSecText(true);
      setImage(null);
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
      <Image
        source={require("../../assets/images/gulfmotorcycles.png")}
        resizeMode="contain"
        style={styles.image1}
      />
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        {image ? (
          <Image
            source={{ uri: image }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        ) : (
          <Icon name="account-circle" style={styles.icon}></Icon>
        )}
        <Icon
          name="lead-pencil"
          style={styles.pencilIcon}
          onPress={pickImage}
        ></Icon>
      </View>
      <View style={styles.inputBlock}>
        <Icon name="account" style={styles.iconStyle}></Icon>
        <TextInput
          onChangeText={(text) => setName(text)}
          autoFocus
          placeholder="Yusuf Yakub"
          style={styles.inputStyle}
        />
      </View>
      <View style={styles.inputBlock}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
          attemptInvisibleVerification={attemptInvisibleVerification}
        />

        <Icon name="cellphone-basic" style={styles.iconStyle}></Icon>
        <TextInput
          style={styles.inputStyle}
          placeholder="+971 55 555 5555"
          autoCompleteType="tel"
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
          onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
        />
        {/* <TouchableOpacity
          style={
            !phoneNumber
              ? styles.verificationButtonDisabled
              : styles.verificationButton
          }
          disabled={!phoneNumber}
          onPress={async () => {
            // The FirebaseRecaptchaVerifierModal ref implements the
            // FirebaseAuthApplicationVerifier interface and can be
            // passed directly to `verifyPhoneNumber`.
            try {
              const phoneProvider = new firebase.auth.PhoneAuthProvider();
              const verificationId = await phoneProvider.verifyPhoneNumber(
                phoneNumber,
                recaptchaVerifier.current
              );
              setVerificationId(verificationId);
              showMessage({
                text: "Verification code has been sent to your phone.",
              });
              setModalVisible(true);
            } catch (err) {
              showMessage({ text: `Error: ${err.message}`, color: "red" });
            }
          }}
        >
          <Text style={{ color: "#FFFFFF" }}>Verify</Text>
        </TouchableOpacity> */}
      </View>
      <View style={styles.inputBlock}>
        <Icon name="email" style={styles.iconStyle}></Icon>
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
      <View style={styles.inputBlock}>
        <Icon name="key-change" style={styles.iconStyle}></Icon>
        <TextInput
          secureTextEntry={secText}
          textContentType={"newPassword"}
          onChangeText={(text) => setRetypePw(text)}
          placeholder="Retype Password"
          style={styles.inputStyle}
        ></TextInput>
      </View>

      {/* Modal */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View style={styles.modalView}>
            <View style={styles.modalBlock}>
              <Text>Enter Verification code</Text>
              <TextInput
                style={styles.verificationCode}
                autoFocus
                editable={!!verificationId}
                placeholder="123456"
                onChangeText={setVerificationCode}
              />
            </View>
            <SiteButton
              buttonText={"CONFIRM"}
              disabled={!verificationId}
              onPress={() => setModalVisible(false)}
              style={styles.matButton}
            />
            <View style={styles.googleVerificationMessage}>
              {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
            </View>
          </View>
        </Modal>
      </View>
      {/* End Modal */}

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
                    user.updateProfile({
                      displayName: name,
                      photoURL: image
                        ? image
                        : "https://cdn.icon-icons.com/icons2/2119/PNG/512/google_icon_131222.png",
                    });
                    firebase
                      .database()
                      .ref("users/" + user.uid)
                      .set({
                        username: name,
                        email: email,
                        phoneNumber: phoneNumber,
                        photoURL: image
                          ? image
                          : "https://cdn.icon-icons.com/icons2/2119/PNG/512/google_icon_131222.png",
                        phoneNumber: phoneNumber,
                      });
                  })
                  .then(function() {
                    console.log("Update success");
                    props.navigation.navigate("Home");
                  })
                  .catch(function(error) {
                    console.log("An error " + error + " happened");
                  })
              : console.log("Passwords does not match");
          } else {
            console.log(
              "Please fill in all the details",
              name,
              phoneNumber,
              email
            );
          }
        }}
        // onPress={async () => {
        //   if (retypePw === pw) {
        //     try {
        //       const credential = firebase.auth.PhoneAuthProvider.credential(
        //         verificationId,
        //         verificationCode
        //       );
        //       await firebase
        //         .auth()
        //         .signInWithCredential(credential)
        //         .then(() => {
        //           console.log("Phone authentication successful 👍");
        //           var user = firebase.auth().currentUser;
        //           firebase
        //             .database()
        //             .ref("users/" + user.uid)
        //             .set({
        //               username: name,
        //               email: email,
        //               photoURL: image
        //                 ? image
        //                 : "https://cdn.icon-icons.com/icons2/2119/PNG/512/google_icon_131222.png",
        //               phoneNumber: phoneNumber,
        //             });
        //           user
        //             .updateProfile({
        //               displayName: name,
        //               photoURL: image
        //                 ? image
        //                 : "https://cdn.icon-icons.com/icons2/2119/PNG/512/google_icon_131222.png",
        //             })
        //             .then(function() {
        //               console.log("Update success");
        //               props.navigation.navigate("Home");
        //             })
        //             .catch(function(error) {
        //               console.log("An error " + error + " happened");
        //             });
        //         });
        //     } catch (err) {
        //       console.log("An error " + err + " happened while authing");
        //     }
        //   } else {
        //     console.log("Passwords does not match");
        //   }
        // }}
        buttonText={"CREATE"}
        style={styles.matButton}
      />
      <Text style={styles.termsConditions}>Terms &amp; Conditions</Text>
    </View>
  );
}

export default CreateAccount;
