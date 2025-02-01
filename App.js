import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	SafeAreaView,
	TouchableOpacity,
	statusBarStyle,
	statusBarTransition,
} from "react-native";
import { React } from "react";

//TODO: find a font family that looks better for titles and buttons
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFAE3",
		alignItems: "center",
		justifyContent: "center",
	},
	titleContainer: {
		backgroundColor: "#FCFCFC",
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 16,
		marginTop: 16,
	},
	subTitle: {
		fontSize: 16,
		textAlign: "center",
		marginBottom: 16,
		marginTop: 16,
	},
	button: {
		marginTop: 16,
		paddingVertical: 8,
		borderWidth: 1.5,
		borderColor: "#20232a",
		borderRadius: 3,
		backgroundColor: "#61dafb",
		color: "#20232a",
		fontSize: 30,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 2,
		borderBottomColor: "#737373",
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
});

const Separator = () => <View style={styles.separator} />;

export default function App() {
	const handleChange = (e) => {
		e.preventDefault();
		console.log("Button clicked");
	};
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<View style={styles.titleContainer}>
					<Image source="./assets/WEBlogoBUFF.png"></Image>
					<Text style={styles.title}>Affirmations by Buff4eyes</Text>
					<Separator />
				</View>
				<View>
					<Text style={styles.subTitle}>
						Positive affirmations to begin your day!
					</Text>
					<StatusBar
						translucent="true"
						style="auto"
						networkActivityIndicatorVisible="true"
					/>
				</View>
				<View>
					<Text>
						Display generic text here -- eventually replace with queried quote
						from DB
					</Text>
					<TouchableOpacity
						style={styles.button}
						onPress={(e) => handleChange(e)}>
						<Text style={{ textAlign: "center" }}>Generate Affirmation</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
