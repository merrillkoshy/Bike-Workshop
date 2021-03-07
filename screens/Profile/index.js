import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import data from "../../components/FireJSON.json";
import { createStackNavigator } from "@react-navigation/stack";
import InfoCard from "../../components/InfoCard";
import styles from "./styles";
import firebase from "../../components/firebase";
import "firebase/auth";
import SiteButton from "../../components/SiteButton";
import Toast from "react-native-toast-message";
const Stack = createStackNavigator();

function ProfilePage(props) {
  var user = firebase.auth().currentUser;

  function stackComponent() {
    return (
      <View style={styles.container}>
        {user?.photoURL ? (
          <Image style={styles.photo} source={{ uri: user.photoURL }} />
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
            {data.profile_strings.map((str, i) => {
              return (
                <InfoCard key={str + i} style={styles.infoCard} string={str} />
              );
            })}
            <SiteButton
              buttonText={"Logout"}
              style={styles.logout}
              onPress={() => {
                firebase
                  .auth()
                  .signOut()
                  .then(() => {
                    props.navigation.navigate("Home", {
                      loggedOut: true,
                    });
                    Toast.show({
                      text1: "Succesfully signed out",
                      text2: "Byee! 👋",
                    });
                  })
                  .catch((error) => {
                    Toast.show({
                      text1:
                        "An error " + error + " - occured while signing out",
                      text2: "Oops...",
                    });
                  });
              }}
            />
          </ScrollView>
        </View>
      </View>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Icon name="chevron-left" style={styles.backIcon}></Icon>
            </TouchableOpacity>
          ),
        }}
        name="Profile"
        component={stackComponent}
      />
    </Stack.Navigator>
  );
}

export default ProfilePage;
