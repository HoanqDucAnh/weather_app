import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import WeatherReducer from "./feature/weatherSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		weather: WeatherReducer,
	},
	middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
