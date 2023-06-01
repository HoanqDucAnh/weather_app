import axios from "axios";

const baseURL = "http://api.weatherapi.com/v1";
const endpoint = "/forecast.json";
const apiKey = "64675af6ee94420fb9f84925232905";

export const fetchCurrWeatherStatus = async (location) => {
	const url = `${baseURL}${endpoint}?key=${apiKey}&q=${location}`;
	try {
		const response = await axios.get(url);
		const data = response.data;
		return data;
	} catch (error) {
		console.log(error);
		return null;
	}
};
