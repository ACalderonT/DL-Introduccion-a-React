import PropTypes from "prop-types";

const CountryDetail = ({ setShowDetail, detailProps, countryHash }) => {
	const handleClose = () => setShowDetail(false);

	return (
		<>
			<div className="container-fluid">
				<button
					className="button btn no-border p-4"
					onClick={handleClose}
				>
					<i className="fa-solid fa-left-long fa-2xl"></i>
				</button>
				<span>Back to table</span>
				<div className="row p-4 g-2 align-items-center justify-content-evenly">
					<h1 className="text-center">{detailProps.name.common}</h1>
					<div className="col-6 flag-shield">
						<img
							className="img-fluid"
							src={detailProps.flags.svg}
						/>
					</div>
					<div className="col-6 flag-shield">
						<img
							className="img-fluid"
							src={detailProps.coatOfArms.svg}
						/>
					</div>
					<div className="col-12">
						<p className="text-center my-4 p-2 fw-semibold">{detailProps.flags.alt}</p>
					</div>
                    <div className="row justify-content-center my-5 p-5">
                        <label htmlFor="officialName" className="col-2 col-form-label fw-bold">Official Name:</label>
                        <div className="col-10">
                            <input type="text" readOnly className="form-control-plaintext" id="officialName" value={detailProps.name.official} />
                        </div>

                        <label htmlFor="capital" className="col-2 col-form-label fw-bold">Capital:</label>
                        <div className="col-10">
                            <input type="text" readOnly className="form-control-plaintext" id="capital" value={detailProps.capital} />
                        </div>

                        <label htmlFor="region" className="col-2 col-form-label fw-bold">Region:</label>
                        <div className="col-10">
                            <input type="text" readOnly className="form-control-plaintext" id="region" value={detailProps.region} />
                        </div>

                        <label htmlFor="subregion" className="col-2 col-form-label fw-bold">Subregion:</label>
                        <div className="col-10">
                            <input type="text" readOnly className="form-control-plaintext" id="subregion" value={detailProps.subregion} />
                        </div>

                        <label htmlFor="population" className="col-2 col-form-label fw-bold">Population:</label>
                        <div className="col-10">
                            <input type="text" readOnly className="form-control-plaintext" id="officialName" value={detailProps.population.toLocaleString()} />
                        </div>

                        <label htmlFor="area" className="col-2 col-form-label fw-bold">Area:</label>
                        <div className="col-10">
                            <input type="text" readOnly className="form-control-plaintext" id="area" value={detailProps.area.toLocaleString()} />
                        </div>
                        
                        <label htmlFor="code" className="col-2 col-form-label fw-bold">Code:</label>
                        <div className="col-10">
                            <input type="text" readOnly className="form-control-plaintext" id="code" value={detailProps.cca2} />
                        </div>

                        <label htmlFor="independent" className="col-2 col-form-label fw-bold">Independent:</label>
                        <div className="col-10">
                            <span className="form-control-plaintext" id="independent" >{detailProps.independent ? <i className="fa-solid fa-square-check text-success"></i> : <i className="fa-solid fa-square-xmark text-danger"></i>}</span>
                        </div>
                        <label htmlFor="borders" className="col-2 col-form-label fw-bold">Borders:</label>
                        <div className="col-10">
                            <input type="text" readOnly className="form-control-plaintext" id="borders" value={detailProps.borders.map((border) => countryHash[border])} />
                        </div>

                        <label htmlFor="map" className="col-2 col-form-label fw-bold">Maps:</label>
                        <div className="col-10">
                            <a href={detailProps.maps?.googleMaps} className="form-control-plaintext link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" id="map" target="blank_">{detailProps.maps?.googleMaps}</a>
                        </div>
                    </div>
				</div>
			</div>
		</>
	);
};

CountryDetail.propTypes = {
	setShowDetail: PropTypes.func.isRequired,
	detailProps: PropTypes.object.isRequired,
    countryHash: PropTypes.object.isRequired
};

export default CountryDetail;
