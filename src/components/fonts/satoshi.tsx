import React, { FC, ReactNode } from "react";
import { Text, TextProps, StyleSheet } from "react-native";

interface SatoshiProps extends TextProps {
	children: ReactNode;
	style?: any;
}

const Satoshi: FC<SatoshiProps> = ({ children, style, ...restProps }) => {
	return (
		<Text style={[styles.text, style]} {...restProps}>
			{children}
		</Text>
	);
};

const styles = StyleSheet.create({
	text: {
		fontFamily: "satoshi-regular",
	},
});

export default Satoshi;
