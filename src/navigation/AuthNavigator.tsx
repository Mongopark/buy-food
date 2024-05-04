import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignUp from "../screens/authentication/SignUp";
import LogIn from "../screens/authentication/LogIn";
import { Onboarding } from "../screens/onboarding/Onboarding";
import ForgotPassword from "../screens/authentication/ForgotPassword";
import OtpVerification from "../screens/authentication/OtpVerification";
import CreateNewPassword from "../screens/authentication/CreateNewPassword";
import PasswordSet from "../screens/authentication/PasswordSet";
// import { useAppSelector } from "../redux/store";
import TermsScreen from "../screens/onboarding/TermsScreen";
import EmailSiginupVerification from "../screens/authentication/EmailSignupVerification";
import EmailVerified from "../screens/authentication/EmailVerifiied";
import MainNavigator from "./BottomTabNavigator";

export type AuthStackParamList = {
	Onboarding: undefined;
	Terms: undefined;
	Login: undefined;
	Signup: undefined;
	ForgotPassword: undefined;
	OtpVerification: undefined;
	CreateNewPassword: undefined;
	PasswordSet: undefined;
	EmailSignupVerification: undefined;
	EmailVerified: undefined;
	Main: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
	// const auth = useAppSelector((state) => state.auth);
	// const initialRoute = auth.isOnboarded ? "Onboarding" : "Onboarding";

	return (
		<Stack.Navigator
			// initialRouteName={Onboarding}
			screenOptions={({}) => ({
				headerShown: false,
				headerStyle: {
					borderBottomWidth: 0,
					shadowOpacity: 0,
					elevation: 0,
				},
				title: "",
			})}
		>
			<Stack.Screen name="Onboarding" component={Onboarding} />
			<Stack.Screen name="Terms" component={TermsScreen} />
			<Stack.Screen name="Signup" component={SignUp} />
			<Stack.Screen name="Login" component={LogIn} />
			<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
			<Stack.Screen name="OtpVerification" component={OtpVerification} />
			<Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
			<Stack.Screen name="PasswordSet" component={PasswordSet} />
			<Stack.Screen
				name="EmailSignupVerification"
				component={EmailSiginupVerification}
			/>
			<Stack.Screen name="EmailVerified" component={EmailVerified} />
			<Stack.Screen name="Main" component={MainNavigator} />
		</Stack.Navigator>
	);
};

export default AuthNavigator;
