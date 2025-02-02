import React, { useState } from "react";
import {
	Alert,
	Modal,
	StyleSheet,
	Text,
	View,
	Pressable,
	TextInput,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	modalView: {
		width: 300,
		margin: 20,
		height: 300,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 5,
			height: 5,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
		margin: 10,
		width: 100,
		height: 50,
		justifyContent: "center",
	},
	buttonPrimary: {
		backgroundColor: "blue",
	},
	buttonSecondary: {
		backgroundColor: "gray",
	},
	buttonOpen: {
		backgroundColor: "#F194FF",
	},
	buttonClose: {
		backgroundColor: "#2196F3",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
	input: {
		height: 40,
		width: 275,
		borderRadius: 10,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
	buttonContainer: {
		justifyContent: "flex-start",
		flex: 1,
		flexDirection: "row",
	},
});

export default function ModalComponent({
	isVisible,
	onClose,
}: {
	isVisible: boolean;
	onClose: CallableFunction;
}) {
	const [userLoginInformation, setUserLoginInformation] = useState({
		username: "",
		password: "",
	});

	const onLogin = (userLoginInformation: any) => {
		console.log(userLoginInformation);
		if (
			!userLoginInformation.username.length ||
			!userLoginInformation.password.length
		)
			return;
		else onClose();
	};
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.centeredView}>
				<Modal
					animationType="fade"
					transparent={true}
					visible={isVisible}
					onRequestClose={() => {
						Alert.alert("Modal has been closed.");
						onClose();
					}}>
					<BlurView
						intensity={100}
						tint="dark"
						style={styles.centeredView}>
						<View style={styles.centeredView}>
							<View style={styles.modalView}>
								<Text style={styles.modalText}>Log In to Continue</Text>
								<TextInput
									style={styles.input}
									value={userLoginInformation.username}
									onChangeText={(text) =>
										setUserLoginInformation({
											...userLoginInformation,
											username: text,
										})
									}
									placeholder="username"
								/>
								<TextInput
									style={styles.input}
									value={userLoginInformation.password}
									onChangeText={(text) =>
										setUserLoginInformation({
											...userLoginInformation,
											password: text,
										})
									}
									placeholder="password"
								/>
								<View style={styles.buttonContainer}>
									<Pressable
										style={[
											styles.button,
											styles.buttonClose,
											styles.buttonSecondary,
										]}
										onPress={() => onClose()}>
										<Text style={styles.textStyle}>Close</Text>
									</Pressable>
									<Pressable
										style={[
											styles.button,
											styles.buttonClose,
											styles.buttonPrimary,
										]}
										onPress={() => onLogin(userLoginInformation)}>
										<Text style={styles.textStyle}>Log In</Text>
									</Pressable>
								</View>
							</View>
						</View>
					</BlurView>
				</Modal>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
