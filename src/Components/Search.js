import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWeatherStatus } from "../redux/feature/weatherSlice";
import { Form, Button } from "react-bootstrap";

export const Search = () => {
	const [city, setCity] = useState("London");
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getWeatherStatus(city));
	}, [dispatch]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(getWeatherStatus(city));
	};

	const handleCityChange = (e) => {
		setCity(e.target.value);
	};

	return (
		<>
			<h2>City weather</h2>
			<div>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>City</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter city"
							value={city}
							onChange={handleCityChange}
						/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		</>
	);
};
