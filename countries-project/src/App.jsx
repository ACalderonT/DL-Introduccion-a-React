import { Fragment, useState } from "react";
import Landing from "./components/Landing/Landing";
import MiApi from "./components/MiApi/MiApi";
import Buscador from "./components/Buscador/Buscador";
import "./App.css";

function App() {
	const [dataFetch, setDataFetch] = useState([]);
	const [dataFiltered, setDataFiltered] = useState(dataFetch);
	const [showLanding, setShowLanding] = useState(true);

	const handleOnClickBrand = () => setShowLanding(true);

	return (
		<>
			<nav className="navbar bg-light border-bottom border-opacity-75 p-2">
				<div className="container-fluid d-flex">
					<a
						className="navbar-brand fs-4 fw-semibold"
						href="#"
						onClick={handleOnClickBrand}
					>
						Country<span className="text-success">Wiki</span>
					</a>
					{showLanding ? (
						""
					) : (
						<Buscador
							dataFetch={dataFetch}
							setDataFiltered={setDataFiltered}
							countDataFiltered={dataFiltered.length}
						/>
					)}
				</div>
			</nav>
			{showLanding ? (
				<Landing setShowLanding={setShowLanding} />
			) : (
				<Fragment>
					<MiApi
						dataFetch={dataFetch}
						setDataFetch={setDataFetch}
						dataFiltered={dataFiltered}
						setDataFiltered={setDataFiltered}
					/>
					<footer className="text-center border-top bg-light border-opacity-75 py-3 px-5 d-flex justify-content-between">
						<div className="d-flex gap-2">
							<a className="link-success icon-link icon-link-hover link-underline link-underline-opacity-0" href="https://www.linkedin.com/in/acalderont" target="blank_"><i className="fa-brands fa-linkedin fs-5"></i></a>
							<a className="link-success icon-link icon-link-hover link-underline link-underline-opacity-0" href="https://github.com/ACalderonT" target="blank_"><i className="fa-brands fa-github fs-5"></i></a>
							<a className="link-success icon-link icon-link-hover link-underline link-underline-opacity-0" href="mailto:ac.calderont@gmail.com?subject=Message from API" target="blank_"><i className="fa-brands fa-google fs-5"></i></a>
						</div>
						<div>
							<p className="fw-semibold m-0 text-success">
								<i className="fa-regular fa-copyright"></i> All
								Right Reserved.
							</p>
						</div>
					</footer>
				</Fragment>
			)}
		</>
	);
}

export default App;
