import { takeLatest, put, fork, call } from "redux-saga/effects";
import { getWeatherStatus, setWeatherStatus } from "./feature/weatherSlice";
import { fetchCurrWeatherStatus } from "./api";

function* onGetWeatherStatusAsync({ payload }) {
	try {
		const cityName = payload;
		const response = yield call(fetchCurrWeatherStatus, cityName);
		if (response) {
			yield put(setWeatherStatus({ ...response }));
		}
	} catch (error) {
		console.log(error);
	}
}
function* onGetWeatherStatus() {
	yield takeLatest(getWeatherStatus.type, onGetWeatherStatusAsync);
}

export const weatherSaga = [fork(onGetWeatherStatus)];
