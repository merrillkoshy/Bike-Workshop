import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";

import CurrentBooking from "../../components/CurrentBooking";

import { createStackNavigator } from "@react-navigation/stack";
import styles from "./styles";
import headerOptions from "../../components/Header";
import { useFocusEffect } from "@react-navigation/native";

import * as Animatable from "react-native-animatable";

import firebase from "../../firebase";
import "firebase/auth";
import MainServices from "../../components/MainServices";
import { Divider } from "@ui-kitten/components";

const Stack = createStackNavigator();

function HomeScreen(props) {
  const [triggered, setTriggered] = useState(false);
  const [mainServices, setMainServices] = useState(null);

  var dbRef = firebase.database().ref("mainServices/");

  const servicesList = () => {
    var serviceList = [];

    dbRef
      .once("value", (snapshot) => {
        snapshot.forEach((snap) => {
          const svObject = snap.val();
          serviceList.push(svObject);
        });
      })
      .then(() => {
        setMainServices(serviceList);
      });
  };

  const animateHere = () => {
    setTriggered(true);
  };
  useEffect(() => {
    servicesList();

    return () => {
      setTriggered(false);
    };
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      setTriggered(false);

      return () => setTriggered(false);
    }, [])
  );

  const growAndShrink = {
    from: {
      height: 220,
    },
    to: {
      height: 140,
    },
  };
  const shrinkAndGrow = {
    from: {
      height: 140,
    },
    to: {
      height: 220,
    },
  };
  function stackComponent() {
    return (
      <View style={styles.container}>
        <View style={styles.welcome}>
          <View style={styles.yusufsDashboardRow}>
            <Text style={styles.yusufsDashboard}>
              {firebase.auth()?.currentUser?.displayName}'s Dashboard
            </Text>
          </View>
        </View>
        <View style={styles.carding}>
          <View style={styles.scrollArea}>
            <Animatable.View
              style={styles.bookingHeroPanel}
              animation={triggered ? growAndShrink : shrinkAndGrow}
              delay={100}
            >
              <CurrentBooking user={firebase.auth().currentUser} />
            </Animatable.View>
            <Divider />
            <View
              style={styles.captureContainer}
              onTouchMove={(e) => (!triggered ? animateHere() : null)}
            >
              <Text style={styles.history}>Services</Text>
              <MainServices
                {...props}
                mainServices={mainServices}
                style={styles.servicesListing}
              />
            </View>
            {/* <HistoryJobCards style={styles.infoCard}></HistoryJobCards> */}
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
