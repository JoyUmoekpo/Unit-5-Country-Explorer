import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
	let currentDisplay = useSelector(selectDisplay);
	return (
		<div className="stack">
			<h1>{currentDisplay.name.official}</h1>
			<h2>"{currentDisplay.name.common}"</h2>
			{currentDisplay.flags ? (
				<img src={currentDisplay.flags.svg} alt="Selected Country's Flag"/>
			) : (
				"(No Flags Found)"
			)}
			<table className="overview-table">
				<tr>
					<td>Alt. Spellings: </td>
					<td>
						<td>
							{currentDisplay.altSpellings.map((e) => (
								<td>{e}</td>
							))}
							{/* .join(' , ') */}
						</td>
					</td>
				</tr>
				<tr>
					<td>Region: </td>
					<td>{currentDisplay.region}</td>
				</tr>
				<tr>
					<td>Capital: </td>
					{currentDisplay.capital.map((e) => (
						<td>{e}</td>
					))}
				</tr>
				<tr>
					<td>Population: </td>
					<td>{currentDisplay.population}</td>
				</tr>
				<tr>
					<td>Starting Weekday: </td>
					<td>{currentDisplay.startOfWeek}</td>
				</tr>
        <tr>
          <td>Google Maps Link: </td>
          <td>{currentDisplay.maps.googleMaps}</td>
        </tr>
			</table>
		</div>
	);
};

export default Overview;
