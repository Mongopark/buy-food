import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Call,
  MessageText,
  MessageText1,
  Star,
  Star1,
} from "iconsax-react-native";
import { gray50, primaryColor } from "../../constants/colors";

const RiderCallCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View>
          <Image
            source={require("../../assets/riderOrder.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.riderDetails}>
          <Text style={styles.name}>Harry Johnson</Text>
          <View style={styles.ratingContainer}>
            <Star1 size={10} color={primaryColor} variant="Bold" />
            <Text style={styles.rate}>1.4</Text>
          </View>
        </View>
      </View>
      <View style={styles.reach}>
        <Call size="24" color={primaryColor} />
        <MessageText1 size="24" color={primaryColor} />
      </View>
    </View>
  );
};

export default RiderCallCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomColor: gray50,
    borderBottomWidth: 2,
  },
  image: {
    width: 64,
    height: 64,
  },
  left: {
    flexDirection: "row",
    gap: 10,
  },
  name: {
    fontFamily: "satoshi-medium",
    fontSize: 14,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    backgroundColor: gray50,
    padding: 10,
    gap: 4,
    alignItems: "center",
    borderRadius: 30,
    justifyContent: "flex-start",
  },
  reach: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  rate: {
    fontFamily: "satoshi-regular",
    fontSize: 12,
    color: primaryColor,
  },
  riderDetails: {
    justifyContent: "flex-start",
  },
});
