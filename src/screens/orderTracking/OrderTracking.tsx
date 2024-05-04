import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { backgroundColor, secondaryColor } from "../../constants/colors";
import {
  FirstModalTracking,
  SecondModalTracking,
  ThirdModalTracking,
  FourthModalTracking,
  FifthModalTracking,
} from "../../components/orderTracking";
import CloseHeader from "../../components/header/CloseHeader";

const OrderTracking = () => {
  return (
    <View style={styles.modalContainer}>
      <CloseHeader isBtn={true} />
      {/* <FirstModalTracking /> */}
      {/* <SecondModalTracking /> */}
      {/* <ThirdModalTracking /> */}
      {/* <FourthModalTracking /> */}
      <FifthModalTracking />
    </View>
  );
};

export default OrderTracking;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: backgroundColor,
    height: "93%",
    width: "100%",
    paddingHorizontal: 16,
    marginTop: 40,
    paddingVertical: 20,
    borderRadius: 10,
  },
  cancelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  helpBtn: {
    backgroundColor: secondaryColor,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: secondaryColor,
    borderRadius: 15,
    overflow: "hidden",
  },
});
