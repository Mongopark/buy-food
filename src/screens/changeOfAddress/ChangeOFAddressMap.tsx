import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Address from "../../components/changeOfAddress/Address";
import { grey300, lightBackground, textColor } from "../../constants/colors";
import { ArrowLeft2, SearchNormal } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import GoBackHeader from "../../components/header/GoBackHeader";

const ChangeOFAddressMap = () => {
  const { navigate } = useNavigation<any>();
  const navigation = useNavigation<any>();
  const handleNavigateToChangeOfAddress = () => {
    navigate("OrderNavigator", { screen: "ChangeOfAddress" });
  };
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <View style={styles.goBackContainer}>
          <TouchableOpacity
            style={styles.goBackBtn}
            onPress={() => navigation.goBack()}
          >
            <ArrowLeft2 size={18} color={textColor} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.addressContainer}>
        <TouchableOpacity
          onPress={() => handleNavigateToChangeOfAddress()}
          style={styles.searchContainer}
        >
          <SearchNormal size={14} color={textColor} />
          <Text style={styles.dummyInputText}>Find address</Text>
        </TouchableOpacity>
        <Text style={styles.recentText}>Recent searches</Text>
        <View style={styles.addresses}>
          <Address />
          <Address />
          <Address />
        </View>
        <View style={styles.currentTextContainer}>
          <Text style={styles.currentText}>Use current location</Text>
        </View>
      </View>
    </View>
  );
};

export default ChangeOFAddressMap;

const styles = StyleSheet.create({
  screenContainer: {},
  searchModal: {},
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  mapContainer: {
    flex: 1,
    backgroundColor: "red",
  },
  addressContainer: {
    height: 340,
    borderTopEndRadius: 10,
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 32,
  },
  recentText: {
    lineHeight: 19,
    fontSize: 14,
    fontWeight: "500",
    color: grey300,
    marginBottom: 20,
  },
  goBackContainer: {
    marginTop: 72,
    paddingHorizontal: 16,
  },
  goBackBtn: {
    width: 32,
    height: 32,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
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
  addresses: {
    gap: 16,
    marginBottom: 14,
  },
  currentText: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 22,
  },
  currentTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  dummyInputText: {
    fontSize: 14,
    lineHeight: 19,
    color: grey300,
  },
});
