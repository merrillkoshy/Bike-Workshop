import React, { useEffect, useState } from "react";
import {
  TextInput,
  View,
  Image,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Divider, List, ListItem, Layout } from "@ui-kitten/components";

import styles from "./styles";
import firebase from "../../firebase";

const History = (props) => {
  var user = firebase.auth().currentUser;
  const [name, setName] = useState(props?.name);
  const [bookings, setBookings] = useState([]);

  const bookingsList = () => {
    var bookingsList = [];

    firebase
      .database()
      .ref(`users/${user.uid}/bookings/`)
      .once("value", (snapshot) => {
        snapshot.forEach((snap) => {
          const bookingsObject = snap.val();
          bookingsList.push(bookingsObject);
        });
      })
      .then(() => {
        setBookings(bookingsList);
      });
  };

  useEffect(() => {
    bookingsList();
    return () => {
      setName(props?.name);
    };
  }, []);

  const renderItem = ({ item, index }) => (
    <ListItem
      title={() => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Ubuntu-B",
            }}
          >
            {item?.refId}
          </Text>
          <Text
            style={[
              styles.badge,
              {
                backgroundColor:
                  item?.bookingStatus == "open"
                    ? "#28a745"
                    : item?.bookingStatus == "ongoing"
                    ? "#ffc107"
                    : "#6c757d",
              },
            ]}
          >
            {item?.bookingStatus}
          </Text>
        </View>
      )}
      style={styles.listItemStyle}
      description={(evaProps) => (
        <View
          style={{
            marginTop: 15,
            marginLeft: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <Text>Service Name : </Text>
            <Text
              style={{
                flex: 1,
                flexWrap: "wrap",
              }}
            >
              {item?.serviceName}
            </Text>
          </View>
          {item?.bookingStatus == "open" ? (
            <Text {...evaProps}>Your booking has been registered</Text>
          ) : item?.bookingStatus == "ongoing" ? (
            <>
              <Text {...evaProps}>Start Date : {item?.startDate}</Text>
              <Text {...evaProps}>
                Completion Date : {item?.completionDate}
              </Text>
            </>
          ) : (
            <>
              <Text {...evaProps}>Start Date : {item?.startDate}</Text>
              <Text {...evaProps}>
                Completion Date : {item?.completionDate}
              </Text>
              <Text {...evaProps}>Completed Date : {item?.completedDate}</Text>
            </>
          )}
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <Text>Service Charge : </Text>
            <Text>AED {item?.serviceCharge}</Text>
          </View>
        </View>
      )}
    />
  );
  return (
    <View style={styles.contentContainer}>
      <View
        style={{
          alignItems: "center",
          paddingVertical: 30,
          paddingHorizontal: 20,
          borderRadius: 10,
          backgroundColor: "rgba(255,255,255,0.9)",
        }}
      >
        <View style={styles.inputWrapper}>
          <Layout style={styles.carding}>
            <List
              style={styles.infoCard}
              data={bookings}
              ItemSeparatorComponent={Divider}
              renderItem={renderItem}
            />
          </Layout>
        </View>

        <TouchableOpacity
          style={styles.hideButton}
          onPress={props?.toggleModal}
        >
          <Text style={styles.closeIcon}>CLOSE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default History;
