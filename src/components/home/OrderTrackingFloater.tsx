import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  gray50,
  grey500,
  grey900,
  secondaryColor,
} from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";

const OrderTrackingFloater = () => {
  const { navigate } = useNavigation<any>();

  const handleOpen = () => {
    navigate("OrderNavigator", { screen: "OrderTracking" });
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.boldText}>
            Restaurant has received your order
          </Text>
          <Text style={styles.normalText}>
            Estimated delivery time: 11:40 AM{" "}
          </Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => handleOpen()}>
          <Text style={styles.btnText}>Open</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.statusContainer}>
        <View style={styles.activeStatus} />
        <View style={styles.status} />
        <View style={styles.status} />
        <View style={styles.status} />
        <View style={styles.status} />
      </View>
    </View>
  );
};

export default OrderTrackingFloater;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: grey900,
    zIndex: 99999999,
    padding: 16,
    gap: 16,
  },
  textContainer: {
    gap: 4,
  },
  topContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boldText: {
    color: "white",
    fontSize: 14,
    lineHeight: 19,
    fontWeight: "700",
  },
  normalText: {
    color: gray50,
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
  },
  btn: {
    width: 56,
    height: 24,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 18,
    backgroundColor: secondaryColor,
  },
  btnText: {
    color: grey500,
    fontSize: 12,
    lineHeight: 16,
  },
  status: {
    height: 3,
    width: 60,
    backgroundColor: gray50,
  },
  activeStatus: {
    height: 3,
    width: 60,
    backgroundColor: secondaryColor,
  },
});
