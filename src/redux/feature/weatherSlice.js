import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
	name: "weather",
	initialState: {
		weatherStatus: {},
	},
	reducers: {
		getWeatherStatus(city) {
			return city;
		},
		setWeatherStatus: (state, action) => {
			state.weatherStatus = action.payload;
		},
	},
});

export const { getWeatherStatus, setWeatherStatus } = weatherSlice.actions;

export default weatherSlice.reducer;
