import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	subTitleContainer: {
		flex: 1,
	},
	subTitle: {
		fontSize: 20,
		textAlign: "center",
		marginBottom: 16,
		marginTop: 16,
	},
});

export default function AppSubTitle() {
	return (
		<View style={styles.subTitleContainer}>
			<Text style={styles.subTitle}>
				Start your day off right, or find motivation throughout your day.
			</Text>
		</View>
	);
}
