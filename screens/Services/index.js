import React, { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import Modal from "react-native-modal";
import { Divider, List, ListItem, Icon, Layout } from "@ui-kitten/components";
import * as Animatable from "react-native-animatable";
import { useFocusEffect } from "@react-navigation/native";

import styles from "./styles";
import firebase from "../../firebase";
import DisplayService from "../../components/DisplayService";

function Services(props) {
  const [services, setServices] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalAble, setModalAble] = useState(null);
  const [pageLoad, setPageLoad] = useState(false);
  const navi = props.navigation;
  var servicesRef = firebase.database().ref("/services");

  const stackUp = {
    from: {
      marginTop: 50,
    },
    to: {
      marginTop: 30,
    },
  };
  const stackDown = {
    from: {
      marginTop: 30,
    },
    to: {
      marginTop: 50,
    },
  };

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

  useFocusEffect(
    React.useCallback(() => {
      setPageLoad(true);

      return () => setPageLoad(false);
    }, [])
  );

  useEffect(() => {
    servicesList();
    return () => {
      //
    };
  }, []);

  const pressableOfList = (props) => (
    <Icon {...props} name="chevron-right-outline" />
  );
  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.itemName}`}
      style={{
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 40,
        fontSize: 18,
      }}
      accessoryRight={pressableOfList}
      onPress={() => {
        setIsModalVisible(true);
        setModalAble(item);
      }}
      // onPress={() =>
      //   navi.navigate("Service", {
      //     serviceName: item?.itemName,
      //     serviceDescription: item?.description,
      //     image:
      //       "https://firebasestorage.googleapis.com/v0/b/bike-workshop-e2f5d.appspot.com/o/MOT.jpg?alt=media&token=8ef2696d-09c7-4296-812b-2ecdda4d8d5f",
      //     mrp: item?.mrp,
      //     discount: item?.discount,
      //     salesPrice: item?.salesPrice,
      //   })
      // }
      // description={`${item.description} ${index + 1}`}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View
        style={styles.animatableCard}
        animation={pageLoad ? stackUp : stackDown}
        delay={100}
      >
        <Layout style={styles.carding}>
          <List
            style={styles.infoCard}
            data={services}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
          />
        </Layout>
      </Animatable.View>
      <Modal
        style={styles.modalContainer}
        animationIn={"slideInRight"}
        animationOut={"slideOutRight"}
        isVisible={isModalVisible}
        animationInTiming={500}
        animationOutTiming={500}
        transparent={true}
      >
        <View style={styles.modalContent}>
          <DisplayService
            {...props}
            serviceName={modalAble?.itemName}
            image={
              "https://firebasestorage.googleapis.com/v0/b/bike-workshop-e2f5d.appspot.com/o/MOT.jpg?alt=media&token=8ef2696d-09c7-4296-812b-2ecdda4d8d5f"
            }
            serviceDescription={modalAble?.description}
            mrp={modalAble?.mrp}
            discount={modalAble?.discount}
            salesPrice={modalAble?.salesPrice}
            closeModal={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default Services;
