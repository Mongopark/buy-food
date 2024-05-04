import React, { useState, useRef } from "react";
import { View, TextInput, Pressable } from "react-native";
import { primaryColor, secondaryColor } from "../../constants/colors";
import ScreenHeader from "../../components/header/ScreenHeader";
import { Text } from "react-native";
import { styles } from "../../styles/Signup";
import { Image } from "react-native";
import MainButton from "../../components/button/MainButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { otpStyles } from "../../styles/EmailSignupVerification";
import Otp from "../../components/inputs/Otp";
import api, { AxiosError } from "../../api";
import { AuthStackParamList } from "../../navigation/AuthNavigator";

const EmailSiginupVerification: React.FC = () => {
	const [otp, setOtp] = useState<string>("");
	const otpReceived = false;
	const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>();

	const inputRef1 = useRef<TextInput>(null);
	const inputRef2 = useRef<TextInput>(null);
	const inputRef3 = useRef<TextInput>(null);
	const inputRef4 = useRef<TextInput>(null);

	const handleOtpChange = (index: number, text: string) => {
		if (text.length <= 1) {
			setOtp((prevOtp: string) => {
				const updatedOtp = prevOtp.split("");
				updatedOtp[index] = text;
				return updatedOtp.join("");
			});

			// Move focus to the next input field
			if (text.length === 1 && index < 3) {
				switch (index) {
					case 0:
						inputRef2.current?.focus();
						break;
					case 1:
						inputRef3.current?.focus();
						break;
					case 2:
						inputRef4.current?.focus();
						break;
				}
			}
		}
	};

	const onSubmit = async () => {
		try {
			console.log(otp);
			const res = await api.post('/email/confirm-otp', {
				otp,
				userType: "customer",
				otpType: "emailverification",
			});

			console.log(res);

			if (res.status === 200) {
				setTimeout(() => {
					console.log("moving...");
				}, 2000);
				setOtp(''); //! display a message or notification that verification is done
				navigate('EmailVerified');
			}

		} catch (error) {
			if (error instanceof AxiosError) {
				console.log(error.response?.data);
			}
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image source={require("../../assets/logoImage.png")} />
			</View>
			<ScreenHeader
				title="Email verification"
				desc="Please enter the 4 digit code sent to your
email address."
			/>
			<Otp
				otp={otp}
				handleOtpChange={handleOtpChange}
				inputRef1={inputRef1}
				inputRef2={inputRef2}
				inputRef3={inputRef3}
				inputRef4={inputRef4}
			/>

			{otpReceived ? (
				<View>
					<Text style={otpStyles.message}>Resend code in 00:44</Text>
				</View>
			) : (
				<View style={otpStyles.resendContainer}>
					<Text>No code received?</Text>
					<Pressable>
						<Text style={otpStyles.resendTxt}>Resend it</Text>
					</Pressable>
				</View>
			)}

			<View style={styles.btn}>
				<MainButton
					title="Verify"
					outline={false}
					// onPress={handleSubmit}
					onPress={onSubmit}
					bG={secondaryColor}
					color={primaryColor}
				/>
			</View>
		</View>
	);
};

export default EmailSiginupVerification;
