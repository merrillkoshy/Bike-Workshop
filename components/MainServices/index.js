import React, { useEffect, useState } from "react";
import { View, Image, Pressable } from "react-native";
import { Card, List, Text } from "@ui-kitten/components";
import DisplayService from "../DisplayService";
import Modal from "react-native-modal";

import theme from "../../appStyles";
import styles from "./styles";
import Shimmer from "../Shimmer";

const MainServices = (props) => {
  const [mainServices, setMainServices] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalAble, setModalAble] = useState(null);

  useEffect(() => {
    setMainServices(props?.mainServices);
    return () => {
      //
    };
  }, []);

  const renderItemFooter = (footerProps, service) => (
    <Text style={styles.titleStyle}>{service?.serviceName}</Text>
  );

  const renderItem = ({ item, index }) => (
    <>
      <Pressable
        style={styles.item}
        onPress={() => {
          setIsModalVisible(true);
          setModalAble(item);
        }}
      >
        <View style={styles.wrapper}>
          <View style={styles.iconHolder}>
            <Image
              source={{
                uri: item?.icon,
              }}
              style={styles.iconPlace}
              tintColor={theme.PRIMARY_COLOR}
            />
          </View>

          <View style={styles.imageHolder}>
            {item?.image ? (
              <Image
                source={{
                  uri: item?.image,
                }}
                resizeMode={"cover"}
                style={styles.cardItemImagePlace}
              />
            ) : null}
          </View>
        </View>
        <Text style={styles.titleStyle}>{item?.serviceName}</Text>
      </Pressable>
    </>
  );

  return mainServices ? (
    <>
      <List
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        data={mainServices}
        renderItem={renderItem}
      />
      <Modal
        style={styles.modalContainer}
        animationIn={"slideInUp"}
        animationOut={"slideOutDown"}
        isVisible={isModalVisible}
        animationOutTiming={1000}
        transparent={true}
      >
        <View style={styles.modalContent}>
          <DisplayService
            {...props}
            serviceName={modalAble?.serviceName + " Service"}
            image={modalAble?.image}
            includedServices={modalAble?.services}
            description={modalAble?.description}
            salesPrice={modalAble?.salesPrice}
            closeModal={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>
    </>
  ) : (
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
  );
};

export default MainServices;
