import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import firebase from "../../firebase";
import styles from "./styles";
import Shimmer from "../Shimmer";
const MainServices = (props) => {
  const [mainServices, setMainServices] = useState(null);

  var dbRef = firebase.database().ref("mainServices/");
  const servicesList = () => {
    var serviceList = [];

    dbRef
      .once("value", (snapshot) => {
        snapshot.forEach((snap) => {
          const svObject = snap.val();
          serviceList.push(svObject);
        });
      })
      .then(() => {
        setMainServices(serviceList);
      });
  };

  useEffect(() => {
    servicesList();
    return () => {
      //
    };
  }, []);
  return (
    <View style={[styles.container, props.style]}>
      {mainServices &&
        mainServices.map((service, i) => {
          return (
            <TouchableOpacity
              key={service?.serviceName}
              style={styles.serviceCards}
              onPress={() =>
                props.navigation.navigate("ServicesStack", {
                  screen: "Service",
                  params: {
                    serviceName: service?.serviceName,
                    image: service?.image,
                    includedServices: service?.services,
                    salesPrice: service?.salesPrice,
                  },
                })
              }
            >
              {service?.image && (
                <Image
                  source={{
                    uri: service?.image,
                  }}
                  resizeMode={"cover"}
                  style={styles.cardItemImagePlace}
                ></Image>
              )}

              <View style={styles.cardBody}>
                <View style={styles.bodyContent}>
                  <Text style={styles.titleStyle}>{service?.serviceName}</Text>
                  {/* <Text style={styles.subtitleStyle}>{"Lorem Ipsum"}</Text> */}
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      {!mainServices && (
        <>
          <Shimmer
            width={styles.serviceCards.width}
            marginTop={styles.serviceCards.marginTop}
            marginBottom={styles.serviceCards.marginBottom}
            height={150}
          />
          <Shimmer width={styles.serviceCards.width} height={150} />
          <Shimmer width={styles.serviceCards.width} height={150} />
        </>
      )}
    </View>
  );
};

export default MainServices;
