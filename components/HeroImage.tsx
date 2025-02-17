import { View, StyleSheet, Image } from "react-native";
import React from "react";

const styles = StyleSheet.create({
	heroImageContainer: {
		height: 50,
		width: 50,
	},
	image: {
		width: "100%",
		height: "100%",
		objectFit: "contain",
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
