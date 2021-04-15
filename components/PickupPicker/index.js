import React, { useEffect, useState } from "react";
import {
  TextInput,
  View,
  Image,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";

import * as Location from "expo-location";

import Toast from "react-native-toast-message";

import SiteButton from "../SiteButton";
import styles from "./styles";

const PickupPicker = (props) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [locationPicked, setLocationPicked] = useState(false);

  const timeSlotArrays = [
    "9-10 AM",
    "10-11 AM",
    "11-12 AM",
    "12-1 PM",
    "2-3 PM",
    "3-4 PM",
    "4-5 PM",
    "5-6 PM",
  ];
  const locateCustomer = () => {
    props
      ?.getLocationAsync()
      .then(async (data) => {
        const cords = {
          latitude: data.coords.latitude,
          longitude: data.coords.longitude,
        };
        props?.setCoordsDetected(cords);
        const place = await Location.reverseGeocodeAsync(cords);

        place.find((p) => {
          props?.setCity(
            `${p.street ? p.street + ", " : ""} ${
              p.district ? p.district + ", " : ""
            } ${
              p.city
                ? p.city
                : setErrorMsg("Unavailable. Please turn on location services")
            }`
          );
        });
      })
      .then(() => {
        setLocationPicked(true);
      });
  };
  if (errorMsg) {
    props?.setCity(errorMsg);
  }

  return (
    <View style={styles.contentContainer}>
      <View style={styles.contentWrapper}>
        <View style={styles.inputBlock}>
          <Text style={styles.badge}>{"Pick and Drop"}</Text>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/images/pickup.png")}
            resizeMode="contain"
            style={styles.image1}
          />
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.inputBlock}>
            <TouchableOpacity
              style={styles.locateButton}
              onPress={locateCustomer}
            >
              <Text style={styles.locateButtonText}>Locate</Text>
            </TouchableOpacity>
            <Text style={styles.label}>{props?.city}</Text>
          </View>
        </View>

        {locationPicked && (
          <View style={styles.slotsBlock}>
            <Text style={styles.slotText}>Pick a time slot:</Text>
            {timeSlotArrays.map((slot, i) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.slot,
                    {
                      backgroundColor:
                        props?.selectedSlot == slot ? "#ff2800" : null,
                      borderColor:
                        props?.selectedSlot == slot ? "#ff2800" : "#000000",
                    },
                  ]}
                  onPress={() => {
                    props?.setSelectedSlot(slot);
                  }}
                  key={slot + i}
                >
                  <Text
                    style={[
                      styles.slotText,
                      {
                        color:
                          props?.selectedSlot == slot ? "#ffffff" : "#000000",
                      },
                    ]}
                  >
                    {slot}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        {locationPicked && props?.selectedSlot && (
          <SiteButton
            onPress={props?.toggleModal}
            buttonText={"CONFIRM"}
            style={styles.matButton}
          />
        )}

        <TouchableOpacity
          style={styles.hideButton}
          onPress={props?.closeButtonOnModal}
        >
          <Text style={styles.closeIcon}>CLOSE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PickupPicker;
