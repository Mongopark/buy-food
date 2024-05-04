import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import GoBackHeader from "../../components/header/GoBackHeader";
import {
  backgroundColor,
  grey300,
  grey500,
  lightBackground,
  primaryColor,
  secondaryColor,
  textColor,
} from "../../constants/colors";
import { SearchNormal } from "iconsax-react-native";
import Address from "../../components/changeOfAddress/Address";
import MainButton from "../../components/button/MainButton";
import { useNavigation } from "@react-navigation/native";

const ChangeOfAddress = () => {
  const { navigate } = useNavigation<any>();

  const navigateConfirmAddress = () => {
    navigate("OrderNavigator", { screen: "ConfirmAddressDetails" });
  };
  return (
    <SafeAreaView style={styles.screenContainer}>
      <GoBackHeader title="Add new address" />
      <View style={styles.screenContent}>
        <View>
          <View style={styles.searchContainer}>
            <SearchNormal size={14} color={textColor} />
            <TextInput placeholder="Find address" style={styles.inputField} />
          </View>
          <Text style={styles.recentText}>Recent searches</Text>
          <View style={styles.addresses}>
            <Address />
            <Address />
            <Address />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity>
            <Text style={styles.currentText}>Use current location</Text>
          </TouchableOpacity>
          <MainButton
            title="Continue"
            bG={secondaryColor}
            color={primaryColor}
            onPress={() => navigateConfirmAddress()}
            outline={false}
          />
          <View style={styles.rowContainer}>
            <Text style={styles.bottomText}>Can't find your address ? </Text>
            <TouchableOpacity>
              <Text style={styles.bottomLink}>Use the map instead</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChangeOfAddress;

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: backgroundColor },
  searchContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 8,
    backgroundColor: lightBackground,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
    marginBottom: 14,
  },
  recentText: {
    lineHeight: 19,
    fontSize: 14,
    fontWeight: "500",
    color: grey300,
    marginBottom: 20,
  },
  addresses: {
    gap: 16,
    marginBottom: 14,
  },
  currentText: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
  },
  currentTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  screenContent: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  bottomContainer: {
    marginBottom: 32,
    gap: 10,
  },
  rowContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomText: {
    lineHeight: 16.2,
    fontWeight: "400",
    color: grey300,
    fontSize: 12,
  },
  bottomLink: {
    lineHeight: 16.2,
    fontWeight: "700",
    fontSize: 12,
    color: grey500,
  },
  inputField: {
    flex: 1,
  },
});
