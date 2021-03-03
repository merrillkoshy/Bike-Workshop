import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CurrentBooking from "../../components/CurrentBooking";
import HistoryJobCards from "../../components/HistoryJobCards";
import { createStackNavigator } from "@react-navigation/stack";
import styles from "./styles";
import headerOptions from "../../components/Header";

const Stack = createStackNavigator();

function HomeScreen(props) {
  const [userData, setUserData] = useState("Guest");
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@loggedUser");
      return jsonValue != null ? setUserData(JSON.parse(jsonValue)) : null;
    } catch (e) {
      console.log("reading error..possibly");
    }
  };

  useEffect(() => {
    getData().then(() => {
      console.log(userData);
    });
  }, []);
  function stackComponent() {
    return (
      <View style={styles.container}>
        <View style={styles.yusufsDashboardRow}>
          <Text style={styles.yusufsDashboard}>
            {userData.email}'s Dashboard
          </Text>
        </View>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <CurrentBooking
              style={styles.materialCardWithTextOverImage1}
            ></CurrentBooking>
            <Text style={styles.history}>History</Text>
            <HistoryJobCards
              style={styles.materialCardWithoutImage}
            ></HistoryJobCards>
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
