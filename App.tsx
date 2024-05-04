import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/navigation/MainNavigator";
import { Provider } from "react-redux";
import { Platform, SafeAreaView, View, useColorScheme } from "react-native";
import { useEffect, useState } from "react";
import AuthNavigator from "./src/navigation/AuthNavigator";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { backgroundColor } from "./src/constants/colors";
import * as Font from "expo-font";
import * as Notifications from "expo-notifications";

// import {useAppSelector} from './src/redux/store';
import SplashScreen from "./src/screens/onboarding/SplashScreen";
import VendorFoodCategory from "./src/screens/vendor/VendorFoodCategory";
import VendorMenu from "./src/screens/vendor/VendorMenu";
import VendorSelection from "./src/screens/vendor/VendorSelection";
import { useCustomerStore } from "./src/store";
import api, { AxiosError } from "./src/api";
// import { persistor, store } from "./src/redux/store";


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [notification, setNotification] = useState<boolean | Notifications.Notification | Notifications.NotificationResponse>(false);
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();
  const { accessToken, fcmToken, updateFcmToken, updateNotification, logout } = useCustomerStore((state) => ({
    accessToken: state.accessToken,
    logout: state.logout,
    fcmToken: state.fcmToken,
    updateFcmToken: state.updateFcmToken,
    updateNotification: state.updateNotification,
  }));
  
  let isLoggedIn = false;

  const isDarkMode = useColorScheme() === "dark";
  // const auth = useAppSelector(state => state.auth);

  useEffect(() => {
    let finalStatus;

    async function registerPushNotificationToken() {

      const { status } = await Notifications.getPermissionsAsync();

      //* if we don't have the permissions we ask for it
      if (status !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        return
      }

      if (fcmToken === '') {
        const token = await Notifications.getDevicePushTokenAsync();        
        console.log(token.data);
        updateFcmToken(token.data);
      }

      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231C77',
        });
      }
    }

    registerPushNotificationToken();

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      updateNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(notification => {
      updateNotification(notification);
    });

    return () => {
      if (notificationListener.current !== undefined && responseListener.current !== undefined) {
        Notifications.removeNotificationSubscription(notificationListener.current); 
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    }
  }, []);

  useEffect(() => {
    Font.loadAsync({
      "satoshi-regular": require("./assets/fonts/Satoshi-Regular.otf"),
      "satoshi-medium": require("./assets/fonts/Satoshi-Medium.otf"),
      "satoshi-bold": require("./assets/fonts/Satoshi-Bold.otf"),
    });


  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : backgroundColor,
    flex: 1,
  };

  return showSplash ? (
    <SplashScreen />
  ) : (
    <View style={backgroundStyle}>
      <NavigationContainer>
         {accessToken !== null ?  <MainNavigator />  : <AuthNavigator />} 
      </NavigationContainer>
    </View>
  );
}


