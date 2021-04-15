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
import * as ImagePicker from "expo-image-picker";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Toast from "react-native-toast-message";

import styles from "./styles";
import firebase from "../../firebase";
import { Pressable } from "react-native";

const StatusView = (props) => {
  var user = firebase.auth().currentUser;
  const [booking, setBooking] = useState(props?.booking);
  const [image, setImage] = useState(props?.booking?.image);
  const [serviceName, setServiceName] = useState(props?.booking?.serviceName);
  const [status, setStatus] = useState(props?.booking?.bookingStatus);

  useEffect(() => {
    //
    return () => {
      //
    };
  }, []);

  return (
    <View style={styles.contentContainer}>
      <View style={styles.inputWrapper}>
        <View style={styles.inputBlock}>
          <Text
            style={[
              styles.badge,
              {
                backgroundColor:
                  status === "ongoing"
                    ? "#ffc107"
                    : status === "open"
                    ? "#28a745"
                    : status === "closed"
                    ? "#6c757d"
                    : "#6c757d",
              },
            ]}
          >
            {status}
          </Text>
          <Text style={styles.textStyle}>Ref Id : {props?.booking?.refId}</Text>
        </View>
        <View style={styles.inputBlock}>
          <Text style={styles.textStyle}>Service Name : {serviceName}</Text>
        </View>
        <View style={styles.inputBlock}>
          <Text style={styles.textStyle}>
            Vehicle Name : {props?.booking?.vehicleName}
          </Text>
        </View>
        <View style={styles.inputBlock}>
          <Text style={styles.textStyle}>
            Pick and Drop : {props?.booking?.pickAndDrop ? "Yes" : "No"}
          </Text>
        </View>
        <View style={styles.inputBlock}>
          <Text style={styles.textStyle}>Booking Status : {status}</Text>
        </View>
        {props?.booking?.startDate ? (
          <View style={styles.inputBlock}>
            <Text style={styles.textStyle}>
              Start Date : {props?.booking?.startDate}
            </Text>
          </View>
        ) : null}
        {props?.booking?.completionDate ? (
          <View style={styles.inputBlock}>
            <Text style={styles.textStyle}>
              Completion Date (Estd.) : {props?.booking?.completionDate}
            </Text>
          </View>
        ) : null}
        {props?.booking?.completedDate ? (
          <View style={styles.inputBlock}>
            <Text style={styles.textStyle}>
              Completed Date : {props?.booking?.completedDate}
            </Text>
          </View>
        ) : null}

        <Pressable style={styles.hideButton} onPress={props?.closeModal}>
          <Text style={styles.closeIcon}>CLOSE</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default StatusView;
