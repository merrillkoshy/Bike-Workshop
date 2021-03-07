import React, { useState, useEffect } from "react";
import { Image, View, ScrollView, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ServiceList from "../../components/ServiceList";
import Header from "../../components/Header";
import MenuButton from "../../components/MenuButton";
import styles from "./styles";
import headerOptions from "../../components/Header";
import data from "../../components/FireJSON.json";
import SiteButton from "../../components/SiteButton";

const Stack = createStackNavigator();

function Service(props) {
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
  const [serviceName, setServiceName] = useState(null);

  useEffect(() => {
    setDescription(props.route.params.serviceDescription);
    setImage(props.route.params.image);
    setServiceName(props.route.params.serviceName);
    props.navigation.setOptions({
      title: serviceName === "" ? "No title" : serviceName,
      headerTitleStyle: {
        fontSize: 18,
      },
    });
    return () => {
      setDescription(null);
      setImage(null);
      setServiceName(null);
    };
  }, [props.navigation, serviceName]);
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
            <Text style={styles.descriptionPara}>{description}</Text>
            <SiteButton
              onPress={() =>
                props.navigation.navigate("Booking", {
                  serviceName: serviceName,
                  image: image,
                  serviceCharge: props.route.params.serviceCharge,
                })
              }
              style={styles.matButton}
              buttonText={"Book Now"}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Service;
