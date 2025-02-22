import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AppSubTitle() {
	return (
		<View style={styles.subTitleContainer}>
			<Text style={styles.subTitle}>
				Start your day off right, or find motivation throughout your day. Ditch
				the blame list of the 99% and imprint these affirmations and quotations
				on your subconscious mind. Repeat them to yourself throughout the day,
				or write them on a card and carry it with you wherever you go.
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	subTitleContainer: {
		padding: 10,
		flex: 1,
	},
	subTitle: {
		fontSize: 20,
		textAlign: "center",
		marginBottom: 16,
		marginTop: 16,
	},
});
