import { View, StyleSheet, Image } from "react-native";
import React from "react";

const styles = StyleSheet.create({
	heroImageContainer: {
		backgroundColor: "#FCFCFC",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: 220,
		marginTop: 20,
		flex: 1,
	},
	image: {
		width: "100%",
		height: "100%",
	},
});

export default function HeroImage() {
	return (
		<View style={styles.heroImageContainer}>
			<Image
				style={styles.image}
				source={require("../assets/WEBlogoBUFF.png")}></Image>
		</View>
	);
}
