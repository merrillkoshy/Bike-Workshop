import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CurrentBooking from "../../components/CurrentBooking";
import HistoryJobCards from "../../components/HistoryJobCards";
import { createStackNavigator } from "@react-navigation/stack";
import styles from "./styles";
import headerOptions from "../../components/Header";
import { useFocusEffect } from "@react-navigation/native";

import firebase from "../../components/firebase";
import "firebase/auth";

const Stack = createStackNavigator();

function HomeScreen(props) {
  const [userData, setUserData] = useState("Guest");
  const [user, setUser] = useState(null);
  useFocusEffect(
    React.useCallback(() => {
      (() => {
        var currentUser = firebase.auth().currentUser;
        if (currentUser) {
          setUserData(currentUser.displayName);
          setUser(currentUser);
        } else {
          setUserData("Guest");
          setUser(null);
        }
      })();
    }, [])
  );

  function stackComponent() {
    return (
      <View style={styles.container}>
        <View style={styles.carding}>
          <View style={styles.yusufsDashboardRow}>
            <Text style={styles.yusufsDashboard}>{userData}'s Dashboard</Text>
          </View>
          <View style={styles.scrollArea}>
            <ScrollView
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
            >
              <CurrentBooking
                user={user}
                style={styles.materialCardWithTextOverImage1}
              ></CurrentBooking>
              <Text style={styles.history}>History</Text>
              <HistoryJobCards style={styles.infoCard}></HistoryJobCards>
            </ScrollView>
          </View>
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
