import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ArrowLeft2, ExportCurve, Heart } from "iconsax-react-native";
import { styles } from "../../styles/VendorSelection.styles";

const MenuHeader = () => {
	return (
		<View style={styles.imageWrap}>
			<TouchableOpacity onPress={() => {}} style={styles.icon}>
				<ArrowLeft2 color="#ffffff" />
			</TouchableOpacity>
			<View style={styles.flex}>
				<TouchableOpacity style={styles.icon}>
					<ExportCurve size="20" color="#ffffff" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.icon}>
					<Heart size="20" color="#ffffff" />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default MenuHeader;
