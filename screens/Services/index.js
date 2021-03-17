import React, { Component, useEffect, useState } from "react";
import { Image, View, ScrollView, Text, TouchableOpacity } from "react-native";

import ServiceList from "../../components/ServiceList";

import styles from "./styles";
import headerOptions from "../../components/Header";
import data from "../../components/FireJSON.json";
import firebase from "../../components/firebase";

function Services(props) {
  var servicesRef = firebase.database().ref("/services");
  const [services, setServices] = useState([]);
  const servicesList = () => {
    var serviceList = [];

    servicesRef
      .once("value", (snapshot) => {
        snapshot.forEach((snap) => {
          const svObject = snap.val();
          if (svObject.published) {
            serviceList.push(svObject);
          }
        });
      })
      .then(() => {
        setServices(serviceList);
      });
  };
  useEffect(() => {
    servicesList();
    return () => {
      //
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.carding}>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            {services &&
              services.map((str, i) => {
                return (
                  <TouchableOpacity
                    key={str?.itemCode}
                    onPress={() =>
                      props.navigation.navigate("Service", {
                        serviceName: str?.itemName,
                        serviceDescription: str?.description,
                        image:
                          "https://firebasestorage.googleapis.com/v0/b/bike-workshop-e2f5d.appspot.com/o/MOT.jpg?alt=media&token=8ef2696d-09c7-4296-812b-2ecdda4d8d5f",
                        mrp: str?.mrp,
                        discount: str?.discount,
                        salesPrice: str?.salesPrice,
                      })
                    }
                  >
                    <ServiceList
                      style={styles.infoCard}
                      string={str.itemName}
                    />
                  </TouchableOpacity>
                );
              })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export default Services;
