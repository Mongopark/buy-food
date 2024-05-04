import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GoBackHeader from "../../components/header/GoBackHeader";
import {
  backgroundColor,
  primaryColor,
  secondaryColor,
} from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import FixedInput from "../../components/inputs/FixedInput";
import MainButton from "../../components/button/MainButton";

const addressDetails = [
  {
    label: "Street address",
    content: "Chief hope harriman street",
  },
  {
    label: "Ap./office/floor No",
    content: "No 9b",
  },
  {
    label: "City",
    content: "Lekki phase 1",
  },
];

const ConfirmAddressDetails = () => {
  const { navigate } = useNavigation<any>();

  const handleHandleConfirmDetails = () => {
    // navigate("OrderTracking");
    console.log("btn pressed");
  };
  return (
    <View style={styles.container}>
      <GoBackHeader title="Confirm address details" />
      <View style={styles.screenContent}>
        <View>
          {addressDetails.map((item, index) => {
            return <FixedInput key={index} data={item} />;
          })}
        </View>
        <MainButton
          title="Continue"
          bG={secondaryColor}
          color={primaryColor}
          onPress={() => console.log("btn pressed")}
          outline={false}
        />
      </View>
    </View>
  );
};

export default ConfirmAddressDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  screenContent: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 32,
    flex: 1,
    justifyContent: "space-between",
  },
});
