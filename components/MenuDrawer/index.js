import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import firebase from "../../firebase";
import "firebase/auth";
import styles from "./styles";
import {
  Image,
  View,
  Text,
  Linking,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import moment from "moment";

function MenuDrawer(props) {
  var user = firebase.auth().currentUser;

  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView style={styles.container}>
        <Image
          source={require("../../assets/icon-light.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
        <View style={styles.itemList}>
          <DrawerItemList {...props} />
        </View>
        <View style={styles.locationBlock}>
          <View style={styles.companyDetailsBlock}>
            <MaterialCommunityIconsIcon
              name="cellphone-basic"
              style={styles.icon}
            />
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(`tel:0563475735`);
              }}
            >
              <Text style={styles.locationText}>05 55 55 5555</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.companyDetailsBlock}>
            <MaterialCommunityIconsIcon name="email" style={styles.icon} />
            <Text style={styles.locationText}>info@gulfmotorcycles.com</Text>
          </View>
          <View style={styles.companyDetailsBlock}>
            <MaterialCommunityIconsIcon name="map-marker" style={styles.icon} />
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  `https://www.google.com/maps/place/25%C2%B008'49.5%22N+55%C2%B013'33.5%22E/@25.1470833,55.2237835,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d25.1470734!4d55.2259782?hl=en-AE`
                );
              }}
            >
              <Text style={styles.locationText}>
                Gulf Motorcycles-Motorcycle Repairs, Behind Burjeel
                Hospital,Sheikh Zayed Road, 6A Street, Al Quoz Industrial 1,
                Dubai, UAE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.smWrapper}>
            <View style={styles.smBlock}>
              <MaterialCommunityIconsIcon name="facebook" style={styles.icon} />
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    `https://www.facebook.com/gulfmotorcyclerepairs/`
                  );
                }}
              >
                <Text style={styles.smBlockText}>@GulfMotorCycleRepairs</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.smBlock}>
              <MaterialCommunityIconsIcon
                name="instagram"
                style={styles.icon}
              />
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`https://www.instagram.com/gulfrepairs/`);
                }}
              >
                <Text style={styles.smBlockText}>#gulfrepairs</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.smBlock}>
              <MaterialCommunityIconsIcon name="twitter" style={styles.icon} />

              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`https://twitter.com/GulfRepairs`);
                }}
              >
                <Text style={styles.smBlockText}>@GulfRepairs</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.copyRight}>
            <Text style={styles.appVer}>v1.0.0</Text>
            <Text style={styles.copyText}>
              {`${moment().format("YYYY")}-${parseInt(moment().format("YY")) +
                1}`}{" "}
              Gulf Motorcycles® for Motorcycle Repairs
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </DrawerContentScrollView>
  );
}

export default MenuDrawer;
