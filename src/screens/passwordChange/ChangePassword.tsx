import { StyleSheet, View } from "react-native";
import React from "react";
import GoBackHeader from "../../components/header/GoBackHeader";
import { backgroundColor, secondaryColor } from "../../constants/colors";
import AccountInputs from "../../components/inputs/AccountInputs";
import MainButton from "../../components/button/MainButton";
import ScreenHeader from "../../components/header/ScreenHeader";
import { Formik } from "formik";
import {
	ChangePasswordProps,
	initialValues,
	validationSchema,
} from "../../validators/ChangePassword";
import { useNavigation } from "@react-navigation/native";

const ChangePassword = () => {
	const { navigate } = useNavigation<any>();

	const onSubmit = (values: ChangePasswordProps) => {
		console.log({ changePassword: values });
		navigate("ProfileScreen");
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{({
				handleChange,
				handleSubmit,
				handleBlur,
				errors,
				values,
				touched,
			}) => (
				<View style={styles.container}>
					<GoBackHeader title="Change password" />
					<View style={styles.screenContainer}>
						<ScreenHeader
							title="Create new password"
							desc="Please provide us with a new phone number so we can verify it"
						/>
						<AccountInputs
							label="Current password"
							onChange={handleChange("currentPassword")}
							onBlur={handleBlur("currentPassword")}
							touched={touched.currentPassword}
							error={errors.currentPassword}
							value={values.currentPassword}
							placeholder="at least 8 characters"
							isPassword={false}
						/>
						<AccountInputs
							label="New password"
							onChange={handleChange("newPassword")}
							onBlur={handleBlur("newPassword")}
							touched={touched.newPassword}
							error={errors.newPassword}
							value={values.newPassword}
							placeholder="at least 8 characters"
							isPassword={false}
						/>
						<AccountInputs
							label="Confirm new password"
							onChange={handleChange("confirmNewPassword")}
							onBlur={handleBlur("confirmNewPassword")}
							touched={touched.confirmNewPassword}
							error={errors.confirmNewPassword}
							value={values.confirmNewPassword}
							placeholder="at least 8 characters"
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

export default ChangePassword;

const styles = StyleSheet.create({
	screenContainer: {
		paddingHorizontal: 16,
		flex: 1,
	},
	btn: {
		position: "absolute",
		bottom: 30,
		width: "100%",
		marginLeft: 10,
	},
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: backgroundColor,
	},
});
