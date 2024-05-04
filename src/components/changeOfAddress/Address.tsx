import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Clock } from "iconsax-react-native";
import { grey300, grey500, lightBackground } from "../../constants/colors";

const Address = () => {
  return (
    <View style={styles.container}>
      <Clock size={13} color={grey300} />
      <Text style={styles.addressText}>Address name</Text>
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  addressText: {
    fontSize: 16,
    lineHeight: 22,
    color: grey500,
  },
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 12,
    paddingBottom: 16,
    borderBottomColor: lightBackground,
    borderBottomWidth: 1,
  },
});
