import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import React, { useEffect } from "react";
import {
  backgroundColor,
  grey200,
  grey900,
  primaryColor,
  secondaryColor,
  textColor,
} from "../../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import MainButton from "../../components/button/MainButton";
import { useNavigation } from "@react-navigation/native";

const OrderPlaced = () => {
  const { navigate } = useNavigation<any>();
  const handleOkay = () => {
    navigate("BottomTab", { screen: "HomeTab" });
  };
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar translucent={false} hidden={false} />
      <View>
        <View style={styles.imgContainer}>
          <Image
            //   style={styles.logo}
            source={require("../../assets/set.png")}
          />
        </View>
        <Text style={styles.titleText}>Your order has been placed</Text>
        <Text style={styles.descText}>
          We will notify you on the progress on your order
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <MainButton
          title="Okay"
          outline={false}
          bG={secondaryColor}
          color={primaryColor}
          onPress={() => handleOkay()}
        />
      </View>
    </SafeAreaView>
  );
};

export default OrderPlaced;

const styles = StyleSheet.create({
  lightText: {
    fontSize: 14,
    color: grey200,
  },
  normalText: {
    fontSize: 16,
    color: grey900,
  },
  boldText: {
    fontSize: 16,
    fontWeight: "700",
    color: grey900,
  },
  titleText: {
    fontSize: 20,
    color: textColor,
    fontWeight: "500",
    marginBottom: 12,
    textAlign: "center",
    lineHeight: 32.4,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: backgroundColor,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    position: "relative",
  },
  colContainer: {
    gap: 4,
  },
  colContainerMain: {
    gap: 24,
  },
  btnContainer: {
    width: "100%",
    position: "absolute",
    bottom: 32,
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  descText: {
    textAlign: "center",
    fontSize: 14,
    lineHeight: 16,
    color: "#A9ABB8",
  },
});
