import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { getAllCountries } from "../../services/services";
import CountryDetail from "../../modals/CountryDetail/CountryDetail";

const MiApi = ({ dataFetch, dataFiltered, setDataFetch, setDataFiltered }) => {
	const [showDetail, setShowDetail] = useState(false);
    const [detailProps, setDetailProps] = useState({});
    const [countryHash, setCountryHash] = useState({});
	const [sort, setSort] = useState({
		prop: "",
		type: "asc",
	});

	useEffect(() => {
		getAllCountries().then((response) => {
			setDataFiltered(response);
			setDataFetch(response);
            let newHash = {}
            response.map((country) => {
                newHash[country.cca3] = country.name.common
            })
            setCountryHash(newHash)
		});
	}, []);

	const handleDetailClick = (country) => { 
        setDetailProps(country)
        setShowDetail(true)
    };

	const handleSort = (prop) => {
		let newSortType = "";
		const props = prop.split(".");
		const firstProp = props[0];
		const secondProp = props[1];
		const sortedData = [...dataFiltered];

		if (sort.prop && sort.type === "asc") {
			setDataFiltered(dataFetch);
			setSort({
				prop: "",
				type: newSortType,
			});
			return;
		} else if (sort.prop && sort.type === "desc") {
			newSortType = "asc";
			sortedData.sort((a, b) =>
				secondProp
					? a[firstProp][secondProp] < b[firstProp][secondProp]
						? -1
						: 1
					: a[prop] < b[prop]
					? -1
					: 1
			);
			setDataFiltered(sortedData);
		} else {
			newSortType = "desc";
			sortedData.sort((a, b) =>
				secondProp
					? a[firstProp][secondProp] < b[firstProp][secondProp]
						? 1
						: -1
					: b[prop] > a[prop]
					? 1
					: -1
			);
			setDataFiltered(sortedData);
		}

		setSort({
			prop: prop,
			type: newSortType,
		});
	};

	return (
		<>
			{showDetail ? (
				<CountryDetail setShowDetail={setShowDetail} detailProps={detailProps} countryHash={countryHash}/>
			) : (
				<div className="container-fluid p-5">
					<div className="table-responsive">
						<table className="table table-striped table-hover text-center align-middle">
							<thead>
								<tr>
									<th></th>
									<th>
										<div className="d-flex">
											<p className="m-0 text-center flex-grow-1">
												code
											</p>
											<button
												className="border-0 bg-transparent"
												onClick={() =>
													handleSort("cca2")
												}
											>
												{sort.prop == "cca2" ? (
													sort.type == "asc" ? (
														<i className="fa-solid fa-sort-up ms-auto sort-icon text-success"></i>
													) : (
														<i className="fa-solid fa-sort-down ms-auto sort-icon text-success"></i>
													)
												) : (
													<i className="fa-solid fa-sort ms-auto sort-icon text-muted"></i>
												)}
											</button>
										</div>
									</th>
									<th>
										<div className="d-flex">
											<p className="m-0 text-center flex-grow-1">
												name
											</p>
											<button
												className="border-0 bg-transparent"
												onClick={() =>
													handleSort("name.common")
												}
											>
												{sort.prop == "name.common" ? (
													sort.type == "asc" ? (
														<i className="fa-solid fa-sort-up ms-auto sort-icon text-success"></i>
													) : (
														<i className="fa-solid fa-sort-down ms-auto sort-icon text-success"></i>
													)
												) : (
													<i className="fa-solid fa-sort ms-auto sort-icon text-muted"></i>
												)}
											</button>
										</div>
									</th>
									<th>
										<div className="d-flex">
											<p className="m-0 text-center flex-grow-1">
												capital
											</p>
											<button
												className="border-0 bg-transparent"
												onClick={() =>
													handleSort("capital")
												}
											>
												{sort.prop == "capital" ? (
													sort.type == "asc" ? (
														<i className="fa-solid fa-sort-up ms-auto sort-icon text-success"></i>
													) : (
														<i className="fa-solid fa-sort-down ms-auto sort-icon text-success"></i>
													)
												) : (
													<i className="fa-solid fa-sort ms-auto sort-icon text-muted"></i>
												)}
											</button>
										</div>
									</th>
									<th>
										<div className="d-flex">
											<p className="m-0 text-center flex-grow-1">
												region
											</p>
											<button
												className="border-0 bg-transparent"
												onClick={() =>
													handleSort("region")
												}
											>
												{sort.prop == "region" ? (
													sort.type == "asc" ? (
														<i className="fa-solid fa-sort-up ms-auto sort-icon text-success"></i>
													) : (
														<i className="fa-solid fa-sort-down ms-auto sort-icon text-success"></i>
													)
												) : (
													<i className="fa-solid fa-sort ms-auto sort-icon text-muted"></i>
												)}
											</button>
										</div>
									</th>
									<th>
										<div className="d-flex">
											<p className="m-0 text-center flex-grow-1">
												subregion
											</p>
											<button
												className="border-0 bg-transparent"
												onClick={() =>
													handleSort("subregion")
												}
											>
												{sort.prop == "subregion" ? (
													sort.type == "asc" ? (
														<i className="fa-solid fa-sort-up ms-auto sort-icon text-success"></i>
													) : (
														<i className="fa-solid fa-sort-down ms-auto sort-icon text-success"></i>
													)
												) : (
													<i className="fa-solid fa-sort ms-auto sort-icon text-muted"></i>
												)}
											</button>
										</div>
									</th>
									<th>
										<div className="d-flex">
											<p className="m-0 text-center flex-grow-1">
												population
											</p>
											<button
												className="border-0 bg-transparent"
												onClick={() =>
													handleSort("population")
												}
											>
												{sort.prop == "population" ? (
													sort.type == "asc" ? (
														<i className="fa-solid fa-sort-up ms-auto sort-icon text-success"></i>
													) : (
														<i className="fa-solid fa-sort-down ms-auto sort-icon text-success"></i>
													)
												) : (
													<i className="fa-solid fa-sort ms-auto sort-icon text-muted"></i>
												)}
											</button>
										</div>
									</th>
									<th>More Details</th>
								</tr>
							</thead>
							<tbody className="table-group-divider">
								{dataFiltered?.length > 0 ? (
									dataFiltered?.map((country, index) => (
										<tr key={index}>
											<td>{country.flag}</td>
											<td>{country.cca2}</td>
											<td>{country.name.common}</td>
											<td>{country.capital}</td>
											<td>{country.region}</td>
											<td>{country.subregion}</td>
											<td>
												{country.population.toLocaleString()}
											</td>
											<td>
												<button
													type="button"
													className="btn btn-sm no-border"
													onClick={() => handleDetailClick(country)}
												>
													<i className="fa-regular fa-square-plus text-success"></i>
												</button>
											</td>
										</tr>
									))
								) : (
									<tr>
										<td colSpan={8}>
											No se han encontrado registros.
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>
			)}
		</>
	);
};

MiApi.propTypes = {
	dataFetch: PropTypes.array.isRequired,
	dataFiltered: PropTypes.array.isRequired,
	setDataFetch: PropTypes.func.isRequired,
	setDataFiltered: PropTypes.func.isRequired
};

export default MiApi;
