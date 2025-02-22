import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	SafeAreaView,
	TouchableOpacity,
	Pressable,
	Modal,
} from "react-native";
import ModalComponent from "./shared/ModalComponent";
import HeroImage from "./HeroImage";

interface IUserLoginDetails {
	user: string;
	password: string;
}

export default function AppHeader() {
	// this should be extracted to a global shared state file
	const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
	// user login information
	const [userLoginDetails, setUserLoginDetails] = useState<IUserLoginDetails>({
		user: "Test",
		password: "test1234",
	});
	const [isModalVisible, setIsModalVisible] = useState(false);

	const handleModalOpen = () => {
		setIsModalVisible(true);
	};

	const handleModalClose = () => {
		setIsModalVisible(false);
	};

	const login = ({ user, password }: { user: string; password: string }) => {
		console.log(user, password);
		setIsUserLoggedIn(true);
	};
	return (
		<View style={styles.header}>
			<HeroImage />
			<View>
				<Pressable onPress={() => handleModalOpen()}>
					<Text style={styles.userButton}>
						{isUserLoggedIn ? "Account" : "Sign In"}
					</Text>
				</Pressable>
				<ModalComponent
					isVisible={isModalVisible}
					onClose={() => handleModalClose()}
				/>
				<Text style={styles.userButton}></Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		height: 50,
		backgroundColor: "#191970",
		display: "flex",
		justifyContent: "space-between",
		flexDirection: "row",
		padding: 10,
		flex: 1,
		width: "100%",
	},
	userButton: {
		color: "white",
		fontSize: 16,
		marginRight: 10,
	},
});
