import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="first-navbar navbar">
			<div className="container">
				<Link to="/">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRecxSfklxII2Rdm_-e3pPj05NO3xdKgyzOM3ONKbkTeEtQJevLT045WJoX47REFCqRUSs&usqp=CAU" alt="ir al inicio" />
				</Link>
				<div className="ml-auto">
						<div className="btn-group" role="group">
							<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites
							</button>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="#">Dropdown link</a></li>
								<li><a className="dropdown-item" href="#">Dropdown link</a></li>
							</ul>
						</div>
				</div>
			</div>
		</nav>
	);
};