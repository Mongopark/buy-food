import React, { useState } from "react";
import { View, Text } from "react-native";
import Dropdown from "../../components/dropdown/Dropdown";
import {
  User,
  Card,
  MessageText1,
  MessageQuestion,
  UserRemove,
  LogoutCurve,
} from "iconsax-react-native";
import { primaryColor, secondaryColor } from "../../constants/colors";
import ModalView from "../../components/modal/Modal";
import MainButton from "../../components/button/MainButton";
import { styles } from "../../styles/ProfileScreen.styles";
import { useNavigation } from "@react-navigation/native";
// import {useAppDispatch} from '../../redux/store';
// import {logoutUser} from '../../redux/actions/authAction';
import TextAloneHeader from "../../components/header/TextAloneHeader";
import { useCustomerStore } from "../../store";

const accountDetails = [
  { icon: <User size="24" color={primaryColor} />, title: "Profile", index: 1 },
  {
    icon: <Card size="24" color={primaryColor} />,
    title: "Payment method",
    index: 2,
  },
  {
    icon: <MessageText1 size="24" color={primaryColor} />,
    title: "Chat with support",
    index: 3,
  },
  {
    icon: <MessageQuestion size="24" color={primaryColor} />,
    title: "FAQ",
    index: 4,
  },
  {
    icon: <UserRemove size="24" color={primaryColor} />,
    title: "Delete my account and data",
    index: 5,
  },
  {
    icon: <LogoutCurve size="24" color={primaryColor} />,
    title: "Log out",
    index: 6,
  },
];

const ProfileScreen = () => {
  const { logout, clearCustomerDishes, clearCart } = useCustomerStore((state) => ({
    logout: state.logout,
    clearCustomerDishes: state.clearCustomerDishes,
    clearCart: state.clearCart,
  }));
  const { navigate } = useNavigation<any>();
  //
  //
  const [modalVisible, setModalVisible] = useState(false);
  // const dispatch = useAppDispatch();
  const handleDropdownEvent = (e: any) => {
    switch (e.index) {
      case 1:
        navigate("ProfileNavigator", { screen: "PersonalDetails" });
        break;
      case 2:
        navigate("ProfileNavigator", { screen: "PaymentMethod" });
        break;
      case 3:
        navigate("ProfileNavigator", { screen: "ChatWithSupport" });
        break;
      case 4:
        navigate("ProfileNavigator", { screen: "Faq" });
        break;
      case 5:
        setModalVisible(true);
        break;
      case 6:
        clearCustomerDishes();
        clearCart();
        logout();
        break;
      default:
        break;
    }
  };
  //
  //
  return (
    <View style={styles.container}>
      <TextAloneHeader title="My account" />
      {accountDetails.map((item, index) => (
        <View key={index}>
          <Dropdown onPress={(e) => handleDropdownEvent(e)} element={item} />
        </View>
      ))}
      <ModalView
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        children={
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>
              Are you sure you want to delete your account?
            </Text>
            <Text style={styles.modalDesc}>
              Note that deleting your account cannot be undone so we need you to
              confirm before we proceed with your request.
            </Text>
            <View style={styles.btns}>
              <View style={styles.btn}>
                <MainButton
                  title="Cancel"
                  outline={true}
                  onPress={() => setModalVisible(false)}
                  bG={""}
                  color={primaryColor}
                />
              </View>
              <View style={styles.btn}>
                <MainButton
                  title="Delete account"
                  outline={false}
                  onPress={() => setModalVisible(false)}
                  bG={secondaryColor}
                  color={primaryColor}
                />
              </View>
            </View>
          </View>
        }
      />

      <Text style={styles.version}>Ndia • Version 1.0</Text>
    </View>
  );
};

//
//
export default ProfileScreen;
