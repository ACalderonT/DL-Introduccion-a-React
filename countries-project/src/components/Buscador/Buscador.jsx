import PropTypes from "prop-types";
import { useState } from "react";

const Buscador = ({ dataFetch, setDataFiltered, countDataFiltered }) => {
	const [showFilterMessage, setShowMessage] = useState("");
	const handleSearch = (e) => {
		e.preventDefault();
		const { value } = e.target;
		const searchedValue = value.toLowerCase();

		const dataBaseFiltered = dataFetch.filter((country) => {
			return (
				country.name.common.toLowerCase().includes(searchedValue) ||
				country.cca2.toLowerCase().includes(searchedValue) ||
				country.capital[0]?.toLowerCase().includes(searchedValue) ||
				country.region.toLowerCase().includes(searchedValue) ||
				country.subregion.toLowerCase().includes(searchedValue)
			);
		});
		setShowMessage(value);
		setDataFiltered(dataBaseFiltered);
	};
	return (
		<>
			<div className="col-4">
				<div className="input-group input-group-sm">
					<input
						type="search"
						className="form-control rounded-pill"
						placeholder="Type for search by code, name, capital, region or subregion... "
						onChange={handleSearch}
					/>
				</div>
				{showFilterMessage ? (
					<div className="form-text" id="basic-addon4">
						Rows Filtered: {countDataFiltered}
					</div>
				) : (
					""
				)}
			</div>
		</>
	);
};

Buscador.propTypes = {
	dataFetch: PropTypes.array.isRequired,
	setDataFiltered: PropTypes.func.isRequired,
    countDataFiltered: PropTypes.number
};

export default Buscador;
