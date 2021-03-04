import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import MapView, { Marker } from "react-native-maps";

import * as Location from "expo-location";
import getDistance from "geolib/es/getDistance";

import MaterialUnderlineTextbox from "../../components/MaterialUnderlineTextbox";
import MaterialButtonPink1 from "../../components/MaterialButtonPink1";
import styles from "./styles";
import headerOptions from "../../components/Header";
import SiteButton from "../../components/SiteButton";

const Stack = createStackNavigator();

function PickAndDrop(props) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [city, setCity] = useState("Waiting for location...");
  const [region, setRegion] = useState({
    latitude: 25.123906472392758,
    longitude: 55.2128985306865,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });
  const [distance, setDistance] = useState(0);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      } else if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        setDistance(
          getDistance(
            {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude
            },
            {
              latitude: 25.123906472392758,
              longitude: 55.2128985306865
            }
          )
        );
        const place = await Location.reverseGeocodeAsync({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        });
        place.find(p => {
          setCity(
            `${p.street ? p.street + ", " : ""} ${
              p.district ? p.district + ", " : ""
            } ${
              p.city ? p.city : "Unavailable. Please turn on location services"
            }`
          );
        });
      }
    })();
  }, []);

  if (errorMsg) {
    setCity(errorMsg);
  }

  function stackComponent() {
    return (
      <View style={styles.container}>
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          initialRegion={region}
          // region={region}
          // onRegionChangeComplete={region => setRegion(region)}
          customMapStyle={[]}
          style={styles.mapView}
        >
          <Marker
            coordinate={{
              latitude: location
                ? location.coords.latitude
                : 25.123906472392758,
              longitude: location ? location.coords.longitude : 55.2128985306865
            }}
            pinColor="#FF2800"
          />
          {/* <MapViewDirections
            origin={{
              latitude: location
                ? location.coords.latitude
                : 25.123906472392758,
              longitude: location ? location.coords.longitude : 55.2128985306865
            }}
            destination={region}
            apikey={process.env.DIRECTIONS_API}
          /> */}
        </MapView>
        <View style={styles.actionContainer}>
          <View style={styles.locationRow}>
            <Text style={styles.location}>Location</Text>
            <MaterialUnderlineTextbox
              style={styles.materialUnderlineTextbox}
              string={city}
            ></MaterialUnderlineTextbox>
          </View>
          <View style={styles.locationRow}>
            <Text style={styles.loremIpsum}>
              Transportation Charges: ({(distance * 0.001).toFixed(1)} km)
            </Text>
            <MaterialUnderlineTextbox
              string={`${(distance * 0.001 * 3.5).toFixed(0)} AED`}
              style={styles.materialUnderlineTextbox1}
            ></MaterialUnderlineTextbox>
          </View>
          <SiteButton
            buttonText={"CONFIRM"}
            style={styles.materialButtonPink1}
          />
        </View>
      </View>
    );
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={headerOptions(props)}
        name="Pick and Drop"
        component={stackComponent}
      />
    </Stack.Navigator>
  );
}

export default PickAndDrop;
