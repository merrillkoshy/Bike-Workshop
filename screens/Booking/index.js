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
import { buildBookingNotif, sendNotif } from "../../lib/NotificationsHandler";

//Pickup Picker
import Modal from "react-native-modal";
import PickupPicker from "../../components/PickupPicker";

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
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [coordsDetected, setCoordsDetected] = useState(null);
  const [city, setCity] = useState("Waiting for location...");

  //Address bar text input to start at start of text on focus
  //switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    if (city == "Waiting for location..." && !selectedSlot) {
      setModalVisible(true);
    }
    setIsEnabled((previousState) => !previousState);
  };

  const closeButtonOnModal = () => {
    setIsEnabled(false);
    setModalVisible(false);
    setSelectedSlot(null);
    setCity("Waiting for location...");
  };
  //pickup picker
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
      setAddress(data?.address);
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
        fontFamily: "Ubuntu-B",
      },
      headerStyle: {
        backgroundColor: theme.HASNAIN_GREY,
      },
      headerTintColor: theme.TEXT_DARK,
    });
    return () => {
      setImage(null);
      setServiceName(null);
      setSelectedSlot(null);
      setCity("Waiting for location...");
      setIsEnabled(false);
    };
  }, [serviceName]);

  const processInputs = () => {
    if (isEnabled) {
      firebase
        .database()
        .ref(`/${user?.uid}`)
        .update({
          lastModified: Date.now(),
        });
      bookingRef
        .update({
          refId: currentDate,
          vehicleName: vehicleName,
          serviceName: serviceName,
          serviceCharge: serviceCharge,
          address: `${address}, ${city}`,
          image: image,
          pickAndDrop: isEnabled,
          coordsDetected: coordsDetected,
          timeSlot: selectedSlot,
          bookingStatus: "open",
        })
        .then(function() {
          const notification = buildBookingNotif({
            refId: currentDate,
            serviceName: serviceName,
          });
          sendNotif(notification);
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
    } else {
      firebase
        .database()
        .ref(`/${user?.uid}`)
        .update({
          lastModified: Date.now(),
        });
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
          const notification = buildBookingNotif({
            refId: currentDate,
            serviceName: serviceName,
          });
          sendNotif(notification);
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
    }
  };
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
              <Text style={styles.label}>Customer Name : </Text>
              <TextInput
                value={name ? name : "Guest"}
                onChangeText={(text) => setName(text)}
                style={styles.inputStyle}
              />
            </View>
            <View style={styles.inputBlock}>
              <Icon name="cellphone-basic" style={styles.iconStyle}></Icon>
              <Text style={styles.label}>Phone Number : </Text>
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
              <Text style={styles.label}>Address : </Text>
              <TextInput
                value={
                  city != "Waiting for location..."
                    ? `${address}, ${city}`
                    : address
                }
                placeholder={"123 Ave, Deira, Dubai"}
                onChangeText={(text) => setAddress(text)}
                style={styles.inputStyle}
              />
            </View>

            <View style={styles.inputBlock}>
              <Icon
                name="truck-delivery-outline"
                style={styles.iconStyle}
              ></Icon>
              <Text style={styles.label}> Pick and Drop? : </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#4dd163" }}
                thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <Modal
              style={styles.modalContainer}
              animationIn={"rubberBand"}
              animationOut={"slideOutDown"}
              isVisible={isModalVisible}
              animationInTiming={500}
              animationOutTiming={500}
              transparent={true}
            >
              <View style={styles.modalContent}>
                <PickupPicker
                  getLocationAsync={getLocationAsync}
                  setCity={setCity}
                  setCoordsDetected={setCoordsDetected}
                  city={city}
                  toggleModal={toggleModal}
                  selectedSlot={selectedSlot}
                  setSelectedSlot={setSelectedSlot}
                  closeButtonOnModal={closeButtonOnModal}
                />
              </View>
            </Modal>

            {isEnabled ? (
              city && selectedSlot ? (
                <View style={styles.pickupContainer}>
                  <View style={styles.inputBlock}>
                    <Icon
                      name="map-marker-radius"
                      style={styles.iconStyle}
                    ></Icon>
                    <Text style={styles.label}>Location:</Text>
                    <Text style={styles.labels}> {city}</Text>
                  </View>
                  <View style={styles.inputBlock}>
                    <Icon name="timeline-clock" style={styles.iconStyle}></Icon>
                    <Text style={styles.label}>Time Slot:</Text>
                    <Text style={styles.label}> {selectedSlot}</Text>
                  </View>
                </View>
              ) : null
            ) : null}
            <View style={styles.inputBlock}>
              <Icon name="motorbike" style={styles.iconStyle}></Icon>

              <Text style={styles.label}> Vehicle Name : </Text>
              <TextInput
                onChangeText={(text) => setVehicleName(text)}
                style={styles.inputStyle}
              />
            </View>
            <View style={styles.inputBlock}>
              <Icon name="cog-outline" style={styles.iconStyle}></Icon>

              <Text style={styles.label}> Service Name : </Text>
              <Text style={styles.serviceName}>{serviceName}</Text>
            </View>
            <View style={styles.inputBlock}>
              <Icon
                name="circle-multiple-outline"
                style={styles.iconStyle}
              ></Icon>
              {isEnabled ? (
                <>
                  <Text style={styles.label}> Service Charge : </Text>
                  <Text style={styles.labels}>
                    AED {serviceCharge}* + Pick and Drop Charges
                  </Text>
                </>
              ) : (
                <>
                  <Text style={styles.label}> Service Charge : </Text>
                  <Text style={styles.labels}>AED {serviceCharge}*</Text>
                </>
              )}
            </View>

            <SiteButton
              style={styles.matButton}
              onPress={() => {
                if (phoneNumber) processInputs();
                else {
                  Toast.show({
                    text1: "Please enter Phone Number",
                    text2: "Help us keep updated with you!",
                    type: "error",
                  });
                }
              }}
              buttonText={"Confirm Booking"}
            />
          </View>
          <View style={styles.finePrint}>
            <Text style={styles.label}>
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
