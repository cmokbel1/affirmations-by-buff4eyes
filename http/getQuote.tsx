import axios from "axios";
import type { Quote } from "../types/quote";

const api = axios.create({
	baseURL: "http://localhost:8080/api",
});

export const getQuote = async (): Promise<Quote | Error> => {
	try {
		const response = await api.get("/quote");
		console.log("response", response);
		return response.data;
	} catch (error: any) {
		const apiReturnedError = new Error(error.message);
		return apiReturnedError;
	}
};
