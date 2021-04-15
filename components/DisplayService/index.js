import React, { useState, useEffect } from "react";
import { Image, View, ScrollView, Text, Pressable } from "react-native";

import styles from "./styles";

import SiteButton from "../SiteButton";
import theme from "../../appStyles";
import firebase from "../../firebase";
import "firebase/auth";

const DisplayService = (props) => {
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
  const [serviceName, setServiceName] = useState(null);
  const [user, setUser] = useState(null);
  const [includedServices, setIncludedServices] = useState(
    props?.includedServices
  );
  const [serviceCharge, setServiceCharge] = useState(0);
  //Pricing States
  const [mrp, setMrp] = useState(0);
  const [discount, setDiscount] = useState(null);
  const [salesPrice, setSalesPrice] = useState(null);

  useEffect(() => {
    setUser(firebase.auth().currentUser);
    setDescription(props?.description);
    setServiceName(props?.serviceName);
    setImage(props?.image);

    //Pricing
    setSalesPrice(props?.salesPrice);
    setMrp(props?.mrp);
    setDiscount(props?.discount);

    return () => {
      setDescription(null);
      setImage(null);
      setServiceName(null);
      setServiceCharge(0);
    };
  }, [serviceName, user]);
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <View style={styles.inputBlock}>
          <Text style={styles.badge}>{serviceName}</Text>
        </View>
        <View style={styles.imageWrap}>
          <Image
            source={{ uri: image }}
            style={styles.cardItemImagePlace}
          ></Image>
        </View>
        <Text style={styles.descriptionPara}>{description}</Text>
        <View style={styles.infoCard}>
          <Text style={styles.priceListingTitle}>Pricing</Text>
        </View>
        <View style={styles.infoCard}>
          {!includedServices ? (
            discount > 0 ? (
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
              <View style={styles.pricingSection}>
                <Text style={styles.priceListing}>Service Cost : </Text>
                <Text style={styles.priceListing}>AED {salesPrice}</Text>
              </View>
            )
          ) : (
            <View style={styles.pricingSection}>
              <Text style={styles.priceListing}>Service Cost : </Text>
              <Text style={styles.priceListing}>AED {salesPrice}</Text>
            </View>
          )}

          {includedServices ? (
            <View style={styles.infoCard}>
              <Text style={styles.includedServicesTitle}>
                Included Services
              </Text>
            </View>
          ) : null}
          {includedServices
            ? includedServices.map((service, i) => {
                return (
                  <View key={service?.itemCode}>
                    <Text style={styles.includedServices}>
                      {service.itemName}
                    </Text>
                  </View>
                );
              })
            : null}

          {serviceName === "Major Service" ||
          serviceName === "Minor Service" ? (
            <Text>
              * Cost of Parts will be paid by customer in Major and Minor
              Service, inlcuding Labor
            </Text>
          ) : null}
          <SiteButton
            onPress={() => {
              props?.closeModal();
              props?.navigation.navigate("Booking", {
                serviceName: serviceName,
                image: image,
                serviceCharge: salesPrice,
              });
            }}
            style={styles.matButton}
            buttonText={"Book Now"}
          />
        </View>

        <Pressable style={styles.hideButton} onPress={props?.closeModal}>
          <Text style={styles.closeIcon}>CLOSE</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DisplayService;
