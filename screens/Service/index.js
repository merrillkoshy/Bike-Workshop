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
import theme from "../../appStyles";
import firebase from "../../components/firebase";
import "firebase/auth";

import Toast from "react-native-toast-message";

const Stack = createStackNavigator();

function Service(props) {
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
  const [serviceName, setServiceName] = useState("");
  const [user, setUser] = useState(null);
  const [includedServices, setIncludedServices] = useState(null);
  const [serviceCharge, setServiceCharge] = useState(0);
  //Pricing States
  const [mrp, setMrp] = useState(0);
  const [discount, setDiscount] = useState(null);
  const [salesPrice, setSalesPrice] = useState(0);

  useEffect(() => {
    setUser(firebase.auth().currentUser);
    setDescription(props.route.params.serviceDescription);
    setImage(props.route.params.image);
    setServiceName(props.route.params.serviceName);
    setIncludedServices(props.route.params?.includedServices);
    setServiceCharge(props.route.params.salesPrice);

    //Pricing
    setMrp(props.route.params.mrp);
    setDiscount(props.route.params.discount);
    setSalesPrice(props.route.params.salesPrice);
    //Bounces
    if (props.route.params.currentUser) {
      setUser(props.route.params.currentUser);
    }
    props.navigation.setOptions({
      title: serviceName === "" ? "No title" : serviceName,
      headerTitleStyle: {
        fontSize: 18,
        textTransform: "capitalize",
        marginLeft: 20,
      },
      headerStyle: {
        backgroundColor: theme.HASNAIN_GREY,
      },
      headerTintColor: theme.TEXT_DARK,
    });
    return () => {
      setDescription(null);
      setImage(null);
      setServiceName(null);
      setServiceCharge(0);
    };
  }, [props.navigation, serviceName, user]);
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
            <Text style={styles.title}>Pricing</Text>
          </View>
          <View style={styles.infoCard}>
            {discount && discount > 0 ? (
              <>
                <View style={styles.pricingSection}>
                  <Text style={styles.priceListing}>Service Cost : </Text>
                  <Text style={styles.mrpStrikethrough}>AED {mrp}</Text>

                  <Text style={styles.priceListing}>AED {salesPrice}</Text>
                </View>
                <View style={styles.pricingSection}>
                  <Text style={styles.badge}>Discount</Text>
                  <Text style={styles.priceListing}>
                    {(discount / mrp) * 100}% off
                  </Text>
                </View>
              </>
            ) : (
              discount && (
                <View style={styles.pricingSection}>
                  <Text style={styles.priceListing}>Service Cost : </Text>
                  <Text style={styles.priceListing}>AED {salesPrice}</Text>
                </View>
              )
            )}
            {includedServices &&
              includedServices.map((service, i) => {
                return (
                  <View key={service?.itemCode}>
                    <Text style={styles.priceListing}>{service.itemName}</Text>
                    {service.discount > 0 ? (
                      <>
                        <View style={styles.pricingSection}>
                          <Text style={styles.priceListing}>
                            Service Cost :{" "}
                          </Text>
                          <Text style={styles.mrpStrikethrough}>
                            AED {service?.mrp}
                          </Text>

                          <Text style={styles.priceListing}>
                            AED {service?.salesPrice}
                          </Text>
                        </View>
                        <View style={styles.pricingSection}>
                          <Text style={styles.badge}>Discount</Text>
                          <Text style={styles.priceListing}>
                            {(service?.discount / service?.mrp) * 100}% off
                          </Text>
                        </View>
                      </>
                    ) : (
                      <View style={styles.pricingSection}>
                        <Text style={styles.priceListing}>Service Cost : </Text>
                        <Text style={styles.priceListing}>
                          AED {service?.salesPrice}
                        </Text>
                      </View>
                    )}
                  </View>
                );
              })}
            {description &&
              description.map((des, i) => {
                return (
                  <Text key={i} style={styles.descriptionPara}>
                    {des}
                  </Text>
                );
              })}

            {(serviceName === "Major Service" ||
              serviceName === "Minor Service") && (
              <Text>
                * Cost of Parts will be paid by customer in Major and Minor
                Service, inlcuding Labor
              </Text>
            )}
            <SiteButton
              onPress={() =>
                user
                  ? props.navigation.navigate("Booking", {
                      serviceName: serviceName,
                      image: image,
                      serviceCharge: serviceCharge,
                    })
                  : Promise.resolve(
                      Toast.show({
                        text1: "Please login to make a booking!",
                        text2: "Taking you there",
                      })
                    ).then(() => {
                      props.navigation.navigate("LoginStack", {
                        screen: "Login",
                        params: {
                          condition: "bookingBounce",
                        },
                      });
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
