import axios from "axios";
import type { Quote } from "../types/quote";

const api = axios.create({
	baseURL: "http://localhost:8080",
	transformResponse: (response: any) => {
		console.log("response", response);
		return response;
	},
});

export const getQuote = async (): Promise<Quote | Error> => {
	try {
		// const response = await api.get("/");
		const response = await fetch("http://192.168.87.226:8080/api/quote", {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});

		const json = await response.json();
		console.log("response", JSON.stringify(json));
		console.log("getQuote(): fetch status:", response.status);
		return json;
	} catch (error: any) {
		console.log("error:", JSON.stringify(error));
		return error;
	}
};
