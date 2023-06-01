import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
	name: "weather",
	initialState: {
		weatherList: [],
	},
	reducers: {},
});

export default weatherSlice.reducer;
