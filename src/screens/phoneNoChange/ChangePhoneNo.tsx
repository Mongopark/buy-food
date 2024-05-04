import { StyleSheet, View } from "react-native";
import React from "react";
import GoBackHeader from "../../components/header/GoBackHeader";
import MainButton from "../../components/button/MainButton";
import { backgroundColor, secondaryColor } from "../../constants/colors";
import ScreenHeader from "../../components/header/ScreenHeader";
import AccountInputs from "../../components/inputs/AccountInputs";
import { Formik } from "formik";
import {
	PasswordProps,
	initialValues,
	validationSchema,
} from "../../validators/phoneNoValidator";
import { useNavigation } from "@react-navigation/native";
import api from "../../api";

const ChangePhoneNo = () => {
	const { navigate } = useNavigation<any>();
	const onSubmit = async (values: PasswordProps) => {
		// console.log({ changePhoneNo: values });
		try {
			let res = await api.patch('/customers/update', {
				phoneNumber: values.phoneNo,
			});

			console.log(res.data)
		} catch (error) {
			
		}

		// navigate("OtpPhoneChange");
	};
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{({
				touched,
				handleBlur,
				handleChange,
				handleSubmit,
				errors,
				values,
			}) => (
				<View style={styles.container}>
					<GoBackHeader title="Change phone number" />
					<View style={styles.screenContainer}>
						<ScreenHeader
							title="Enter new phone number"
							desc="Please provide us with a new phone number so we can verify it"
						/>
						<AccountInputs
							label="PhoneNumber"
							onChange={handleChange("phoneNo")}
							onBlur={handleBlur("phoneNo")}
							touched={touched.phoneNo}
							error={errors.phoneNo}
							value={values.phoneNo}
							placeholder="at least 11 digits"
							isPassword={false}
						/>
						<View style={styles.btn}>
							<MainButton
								title="Continue"
								outline={false}
								onPress={handleSubmit}
								bG={secondaryColor}
								color="#fff"
							/>
						</View>
					</View>
				</View>
			)}
		</Formik>
	);
};

export default ChangePhoneNo;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: backgroundColor,
	},

	screenContainer: {
		paddingHorizontal: 15,
		flex: 1,
	},
	btn: {
		position: "absolute",
		bottom: 30,
		width: "100%",
		marginLeft: 10,
	},
});
