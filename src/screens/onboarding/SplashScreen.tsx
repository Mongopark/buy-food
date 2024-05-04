import React from "react";
import { Image, View } from "react-native";
import { styles } from "../../styles/SplashScreen.styles";

const SplashScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
					style={styles.logo}
					source={require("../../assets/logo.png")}
					alt=""
				/>
			</View>
		</View>
	);
};
export default SplashScreen;
