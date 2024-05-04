import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EditProfileScreen from "../screens/profile/EditProfileScreen";
import ChatWithSupport from "../screens/chat/ChatWithSupport";
import FaqScreen from "../screens/faq/FaqScreen";
import ChangePhoneNo from "../screens/phoneNoChange/ChangePhoneNo";
import OtpPhoneNoChange from "../screens/phoneNoChange/OtpPhoneNoChange";
import PhoneNoSet from "../screens/phoneNoChange/PhoneNoSet";
import ChangePassword from "../screens/passwordChange/ChangePassword";
import PasswordSet from "../screens/passwordChange/PasswordSet";
import AddNewCardScreen from "../screens/paymentMethods/AddNewCardScreen";
import FaqSingleScreen from "../screens/faq/FaqSingleScreen";

export type RootStackParamList = {
	FAQScreen: undefined;
	AnswerScreen: { questionId: number };
	PersonalDetails: undefined;
	ChatWithSupport: undefined;
	Faq: undefined;
	PaymentMethod: undefined;
	PhoneChange: undefined;
	OtpPhoneChange: undefined;
	PhoneNoSet: undefined;
	PasswordChange: undefined;
	PasswordSet: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const ProfileNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="PersonalDetails" component={EditProfileScreen} />
			<Stack.Screen name="ChatWithSupport" component={ChatWithSupport} />
			<Stack.Screen name="Faq" component={FaqScreen} />
			<Stack.Screen name="AnswerScreen" component={FaqSingleScreen} />
			<Stack.Screen name="PaymentMethod" component={AddNewCardScreen} />
			<Stack.Screen name="PhoneChange" component={ChangePhoneNo} />
			<Stack.Screen name="OtpPhoneChange" component={OtpPhoneNoChange} />
			<Stack.Screen name="PhoneNoSet" component={PhoneNoSet} />
			<Stack.Screen name="PasswordChange" component={ChangePassword} />
			<Stack.Screen name="PasswordSet" component={PasswordSet} />
		</Stack.Navigator>
	);
};

export default ProfileNavigator;
