import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { getAllFlags } from "../../services/services";

const Landing = ({ setShowLanding }) => {
	const [flags, setFlags] = useState([]);

	useEffect(() => {
		getAllFlags().then((response) => {
			setFlags(response);
		});
	}, []);

	const handleOnClickStart = () => setShowLanding(false);

	return (
		<>
			<div className="text-start">
				<div className="row align-items-center">
					<div className="col p-5">
						<h3>¡Bienvenido a la Wiki de Países!</h3>
						<p className="fw-normal">
							Descubre secretos fascinantes de cada nación: tamaño
							geográfico, fronteras, capitales vibrantes, escudos
							llenos de historia, continentes que cuentan su
							propia narrativa, monedas que dan vida a sus
							economías, poblaciones que laten con diversidad,
							fechas de independencia que marcaron hitos, banderas
							ondeando con orgullo y nombres que resuenan en todo
							el planeta. ¡Despierta tu curiosidad y sumérgete en
							el asombroso mosaico del mundo! 🌎✨
						</p>
						<button
							type="button"
							className="btn btn-outline-success btn-lg"
							onClick={handleOnClickStart}
						>
							Comenzar!
						</button>
					</div>
					<div className="col px-5">
						<div className="row overflow-hidden window-heigh">
							<div className="col-4 infinite-carousel">
								<div className="vstack gap-3 col-4">
									{flags[0]?.map((element, index) => (
										<div key={100 + index}>
											<img
												key={index}
												src={element?.flags?.svg}
												alt={element?.alt}
											/>
										</div>
									))}
								</div>
							</div>
							<div className="col-4 infinite-carousel reverse">
								<div className="vstack gap-3 col-4">
									{flags[1]?.map((element, index) => (
										<div key={100 + index}>
											<img
												key={index}
												src={element?.flags?.svg}
												alt={element?.alt}
											/>
										</div>
									))}
								</div>
							</div>
							<div className="col-4 infinite-carousel">
								<div className="vstack gap-3 col-4">
									{flags[2]?.map((element, index) => (
										<div key={100 + index}>
											<img
												key={index}
												src={element?.flags?.svg}
												alt={element?.alt}
											/>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

Landing.propTypes = {
	setShowLanding: PropTypes.func.isRequired,
};

export default Landing;
