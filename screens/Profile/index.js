import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import data from "../../components/FireJSON.json";
import { createStackNavigator } from "@react-navigation/stack";
import InfoCard from "../../components/InfoCard";
import styles from "./styles";
import firebase from "../../components/firebase";
import "firebase/auth";

const Stack = createStackNavigator();

function ProfilePage(props) {
  var user = firebase.auth().currentUser;

  function stackComponent() {
    return (
      <View style={styles.container}>
        {user.photoURL ? (
          <Image style={styles.photo} source={{ uri: user.photoURL }} />
        ) : (
          <Icon name="account-circle" style={styles.icon}></Icon>
        )}

        <Text style={styles.profileName}>{user.displayName}</Text>

        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            {data.profile_strings.map((str, i) => {
              return (
                <InfoCard key={str + i} style={styles.infoCard} string={str} />
              );
            })}
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
          )
        }}
        name="Profile"
        component={stackComponent}
      />
    </Stack.Navigator>
  );
}

export default ProfilePage;
