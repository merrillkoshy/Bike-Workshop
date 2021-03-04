import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CurrentBooking from "../../components/CurrentBooking";
import HistoryJobCards from "../../components/HistoryJobCards";
import { createStackNavigator } from "@react-navigation/stack";
import styles from "./styles";
import headerOptions from "../../components/Header";
import firebase from "../../components/firebase";
import "firebase/auth";

const Stack = createStackNavigator();

function HomeScreen(props) {
  const [userData, setUserData] = useState("Guest");
  const [fireUser, setFireUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        setFireUser(user);
        setUserData(user.displayName);

        console.log("We are authenticated now!");
      } else {
        setUserData("Guest");
        console.log("We are unauthenticated.");
      }
    });
  }, []);
  function stackComponent() {
    return (
      <View style={styles.container}>
        <View style={styles.yusufsDashboardRow}>
          <Text style={styles.yusufsDashboard}>{userData}'s Dashboard</Text>
        </View>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <CurrentBooking
              user={fireUser}
              style={styles.materialCardWithTextOverImage1}
            ></CurrentBooking>
            <Text style={styles.history}>History</Text>
            <HistoryJobCards style={styles.infoCard}></HistoryJobCards>
          </ScrollView>
        </View>
      </View>
    );
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={headerOptions(props)}
        name="Home"
        component={stackComponent}
      />
    </Stack.Navigator>
  );
}

export default HomeScreen;
