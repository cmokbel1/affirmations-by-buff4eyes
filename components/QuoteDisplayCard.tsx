import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
	quoteCardContainer: {
		backgroundColor: "#FFFAE3",
		flex: 1,
		marginTop: 115,
		marginBottom: 50,
	},
	quote: {
		fontSize: 20,
	},
	author: {
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "right",
	},
});

export default function QuoteDisplayCard({
	quote,
	author,
}: {
	quote: string;
	author: string;
}) {
	return (
		<View style={styles.quoteCardContainer}>
			<Text style={styles.quote}>"{quote}"</Text>
			<Text style={styles.author}>- {author}</Text>
		</View>
	);
}
