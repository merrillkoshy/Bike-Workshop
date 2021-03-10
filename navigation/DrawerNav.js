import React, { useState, useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../appStyles";
import Home from "./TabNav";
import AccountsScreen from "./StackNav";
import MenuDrawer from "../components/MenuDrawer";
import firebase from "../components/firebase";
import "firebase/auth";
import { Dimensions } from "react-native";

const Drawer = createDrawerNavigator();

export default function RootDrawer(props) {
  const locationData = props.locationData;

  const [user, setUser] = useState(null);

  useEffect(() => {
    var currentUser = firebase.auth().currentUser;
    if (currentUser != null) {
      setUser(currentUser);
    }
  }, []);
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuDrawer {...props} />}
      drawerPosition="right"
      drawerStyle={{
        backgroundColor: theme?.HASNAIN_GREY,
        width: Dimensions.get("window").width / 1.4,
      }}
      drawerContentOptions={{
        activeTintColor: theme?.TEXT_DARK,
        inactiveTintColor: theme?.TEXT_DARK,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIconsIcon
              focused={focused}
              name="home"
              size={size}
              color={color}
            />
          ),
        }}
        locationData={locationData}
        props={props}
      />
      {!user && (
        <Drawer.Screen
          name="Login"
          component={AccountsScreen}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <MaterialCommunityIconsIcon
                focused={focused}
                name="login"
                size={size}
                color={color}
              />
            ),
          }}
          props={props}
        />
      )}
      {/* {user && (
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
                  text1: "An error " + error + " - occured while signing out",
                  text2: "Oops...",
                });
              });
          }}
        />
      )} */}
    </Drawer.Navigator>
  );
}
