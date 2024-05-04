import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { ReactNode, ChangeEvent } from "react";
import { styles } from "../../styles/AccountInputs";

type AccountInputsProps = {
	label: string;
	placeholder?: string;
	icon?: boolean;
	variant?: ReactNode;
	onChange: (e: string | ChangeEvent<any>) => void;
	onBlur: (e: string | ChangeEvent<any>) => void;
	touched: any;
	error: any;
	value: string;
	showPassword?: boolean;
	toggleIcon?: () => void;
	isPassword: boolean;
	isEditable?: boolean;
};

const AccountInputs = ({
	label,
	placeholder,
	icon,
	variant,
	onChange,
	touched,
	error,
	value,
	showPassword,
	toggleIcon,
	isPassword,
	isEditable,
}: AccountInputsProps) => {
	return (
		<View style={styles.nameField}>
			<Text style={styles.label}> {label}</Text>
			<View style={styles.input}>
				<TextInput
					onChangeText={onChange}
					autoComplete="email"
					placeholder={placeholder}
					secureTextEntry={isPassword && !showPassword}
					value={value}
					autoFocus={true}
					editable={isEditable}
					style={styles.textInput}
				/>
				<TouchableOpacity onPress={toggleIcon}>
					{icon ? variant : null}
				</TouchableOpacity>
			</View>
			{touched && error && <Text style={styles.error}>{error}</Text>}
		</View>
	);
};

export default AccountInputs;
