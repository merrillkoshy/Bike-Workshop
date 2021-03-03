import React, { Component } from "react";
import { Image, View, ScrollView, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ServiceList from "../../components/ServiceList";
import Header from "../../components/Header";
import MenuButton from "../../components/MenuButton";
import styles from "./styles";
import headerOptions from "../../components/Header";
import data from "../../components/FireJSON.json";

const Stack = createStackNavigator();

function Services(props) {
  function stackComponent() {
    return (
      <View style={styles.container}>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            {data.services.map((str, i) => {
              return (
                <ServiceList
                  style={styles.materialCardWithoutImage}
                  key={str + i}
                  string={str}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={headerOptions(props)}
        name="Services"
        component={stackComponent}
      />
    </Stack.Navigator>
  );
}

export default Services;
