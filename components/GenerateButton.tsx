import {
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
	Text,
	GestureResponderEvent,
} from "react-native";
import React from "react";
import { getQuote } from "../http/getQuote";
import { Quote } from "../types/quote";

export default function GenerateButton({
	setLoadingQuote,
	setDisplayQuote,
	setError,
}: {
	setLoadingQuote: React.Dispatch<React.SetStateAction<boolean>>;
	setDisplayQuote: React.Dispatch<React.SetStateAction<Quote | undefined>>;
	setError: React.Dispatch<React.SetStateAction<Error | undefined>>;
}) {
	const handleChange = async (e: GestureResponderEvent) => {
		setLoadingQuote(true);
		e.preventDefault();
		const quote = await getQuote();
		if (quote instanceof Error) {
			setError(quote);
		} else {
			setDisplayQuote(quote);
		}
		console.log("quote:", quote);
		setLoadingQuote(false);
	};

	return (
		<View style={styles.buttonContainer}>
			<TouchableOpacity
				disabled={false}
				style={styles.button}
				onPress={(e) => handleChange(e)}>
				<Text
					style={{
						textAlign: "center",
						fontSize: 20,
						color: "#ffffff",
					}}>
					Generate Affirmation
				</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		flex: 1,
		padding: 10,
	},
	button: {
		flex: 1,
		marginTop: 65,
		paddingVertical: 8,
		borderWidth: 1.5,
		borderColor: "#191970",
		borderRadius: 20,
		backgroundColor: "#191970",
		color: "#20232a",
		fontSize: 60,
		fontWeight: "bold",
	},
});
