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

const PlacingOrder = () => {
  const { navigate } = useNavigation<any>();
  const handleUndo = () => {
    console.log("Btn pressed");
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("OrderNavigator", { screen: "OrderPlaced" });
    }, 5000);
    return () => clearTimeout(timeout);
  });
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar translucent={false} hidden={false} />
      <View>
        <View style={styles.imgContainer}>
          <Image
            //   style={styles.logo}
            source={require("../../assets/pie-img.png")}
          />
        </View>
        <Text style={styles.titleText}>Placing order</Text>
        <View style={styles.colContainerMain}>
          <View>
            <View style={styles.colContainer}>
              <Text style={styles.lightText}>Your order</Text>
              <Text style={styles.normalText}>Food name: Lorem ipsum</Text>
            </View>
          </View>
          <View>
            <View style={styles.colContainer}>
              <Text style={styles.lightText}>Delivery location</Text>
              <Text style={styles.normalText}>
                Admiralty road, Lekki phase 1
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.colContainer}>
              <Text style={styles.lightText}>Total</Text>
              <Text style={styles.boldText}>₦2,000.00</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <MainButton
          title="Undo"
          outline={false}
          bG={secondaryColor}
          color={primaryColor}
          onPress={() => handleUndo()}
        />
      </View>
    </SafeAreaView>
  );
};

export default PlacingOrder;

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
    fontWeight: "700",
    marginBottom: 50,
    textAlign: "center",
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
    marginBottom: 37,
  },
});
