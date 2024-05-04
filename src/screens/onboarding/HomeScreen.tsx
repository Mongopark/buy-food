import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { styles } from "../../styles/HomeScreen.styles";
import { NotificationBing, Location, ArrowDown2 } from "iconsax-react-native";
import {
  backgroundColor,
  secondaryColor,
  textColor,
} from "../../constants/colors";
import SearchInput from "../../components/inputs/SearchInput";
import VendorView from "../../components/cards/VendorView";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TabParamList } from "../../navigation/BottomTabNavigator";
import Geolocation from "@react-native-community/geolocation";
import Notifications from "expo-notifications";
// import { fetchUserLocation, setLocation } from "../redux/slice/locationSlice";
// import { RootState, useAppDispatch } from "../redux/store";
import { useSelector } from "react-redux";
import OrderTrackingFloater from "../../components/home/OrderTrackingFloater";
import { useCustomerStore } from "../../store";

const HomeScreen = () => {
  // const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { navigate } = useNavigation<NavigationProp<TabParamList>>();

  const { notification } = useCustomerStore((state) => ({
    notification: state.notification,
  }));


  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={backgroundColor}
        translucent={true}
        barStyle={"dark-content"}
      />
      { notification && <OrderTrackingFloater /> } 
      <View style={styles.header}>
        <View>
          {/* <Text style={styles.addressLabel}>Deliver to</Text> */}
          <TouchableOpacity
            onPress={() => navigate("ChangeOfAddress")}
          >
            <View style={styles.addressContainer}>
              <Location size={14} color={secondaryColor} variant="Linear" />
              <Text style={styles.addressText}>
                Admiralty road, Lekki...
                {/* {location?.address || "123 Main Street"} */}
              </Text>
              <ArrowDown2 size="16" color={textColor} variant="Linear" />
            </View>
          </TouchableOpacity>
        </View>
        {/* Not needed */}
        {/* <View style={styles.iconContainer}>
					<NotificationBing
						size="24"
						color={textColor}
						variant="Linear"
						onPress={() => navigate("Checkout")}
					/>
				</View> */}
      </View>
      <View style={styles.padding}>
        <SearchInput />
      </View>
      <ScrollView>
        <VendorView />
      </ScrollView>
    </View>
  );
};
export default HomeScreen;
