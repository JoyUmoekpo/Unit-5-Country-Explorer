import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";
import { setLoadingFalse, setLoadingTrue } from "../redux/slices/loadingSlice";

const Weather = () => {
	const [weather, setWeather] = useState();
	let display = useSelector(selectDisplay);
	const dispatch = useDispatch();

	let latitude = display.capitalInfo.latlng[0];
	let longitude = display.capitalInfo.latlng[1];

	useEffect(() => {
		dispatch(setLoadingTrue());
		const options = {
			method: "GET",
			url: "https://weatherapi-com.p.rapidapi.com/current.json",
			params: { q: `${latitude}, ${longitude}` },
			headers: {
				"X-RapidAPI-Key": "41fcae3ee6mshf0e229e9e01ab0bp166308jsne9f57a0ecfda",
				"X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
			},
		};

		axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
				setWeather(response.data);
				dispatch(setLoadingFalse());
			})
			.catch(function (error) {
				console.error(error);
				dispatch(setLoadingFalse());
				alert("No weather data found.");
			});
	}, [latitude, longitude, dispatch]);

	return (
		<div>
			<table className="overview-table">
				<tr>
					<td>Conditions: </td>
					<td>{weather?.current?.condition?.text}</td>
				</tr>
				<tr>
					<td>Temperature: </td>
					<td>{weather?.current.temp_f} degrees Fahrenheit</td>
				</tr>
				<tr>
					<td>Feels Like: </td>
					<td>{weather?.current?.feelslike_f} degrees Fahrenheit</td>
				</tr>
				<tr>
					<td>Humidity: </td>
					<td>{weather?.current?.humidity}%</td>
				</tr>
				<tr>
					<td>Wind Speed: </td>
					<td>
						{weather?.current?.wind_mph} mph {weather?.current?.wind_dir}
					</td>
				</tr>
			</table>
		</div>
	);
};

export default Weather;
