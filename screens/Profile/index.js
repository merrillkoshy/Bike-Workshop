import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Modal from "react-native-modal";
import Toast from "react-native-toast-message";
import { createStackNavigator } from "@react-navigation/stack";
import "firebase/auth";

import InfoCard from "../../components/InfoCard";
import styles from "./styles";
import firebase from "../../firebase";
import SiteButton from "../../components/SiteButton";
import headerOptions from "../../components/Header";
import UpdateDetails from "../../components/UpdateDetails";

const Stack = createStackNavigator();

function ProfilePage(props) {
  const [user, setUser] = useState(null);
  const [datum, setDatum] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  var currentUser = firebase.auth().currentUser;

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
      setUser(null);
    }
  };

  useEffect(() => {
    authenticate();
    fetch();
  }, []);

  const stackComponent = () => {
    return (
      <View style={styles.container}>
        {user && (
          <View style={styles.carding}>
            {user?.photoURL ? (
              <Image style={styles.photo} source={{ uri: user?.photoURL }} />
            ) : (
              <Icon name="account-circle" style={styles.icon}></Icon>
            )}

            <Text style={styles.profileName}>
              {user ? user?.displayName : "Guest"}
            </Text>

            <View style={styles.scrollArea}>
              <ScrollView
                contentContainerStyle={styles.scrollArea_contentContainerStyle}
              >
                <View style={styles.infoBlock}>
                  {datum?.address && (
                    <Text style={styles.detailText}>
                      Address : {datum.address}
                    </Text>
                  )}

                  {datum?.email && (
                    <Text style={styles.detailText}>Email : {datum.email}</Text>
                  )}
                  {datum?.phoneNumber && (
                    <Text style={styles.detailText}>
                      Phone : {datum.phoneNumber}
                    </Text>
                  )}

                  <Modal
                    style={styles.modalContainer}
                    animationIn={"rubberBand"}
                    animationOut={"slideOutDown"}
                    isVisible={isModalVisible}
                    animationOutTiming={1000}
                    transparent={true}
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
                </View>
                <View style={styles.infoBlock}>
                  <TouchableOpacity
                    style={styles.infoCard}
                    onPress={toggleModal}
                  >
                    <Text style={styles.buttonText}>{"Edit Profile"}</Text>
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
                          text1: "Succesfully signed out",
                          text2: "Byee! 👋",
                        });
                        props.navigation.navigate("Login");
                      })
                      .catch((error) => {
                        Toast.show({
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
        )}
        {!user && (
          <View style={styles.carding}>
            <Icon name="account-circle" style={styles.icon}></Icon>

            <Text style={styles.profileName}>Guest</Text>

            <View style={styles.scrollArea}>
              <SiteButton
                buttonText={"Login"}
                style={styles.logout}
                fontSize={20}
                onPress={() => props.navigation.navigate("Login")}
              />
            </View>
          </View>
        )}
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
