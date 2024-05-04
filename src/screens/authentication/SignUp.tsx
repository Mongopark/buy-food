import { View, Image, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import ScreenHeader from "../../components/header/ScreenHeader";
import AccountInputs from "../../components/inputs/AccountInputs";
import { Eye, EyeSlash } from "iconsax-react-native";
import { primaryColor, secondaryColor } from "../../constants/colors";
import MainButton from "../../components/button/MainButton";
import { styles } from "../../styles/Signup";
import { Formik } from "formik";
import {
	validationSchema,
	initialValues,
	signupProps,
} from "../../validators/signupValidators";

import { NavigationProp, useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";

import api, { AxiosError } from "../../api";
import { AuthStackParamList } from "../../navigation/AuthNavigator";

interface IPosition {
	lat: number;
	lon: number;
}

const SignUp = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [position, setPosition] = useState<IPosition | null>(null);
	const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>();

	const onSubmit = async (values: signupProps) => {
		try {
			console.log(values);
			let res = await api.post('/customers/signup', { ...values, ...position });
			console.log(res.status);

			if (res.status) {
				//! handle the data i get back here which includes a message
				setTimeout(() => {
					console.log("moving...");
					navigate("EmailSignupVerification");	
				}, 2000)
			}
		} catch (error) {
			if (error instanceof AxiosError) {
				console.log(error.response?.data);
				//! have some sort of alert here to display errors
			}
		}
		// Handle form submission here
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};
	const toggleConfirmPasswordVisibility = () => {
		setShowConfirmPassword(!showConfirmPassword);
	};

	useEffect(() => {
		async function getPermissions() {
			const { status } = await Location.requestForegroundPermissionsAsync();
	  
			//! find out how to error out this
			if (status !== Location.PermissionStatus.GRANTED) {
			  console.log('please give me permission for your location');
			  return;
			}
	  
			const currentPosition = await Location.getCurrentPositionAsync();
			
			setPosition({
				lat: currentPosition.coords.latitude,
				lon: currentPosition.coords.longitude
			});

			console.log(currentPosition);
		}

		getPermissions();
	  
	}, []);

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{({
				handleChange,
				handleBlur,
				handleSubmit,
				values,
				errors,
				touched,
			}) => (
				<ScrollView style={styles.container}>
					<View style={styles.imageContainer}>
						<Image source={require("../../assets/logoImage.png")} />
					</View>
					<ScreenHeader
						title="Personal details"
						desc="Enter your details below to get started with Ndia"
					/>
					<View style={styles.halfColumnContainer}>
						<View style={styles.halfColumn}>
							<AccountInputs
								label="First name"
								placeholder="Enter your first name"
								onChange={handleChange("firstName")}
								onBlur={handleBlur("firstName")}
								touched={touched.firstName}
								value={values.firstName}
								error={errors.firstName}
								isPassword={false}
							/>
						</View>
						<View style={styles.halfColumn}>
							<AccountInputs
								label="Last name"
								placeholder="Enter your last name"
								onChange={handleChange("lastName")}
								onBlur={handleBlur("lastName")}
								touched={touched.lastName}
								value={values.lastName}
								error={errors.lastName}
								isPassword={false}
							/>
						</View>
					</View>
					<AccountInputs
						label="Email address"
						placeholder="Enter your email address"
						onChange={handleChange("email")}
						onBlur={handleBlur("email")}
						touched={touched.email}
						isPassword={false}
						value={values.email}
						error={errors.email}
					/>
					<AccountInputs
						label="Phone number"
						placeholder="Enter your phone number"
						onChange={handleChange("phoneNumber")}
						onBlur={handleBlur("phoneNumber")}
						touched={touched.phoneNumber}
						isPassword={false}
						value={values.phoneNumber}
						error={errors.phoneNumber}
					/>
					<AccountInputs
						label="Password"
						placeholder="Enter your password"
						icon={true}
						isPassword={true}
						variant={
							showPassword ? (
								<EyeSlash size="16" color={primaryColor} />
							) : (
								<Eye size="16" color={primaryColor} />
							)
						}
						showPassword={showPassword}
						toggleIcon={togglePasswordVisibility}
						onChange={handleChange("password")}
						onBlur={handleBlur("password")}
						touched={touched.password}
						value={values.password}
						error={errors.password}
					/>

					<AccountInputs
						label="Confirm password"
						placeholder="at least 8 characters"
						icon={true}
						isPassword={true}
						variant={
							showConfirmPassword ? (
								<EyeSlash size="16" color={primaryColor} />
							) : (
								<Eye size="16" color={primaryColor} />
							)
						}
						showPassword={showConfirmPassword}
						toggleIcon={toggleConfirmPasswordVisibility}
						onChange={handleChange("passwordConfirm")}
						onBlur={handleBlur("passwordCOnfirm")}
						touched={touched.passwordConfirm}
						value={values.passwordConfirm}
						error={errors.passwordConfirm}
					/>
					<MainButton
						title="Next"
						color={primaryColor}
						bG={secondaryColor}
						onPress={handleSubmit}
						outline={false}
					/>
					<View style={styles.txtContainer}>
						<View>
							<Text style={styles.txt}>Have an account already?</Text>
						</View>

						<View>
							<Text style={styles.loginTxt} onPress={() => navigate("Login")}>
								Log in
							</Text>
						</View>
					</View>
				</ScrollView>
			)}
		</Formik>
	);
};

export default SignUp;
