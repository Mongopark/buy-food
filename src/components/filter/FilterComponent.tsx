import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CheckBox from "expo-checkbox";

import { styles } from "../../styles/FilterComponent.styles";

const FilterComponent = ({ setQuery }: any) => {
	const [filterState, setFilterState] = useState([
		{ name: "Near me", value: false },
		{ name: "Cheapest delivery", value: false },
		{ name: "Best rated", value: false },
	]);

	const setToggleCheckBox = (index: number, newValue: boolean) => {
		setFilterState((prevFilterState) => {
			const updatedFilterState = [...prevFilterState];
			updatedFilterState[index] = {
				...updatedFilterState[index],
				value: newValue,
			};
			return updatedFilterState;
		});
	};
	//
	return (
		<View style={styles.modalCOntent}>
			<View style={styles.indicator} />
			{filterState.map((e: { name: string; value: boolean }, i: number) => (
				<View style={styles.checkboxContainer} key={i}>
					<Text style={styles.text}>{e.name}</Text>
					<CheckBox
						value={e.value}
						onValueChange={(newValue) => setToggleCheckBox(i, newValue)}
						color="#FFB80E"
						style={styles.checkbox}
					/>
				</View>
			))}
			<TouchableOpacity
				onPress={() => setQuery(filterState)}
				style={styles.button}
			>
				<Text style={{ color: "#000", fontWeight: "700", fontSize: 16 }}>
					Get Started
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default FilterComponent;
