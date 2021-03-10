import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import data from "../../components/FireJSON.json";
import { createStackNavigator } from "@react-navigation/stack";
import InfoCard from "../../components/InfoCard";
import styles from "./styles";
import firebase from "../../components/firebase";
import "firebase/auth";
import { useFocusEffect } from "@react-navigation/native";
import SiteButton from "../../components/SiteButton";
import Toast from "react-native-toast-message";
const Stack = createStackNavigator();

function ProfilePage(props) {
  const [user, setUser] = useState(null);
  useFocusEffect(
    React.useCallback(() => {
      // console.log(props);
      (() => {
        var currentUser = firebase.auth().currentUser;

        if (currentUser) {
          setUser(currentUser);
        } else {
          setUser(null);
        }
      })();
    }, [])
  );

  function stackComponent() {
    return (
      <View style={styles.container}>
        <View style={styles.carding}>
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
                  <InfoCard
                    key={str + i}
                    style={styles.infoCard}
                    string={str}
                  />
                );
              })}
              {user ? (
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
                            "An error " +
                            error +
                            " - occured while signing out",
                          text2: "Oops...",
                        });
                      });
                  }}
                />
              ) : (
                <SiteButton
                  buttonText={"Login"}
                  style={styles.logout}
                  fontSize={20}
                  onPress={() => props.navigation.navigate("Login")}
                />
              )}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: "#424242",
          },
          headerTintColor: "#FFFFFF",
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
