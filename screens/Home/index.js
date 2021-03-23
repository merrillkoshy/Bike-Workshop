import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CurrentBooking from "../../components/CurrentBooking";
import HistoryJobCards from "../../components/HistoryJobCards";
import { createStackNavigator } from "@react-navigation/stack";
import styles from "./styles";
import headerOptions from "../../components/Header";

import firebase from "../../firebase";
import "firebase/auth";
import MainServices from "../../components/MainServices";
import BookingPlaceHolder from "../../components/BookingPlaceHolder";

const Stack = createStackNavigator();

function HomeScreen(props) {
  function stackComponent() {
    return (
      <View style={styles.container}>
        <View style={styles.carding}>
          <View style={styles.yusufsDashboardRow}>
            {firebase.auth().currentUser && (
              <Text style={styles.yusufsDashboard}>
                {firebase.auth().currentUser.displayName}'s Dashboard
              </Text>
            )}
            {!firebase.auth().currentUser && (
              <Text style={styles.yusufsDashboard}>{"Guest"}'s Dashboard</Text>
            )}
          </View>
          <View style={styles.scrollArea}>
            <ScrollView
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
            >
              {firebase.auth().currentUser && (
                <CurrentBooking
                  user={firebase.auth().currentUser}
                  style={styles.materialCardWithTextOverImage1}
                ></CurrentBooking>
              )}
              {!firebase.auth().currentUser && <BookingPlaceHolder />}

              <Text style={styles.history}>Services</Text>
              <MainServices {...props} style={styles.servicesListing} />
              {/* <HistoryJobCards style={styles.infoCard}></HistoryJobCards> */}
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
