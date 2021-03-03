import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import data from "../../components/FireJSON.json";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCardWithoutImage from "../../components/MaterialCardWithoutImage";
import styles from "./styles";

const Stack = createStackNavigator();

function ProfilePage(props) {
  function stackComponent() {
    return (
      <View style={styles.container}>
        <Icon name="account-circle" style={styles.icon}></Icon>
        <Text style={styles.yusufYakub}>Yusuf Yakub</Text>

        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            {data.profile_strings.map((str, i) => {
              return (
                <MaterialCardWithoutImage
                  key={str + i}
                  style={styles.materialCardWithoutImage}
                  string={str}
                />
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
