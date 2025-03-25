import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="text-center mt-5">

			<div className="horizontal-scroll-container">
				<h1 className="tittle">
					Characters
				</h1>
				<div className="card-header container">

					<div className="card star-card" style={{ width: "18rem" }}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on .</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">An item</li>
							<li className="list-group-item">A second item</li>
							<li className="list-group-item">A third item</li>
						</ul>
						<div className="card-body">
							<button type="button" className="btn btn-outline-success">Learn more!</button>
							<button type="button" className="btn btn-outline-warning"><i class="fa-solid fa-heart"></i></button>
						</div>
					</div>

					<div className="card star-card" style={{ width: "18rem" }}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card tit.</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">An item</li>
							<li className="list-group-item">A second item</li>
							<li className="list-group-item">A third item</li>
						</ul>
						<div className="card-body">
							<button type="button" className="btn btn-outline-success">Learn more!</button>
							<button type="button" className="btn btn-outline-warning"><i class="fa-solid fa-heart"></i></button>
						</div>
					</div>

					<div className="card star-card" style={{ width: "18rem" }}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card title and make up.</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">An item</li>
							<li className="list-group-item">A second item</li>
							<li className="list-group-item">A third item</li>
						</ul>
						<div className="card-body">
							<button type="button" className="btn btn-outline-success">Learn more!</button>
							<button type="button" className="btn btn-outline-warning"><i class="fa-solid fa-heart"></i></button>
						</div>
					</div>

					<div className="card star-card" style={{ width: "18rem" }}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card title and m.</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">An item</li>
							<li className="list-group-item">A second item</li>
							<li className="list-group-item">A third item</li>
						</ul>
						<div className="card-body">
							<button type="button" className="btn btn-outline-success">Learn more!</button>
							<button type="button" className="btn btn-outline-warning"><i class="fa-solid fa-heart"></i></button>
						</div>
					</div>

					<div className="card star-card" style={{ width: "18rem" }}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card title an.</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">An item</li>
							<li className="list-group-item">A second item</li>
							<li className="list-group-item">A third item</li>
						</ul>
						<div className="card-body">
							<button type="button" className="btn btn-outline-success">Learn more!</button>
							<button type="button" className="btn btn-outline-warning"><i class="fa-solid fa-heart"></i></button>
						</div>
					</div>
				</div>
			</div>

			<div className="horizontal-scroll-container">
				<h1 className="tittle">
					Planets
				</h1>
				<div className="card-header container">

					<div className="card star-card" style={{ width: "18rem" }}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on .</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">An item</li>
							<li className="list-group-item">A second item</li>
							<li className="list-group-item">A third item</li>
						</ul>
						<div className="card-body">
							<button type="button" className="btn btn-outline-success">Learn more!</button>
							<button type="button" className="btn btn-outline-warning"><i class="fa-solid fa-heart"></i></button>
						</div>
					</div>

					<div className="card star-card" style={{ width: "18rem" }}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card tit.</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">An item</li>
							<li className="list-group-item">A second item</li>
							<li className="list-group-item">A third item</li>
						</ul>
						<div className="card-body">
							<button type="button" className="btn btn-outline-success">Learn more!</button>
							<button type="button" className="btn btn-outline-warning"><i class="fa-solid fa-heart"></i></button>
						</div>
					</div>

					<div className="card star-card" style={{ width: "18rem" }}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card title and make up.</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">An item</li>
							<li className="list-group-item">A second item</li>
							<li className="list-group-item">A third item</li>
						</ul>
						<div className="card-body">
							<button type="button" className="btn btn-outline-success">Learn more!</button>
							<button type="button" className="btn btn-outline-warning"><i class="fa-solid fa-heart"></i></button>
						</div>
					</div>

					<div className="card star-card" style={{ width: "18rem" }}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card title and m.</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">An item</li>
							<li className="list-group-item">A second item</li>
							<li className="list-group-item">A third item</li>
						</ul>
						<div className="card-body">
							<button type="button" className="btn btn-outline-success">Learn more!</button>
							<button type="button" className="btn btn-outline-warning"><i class="fa-solid fa-heart"></i></button>
						</div>
					</div>

					<div className="card star-card" style={{ width: "18rem" }}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card title an.</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">An item</li>
							<li className="list-group-item">A second item</li>
							<li className="list-group-item">A third item</li>
						</ul>
						<div className="card-body">
							<button type="button" className="btn btn-outline-success">Learn more!</button>
							<button type="button" className="btn btn-outline-warning"><i class="fa-solid fa-heart"></i></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}; 