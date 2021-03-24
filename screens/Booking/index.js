import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
} from "react-native";
import Toast from "react-native-toast-message";
import styles from "./styles";
import firebase from "../../firebase";
import "firebase/auth";
import "firebase/database";
import SiteButton from "../../components/SiteButton";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

//import theme
import theme from "../../appStyles";
//Import moment for date and time
import moment from "moment";

//Location
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

function Booking(props) {
  //user
  const [name, setName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [address, setAddress] = useState(null);
  //workshop
  const [image, setImage] = useState(null);
  const [serviceName, setServiceName] = useState(null);
  const [serviceCharge, setServiceCharge] = useState(0);
  const [bookingRef, setBookingRef] = useState(null);
  const [vehicleName, setVehicleName] = useState(null);
  //Get date with moment.js
  const [currentDate, setCurrentDate] = useState("");
  //location Props
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [city, setCity] = useState("Waiting for location...");
  //switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  var user = firebase.auth().currentUser;
  const db = firebase.database().ref("users/" + user?.uid);

  //location getter function
  async function getLocationAsync() {
    // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
    const { status, permissions } = await Permissions.askAsync(
      Permissions.LOCATION
    );
    if (status === "granted") {
      return Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
      });
    } else {
      throw new Error("Location permission not granted");
    }
  }

  useEffect(() => {
    db.on("value", (snapshot) => {
      const data = snapshot.val();
      setPhoneNumber(data?.phoneNumber);
    });
    var date = moment()
      .utcOffset("+4")
      .format("M-D-YYhhmmss");
    setCurrentDate(date);
    setBookingRef(
      firebase.database().ref("users/" + user?.uid + "/bookings/" + date)
    );
    setName(user?.displayName);
    setImage(props.route.params.image);
    setServiceName(props.route.params.serviceName);
    setServiceCharge(props.route.params.serviceCharge);
    //header Styling
    props.navigation.setOptions({
      title: serviceName === "" ? "No title" : `Booking ${serviceName}`,
      headerTitleStyle: {
        fontSize: 18,
      },
      headerStyle: {
        backgroundColor: theme.HASNAIN_GREY,
      },
      headerTintColor: theme.TEXT_DARK,
    });
    return () => {
      setImage(null);
      setServiceName(null);
    };
  }, [serviceName]);

  const locateCustomer = () => {
    getLocationAsync().then(async (data) => {
      const place = await Location.reverseGeocodeAsync({
        latitude: data.coords.latitude,
        longitude: data.coords.longitude,
      });

      place.find((p) => {
        setCity(
          `${p.street ? p.street + ", " : ""} ${
            p.district ? p.district + ", " : ""
          } ${
            p.city
              ? p.city
              : setErrorMsg("Unavailable. Please turn on location services")
          }`
        );
      });
    });
  };
  if (errorMsg) {
    setCity(errorMsg);
  }
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
                value={phoneNumber?.toString()}
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
                value={
                  city
                    ? () => {
                        setAddress(city);
                        return city;
                      }
                    : address
                    ? address
                    : ""
                }
                placeholder={"123 Ave, Deira, Dubai"}
                onChangeText={(text) => setAddress(text)}
                style={styles.inputStyle}
              />
            </View>

            <View style={styles.inputBlock}>
              <Text> Pick and Drop? : </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#4dd163" }}
                thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            {isEnabled
              ? city && (
                  <View style={styles.inputBlock}>
                    <TouchableOpacity
                      style={styles.locateButton}
                      onPress={locateCustomer}
                    >
                      <Text style={styles.locateButtonText}>Locate</Text>
                    </TouchableOpacity>
                    <Text>{city}</Text>
                  </View>
                )
              : null}
            <View style={styles.inputBlock}>
              <Icon name="motorbike" style={styles.iconStyle}></Icon>

              <Text> Vehicle Name : </Text>
              <TextInput
                onChangeText={(text) => setVehicleName(text)}
                style={styles.inputStyle}
              />
            </View>
            <View style={styles.inputBlock}>
              <Icon name="cog-outline" style={styles.iconStyle}></Icon>

              <Text> Service Name : </Text>
              <Text style={styles.serviceName}>{serviceName}</Text>
            </View>
            <View style={styles.inputBlock}>
              <Icon
                name="circle-multiple-outline"
                style={styles.iconStyle}
              ></Icon>
              {isEnabled ? (
                <>
                  <Text> Service Charge : </Text>
                  <Text style={styles.labels}>
                    AED {serviceCharge}* + Pick and Drop Charges
                  </Text>
                </>
              ) : (
                <>
                  <Text> Service Charge : </Text>
                  <Text style={styles.labels}>AED {serviceCharge}*</Text>
                </>
              )}
            </View>

            <SiteButton
              style={styles.matButton}
              onPress={() => {
                bookingRef
                  .update({
                    refId: currentDate,
                    vehicleName: vehicleName,
                    serviceName: serviceName,
                    serviceCharge: serviceCharge,
                    address: address,
                    image: image,
                    pickAndDrop: isEnabled,
                    bookingStatus: "open",
                  })
                  .then(function() {
                    Toast.show({
                      text1: "Success",
                      text2: "Booking made! 👋",
                    });
                  })
                  .then(function() {
                    props.navigation.navigate("Home");
                  })
                  .catch(function(error) {
                    console.log("An error " + error + " happened");
                  });
              }}
              buttonText={"Confirm Booking"}
            />
          </View>
          <View style={styles.finePrint}>
            <Text>
              {" "}
              * Exclusive of Labor Charge and VAT. All parts are paid by
              customer, charged seperately.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Booking;
