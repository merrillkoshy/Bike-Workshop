import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import MapView, { Marker } from "react-native-maps";
import Iframe from "react-iframe";

import getDistance from "geolib/es/getDistance";

import MaterialUnderlineTextbox from "../../components/MaterialUnderlineTextbox";
import theme from "../../appStyles";
import styles from "./styles";
import headerOptions from "../../components/Header";
import SiteButton from "../../components/SiteButton";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

const Stack = createStackNavigator();

function PickAndDrop(props) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [city, setCity] = useState("Waiting for location...");
  // const [region, setRegion] = useState({
  //   latitude: 25.123906472392758,
  //   longitude: 55.2128985306865,
  //   latitudeDelta: 0.0922,
  //   longitudeDelta: 0.0421,
  // });
  const [distance, setDistance] = useState(0);

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
    getLocationAsync().then(async (data) => {
      setLocation({
        latitude: data.coords.latitude,
        longitude: data.coords.longitude,
      });
      setDistance(
        getDistance(
          {
            latitude: data.coords.latitude,
            longitude: data.coords.longitude,
          },
          {
            latitude: 25.123906472392758,
            longitude: 55.2128985306865,
          }
        )
      );
      const place = await Location.reverseGeocodeAsync({
        latitude: data.coords.latitude,
        longitude: data.coords.longitude,
      });

      place.find((p) => {
        setCity(
          `${p.street ? p.street + ", " : ""} ${
            p.district ? p.district + ", " : ""
          } ${
            p.city ? p.city : "Unavailable. Please turn on location services"
          }`
        );
      });
    });

    //   // (async () => {
    //   //   let { status } = await Location.requestPermissionsAsync();
    //   //   if (status !== "granted") {
    //   //     setErrorMsg("Permission to access location was denied");
    //   //     return;
    //   //   } else if (status === "granted") {
    //   //     let location = await Location.getCurrentPositionAsync({});
    //   //     setLocation(location);
    //   //     setDistance(
    //   //       getDistance(
    //   //         {
    //   //           latitude: location.coords.latitude,
    //   //           longitude: location.coords.longitude
    //   //         },
    //   //         {
    //   //           latitude: 25.123906472392758,
    //   //           longitude: 55.2128985306865
    //   //         }
    //   //       )
    //   //     );
    //   //     const place = await Location.reverseGeocodeAsync({
    //   //       latitude: location.coords.latitude,
    //   //       longitude: location.coords.longitude
    //   //     });
    //   //     place.find(p => {
    //   //       setCity(
    //   //         `${p.street ? p.street + ", " : ""} ${
    //   //           p.district ? p.district + ", " : ""
    //   //         } ${
    //   //           p.city ? p.city : "Unavailable. Please turn on location services"
    //   //         }`
    //   //       );
    //   //     });
    //   //   }
    //   // })();
  }, []);

  if (errorMsg) {
    setCity(errorMsg);
  }

  // function stackComponent() {
  //   return (
  //     <View style={styles.container}>
  //       <MapView
  //         provider={MapView.PROVIDER_GOOGLE}
  //         initialRegion={region}
  //         // region={region}
  //         // onRegionChangeComplete={region => setRegion(region)}
  //         customMapStyle={[]}
  //         style={styles.mapView}
  //       >
  //         <Marker
  //           coordinate={{
  //             latitude: location
  //               ? location.coords.latitude
  //               : 25.123906472392758,
  //             longitude: location
  //               ? location.coords.longitude
  //               : 55.2128985306865,
  //           }}
  //           pinColor={theme?.PRIMARY_COLOR}
  //         />
  //         {/* <MapViewDirections
  //           origin={{
  //             latitude: location
  //               ? location.coords.latitude
  //               : 25.123906472392758,
  //             longitude: location ? location.coords.longitude : 55.2128985306865
  //           }}
  //           destination={region}
  //           apikey={process.env.DIRECTIONS_API}
  //         /> */}
  //       </MapView>
  //       <View style={styles.actionContainer}>
  //         <View style={styles.locationRow}>
  //           <Text style={styles.location}>Location</Text>
  //           <MaterialUnderlineTextbox
  //             style={styles.materialUnderlineTextbox}
  //             string={city}
  //           ></MaterialUnderlineTextbox>
  //         </View>
  //         <View style={styles.locationRow}>
  //           <Text style={styles.loremIpsum}>
  //             Transportation Charges: ({(distance * 0.001).toFixed(1)} km)
  //           </Text>
  //           <MaterialUnderlineTextbox
  //             string={`${(distance * 0.001 * 3.5).toFixed(0)} AED`}
  //             style={styles.materialUnderlineTextbox1}
  //           ></MaterialUnderlineTextbox>
  //         </View>
  //         <SiteButton
  //           buttonText={"CONFIRM"}
  //           style={styles.materialButtonPink1}
  //         />
  //       </View>
  //     </View>
  //   );
  // }

  const stackComponent = () => {
    const orig = {
      lat: 25.123906472392758,
      lon: 55.2128985306865,
    };
    const dest = {
      lat: 25.15047,
      lon: 55.40025,
    };
    return (
      <View style={styles.container}>
        {/* <Iframe
          url={`https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d231324.34342645542!2d55.167751482648015!3d25.052974602016356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d${
            location ? location.latitude : dest.lat
          }!2d${
            location ? location.longitude : dest.lon
          }!4m5!1s0x3e5f6badb118c39b%3A0x336945afb0bcf7e5!2sPOWERSHIFT%20MOTORSPORTS%2C%20Al%20QuozAl%20-%208%20Street%20-%20Dubai!3m2!1d25.1239259!2d55.2128127!5e0!3m2!1sen!2sae!4v1615281471275!5m2!1sen!2sae`}
          width="450px"
          height="450px"
          loading="lazy"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        /> */}

        {/* <MapView
          provider={MapView.PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 25.123906472392758,
            longitude: 55.2128985306865,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={[]}
          style={styles.mapView}
        ></MapView> */}
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
  };
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
