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
import GenerateButton from "./components/GenerateButton";

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

	return (
		<SafeAreaView style={styles.container}>
			<AppHeader />
			<ScrollView>
				<AppSubTitle />
				<Separator />
				{/* This should be moved to its own component so that we can just render the component on the app itself instead of all the content within it */}
				<QuoteDisplayCard
					error={error}
					loadingQuote={loadingQuote}
					quote={displayQuote?.quote ?? "test quote number 1"}
					author={displayQuote?.author ?? "Test Author"}
				/>
				<Separator />
				<GenerateButton
					setDisplayQuote={setDisplayQuote}
					setError={setError}
					setLoadingQuote={setLoadingQuote}
				/>
			</ScrollView>
			<View>
				<Text>&copy; Buff4eyes 2025 Affirmations by Buff4eyes</Text>
			</View>
		</SafeAreaView>
	);
}
