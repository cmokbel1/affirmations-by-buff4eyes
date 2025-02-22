import React, { useEffect } from "react";
import {
	View,
	StyleSheet,
	Text,
	Image,
	TouchableOpacity,
	Animated,
	useAnimatedValue,
} from "react-native";

export default function QuoteDisplayCard({
	quote,
	author,
	loadingQuote,
	error,
}: {
	quote: string;
	author: string;
	loadingQuote: boolean;
	error?: Error;
}) {
	const fadeAnim = useAnimatedValue(0);
	const fadeIn = () => {
		// Will change fadeAnim value to 1 in 5 seconds
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 2000,
			useNativeDriver: true,
		}).start();
	};

	const fadeOut = () => {
		// Will change fadeAnim value to 0 in 3 seconds
		Animated.timing(fadeAnim, {
			toValue: 0,
			duration: 2500,
			useNativeDriver: true,
		}).start();
	};

	useEffect(() => {
		fadeIn();
	}, [loadingQuote, error]);
	return (
		<View style={styles.quoteCardContainer}>
			<Animated.View
				style={[
					styles.alternateState,
					// Bind opacity to animated value
					{
						opacity: fadeAnim,
					},
				]}>
				{loadingQuote ? (
					<Text style={styles.loading}>Loading...</Text>
				) : !loadingQuote && error ? (
					<Text style={styles.error}>Something Went wrong...</Text>
				) : (
					<>
						<Text style={styles.quote}>"{quote}"</Text>
						<Text style={styles.author}>- {author}</Text>
					</>
				)}
			</Animated.View>
		</View>
	);
}

const styles = StyleSheet.create({
	quoteCardContainer: {
		backgroundColor: "#FFFFFF",
		paddingTop: 50,
		paddingBottom: 50,
		padding: 10,
	},
	quote: {
		fontSize: 20,
	},
	author: {
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "right",
	},
	loading: {
		textAlign: "center",
		fontSize: 30,
	},
	error: {
		textAlign: "center",
		fontSize: 30,
		color: "darkred",
	},
	alternateState: {
		opacity: 0,
	},
});
