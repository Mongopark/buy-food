import { Text, View, Image } from "react-native";
import React, { useState } from "react";
import { styles } from "../../styles/Signup";
import ScreenHeader from "../../components/header/ScreenHeader";
import AccountInputs from "../../components/inputs/AccountInputs";
import { Eye, EyeSlash } from "iconsax-react-native";
import { primaryColor, secondaryColor } from "../../constants/colors";
import MainButton from "../../components/button/MainButton";
import { Formik } from "formik";
import {
	loginProps,
	initialValues,
	validationSchema,
} from "../../validators/loginValidator";
// import {useAppDispatch} from '../../redux/store';
// import {logIn} from '../../redux/actions/userAction';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import api, { AxiosError } from "../../api";
import { useCustomerStore } from "../../store";
import { AuthStackParamList } from "../../navigation/AuthNavigator";

interface LoginProps {
	navigation: any;
}

const LoginIn = ({ navigation }: LoginProps) => {
	const { updateStore } = useCustomerStore();
	const [showPassword, setShowPassword] = useState(false);
	// const dispatch = useAppDispatch();

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>();

	const onSubmit = async (values: loginProps) => {
		try {
			const res = await api.post('/customers/login', {
				emailOrPhone: values.phoneOrEmail,
				password: values.password,
			});

			if (res.status === 200) {
				let expiration = new Date().getTime() + 3600000;

				// console.log(res.data.data.refreshToken);

				//* we need to get the user's address...
				console.log(res.data.data.customer);

				let customerData = {
					id: res.data.data.customer.id,
					lastName: res.data.data.customer.lastName,
					firstName: res.data.data.customer.firstName,
					email: res.data.data.customer.email
				};

				updateStore(customerData, res.data.data.accessToken, res.data.data.refreshToken, expiration)
				
				//! find out why the error?
				//* display a success message
				setTimeout(() => {
					// navigate('Main');
				}, 2000);
			}
		} catch (error) {
			if (error instanceof AxiosError) {
				//* display an error message
				console.log(error.response?.data);	
			}

			console.log(error);
		}
	};
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
				<View style={styles.container}>
					<View style={styles.imageContainer}>
						<Image
							style={styles.logo}
							source={require("../../assets/logoImage.png")}
						/>
					</View>
					<ScreenHeader
						title="Welcome back"
						desc="Please enter your details below to continue using your Ndia account."
					/>
					<AccountInputs
						label="Phone number or Email address"
						placeholder="Enter your phone number or email address"
						onChange={handleChange("phoneOrEmail")}
						onBlur={handleBlur("phoneOrEmail")}
						touched={touched.phoneOrEmail}
						value={values.phoneOrEmail}
						isPassword={false}
						error={errors.phoneOrEmail}
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
					<View>
						<Text
							style={styles.txtForgot}
							onPress={() => navigation.navigate("ForgotPassword")}
						>
							Forgot password
						</Text>
					</View>
					<View style={styles.btn}>
						<MainButton
							title="Login"
							bG={secondaryColor}
							onPress={handleSubmit}
							outline={false}
							color={primaryColor}
						/>

						<View style={styles.txtContainer}>
							<View>
								<Text style={styles.txt}>Don’t have an account?</Text>
							</View>

							<View>
								<Text
									style={styles.loginTxt}
									onPress={() => {
										navigation.navigate("Onboarding");
									}}
								>
									Sign up
								</Text>
							</View>
						</View>
					</View>
				</View>
			)}
		</Formik>
	);
};

export default LoginIn;
