import React, { useState, useEffect } from "react";
import { Image, View, ScrollView, Text, TextInput } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ServiceList from "../../components/ServiceList";
import Header from "../../components/Header";
import MenuButton from "../../components/MenuButton";
import styles from "./styles";
import firebase from "../../components/firebase";
import "firebase/auth";
import "firebase/database";
import SiteButton from "../../components/SiteButton";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
//Import moment for date and time
import moment from "moment";

function Booking(props) {
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [serviceName, setServiceName] = useState(null);
  const [serviceCharge, setServiceCharge] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [address, setAddress] = useState(null);
  const [bookingRef, setBookingRef] = useState(null);
  //Get date with moment.js
  const [currentDate, setCurrentDate] = useState("");

  var user = firebase.auth().currentUser;
  const db = firebase.database().ref("users/" + user.uid);

  useEffect(() => {
    db.on("value", (snapshot) => {
      const data = snapshot.val();
      setPhoneNumber(data.phoneNumber);
    });
    var date = moment()
      .utcOffset("+4")
      .format("M-D-YYhhmmss");
    setCurrentDate(date);
    setBookingRef(
      firebase.database().ref("users/" + user.uid + "/bookings/" + date)
    );
    setName(user.displayName);
    setImage(props.route.params.image);
    setServiceName(props.route.params.serviceName);
    setServiceCharge(props.route.params.serviceCharge);
    props.navigation.setOptions({
      title: serviceName === "" ? "No title" : serviceName,
      headerTitleStyle: {
        fontSize: 18,
      },
    });
    return () => {
      setImage(null);
      setServiceName(null);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          {/* <Text style={styles.text}>{serviceName}</Text> */}
          <View style={styles.imageWrap}>
            <Image
              source={{ uri: image }}
              style={styles.cardItemImagePlace}
            ></Image>
          </View>
          <View style={styles.infoCard}>
            <View style={styles.inputBlock}>
              <Icon name="account" style={styles.iconStyle}></Icon>
              <Text>Customer Name : </Text>
              <TextInput
                value={name ? name : "Guest"}
                onChangeText={(text) => setName(text)}
                style={styles.inputStyle}
              />
            </View>
            <View style={styles.inputBlock}>
              <Icon name="cellphone-basic" style={styles.iconStyle}></Icon>
              <Text>Phone Number : </Text>
              <TextInput
                style={styles.inputStyle}
                value={phoneNumber.toString()}
                autoCompleteType="tel"
                keyboardType="phone-pad"
                textContentType="telephoneNumber"
                onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
              />
            </View>
            <View style={styles.inputBlock}>
              <Icon name="map-marker" style={styles.iconStyle}></Icon>
              <Text>Address : </Text>
              <TextInput
                value={address ? address : ""}
                placeholder={"123 Ave, Deira, Dubai"}
                onChangeText={(text) => setAddress(text)}
                style={styles.inputStyle}
              />
            </View>
            <View style={styles.inputBlock}>
              <Icon name="cog-outline" style={styles.iconStyle}></Icon>

              <Text> Service Name : </Text>
              <Text style={styles.labels}>{serviceName}</Text>
            </View>
            <View style={styles.inputBlock}>
              <Icon
                name="circle-multiple-outline"
                style={styles.iconStyle}
              ></Icon>

              <Text> Service Charge : </Text>
              <Text style={styles.labels}>AED {serviceCharge}</Text>
            </View>

            <SiteButton
              style={styles.matButton}
              onPress={() => {
                bookingRef
                  .set({
                    refId: currentDate,
                    serviceName: serviceName,
                    serviceCharge: serviceCharge,
                    image: image,
                  })
                  .then(function() {
                    console.log("Update success");
                  })
                  .catch(function(error) {
                    console.log("An error " + error + " happened");
                  });
              }}
              buttonText={"Confirm Booking"}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Booking;
