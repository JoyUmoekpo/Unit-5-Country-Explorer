import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
	let currentDisplay = useSelector(selectDisplay);
	return (
		<div className="stack">
			<h1>{currentDisplay.name.official}</h1>
			<h2>"{currentDisplay.name.common}"</h2>
			<h2>{currentDisplay.flags.png}</h2>
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
					<td>Capitol: </td>
					{currentDisplay.capital.map((e) => (
						<td>{e}</td>
					))}
				</tr>
				<tr>
					<td>Population: </td>
					<td>{currentDisplay.population}</td>
				</tr>
				<tr>
					<td>Language: </td>
					<td>{currentDisplay.languages.lit}</td>
				</tr>
				<tr>
					<td>Timezones: </td>
					{currentDisplay.timezones.map((e) => (
						<td>{e}</td>
					))}
				</tr>
				<tr>
					<td></td>
					<td></td>
				</tr>
			</table>
		</div>
	);
};

export default Overview;