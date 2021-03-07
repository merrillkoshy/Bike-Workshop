import React, { Component } from "react";
import { Image, View, ScrollView, Text, TouchableOpacity } from "react-native";

import ServiceList from "../../components/ServiceList";

import styles from "./styles";
import headerOptions from "../../components/Header";
import data from "../../components/FireJSON.json";

function Services(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          {data.services.map((str, i) => {
            return (
              <TouchableOpacity
                key={str.name + i}
                onPress={() =>
                  props.navigation.navigate("Service", {
                    serviceName: str.name,
                    serviceDescription: str.description,
                    image: str.image,
                    serviceCharge: str.serviceCharge,
                  })
                }
              >
                <ServiceList style={styles.infoCard} string={str.name} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

export default Services;
