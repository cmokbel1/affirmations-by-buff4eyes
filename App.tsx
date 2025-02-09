import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	SafeAreaView,
	TouchableOpacity,
	GestureResponderEvent,
} from "react-native";
import AppHeader from "./components/AppHeader";
import HeroImage from "./components/HeroImage";
import QuoteDisplayCard from "./components/QuoteDisplayCard";
import AppSubTitle from "./components/AppSubTitle";
import React, { useState } from "react";
import { getQuote } from "./http/getQuote";
import type { Quote } from "./types/quote";

//TODO: find a font family that looks better for titles and buttons
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFAE3",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 16,
		marginTop: 16,
	},
	button: {
		flex: 1,
		marginTop: 65,
		paddingVertical: 8,
		borderWidth: 1.5,
		borderColor: "#99E1D9",
		borderRadius: 20,
		backgroundColor: "#99E1D9",
		color: "#20232a",
		fontSize: 60,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 4,
		borderBottomColor: "#737373",
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
});

const Separator = () => <View style={styles.separator} />;

export default function App() {
	const [displayQuote, setDisplayQuote] = useState<Quote | undefined>();
	const [error, setError] = useState<Error | undefined>();
	const [loadingQuote, setLoadingQuote] = useState<boolean>(false);

	const handleChange = async (e: GestureResponderEvent) => {
		setLoadingQuote(true);
		e.preventDefault();
		const quote = await getQuote();
		console.log(quote);
		setLoadingQuote(false);
	};

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<AppHeader />
				<HeroImage />
				<Separator />
				<AppSubTitle />
				<Separator />
				{/* This should be moved to its own component so that we can just render the component on the app itself instead of all the content within it */}
				<QuoteDisplayCard
					quote={displayQuote?.quote ?? "test quote number 1"}
					author={displayQuote?.author ?? "Test Author"}
				/>
				<View>
					<TouchableOpacity
						disabled={loadingQuote}
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
			</ScrollView>
		</SafeAreaView>
	);
}
