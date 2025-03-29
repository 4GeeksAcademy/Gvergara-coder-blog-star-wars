import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";

export const Navbar = () => {
	const { store, dispatch} = useGlobalReducer()
	const [favoriteCount, setFavoriteCount] = useState()

	const handleRemoveFavorite = (favoriteRemove) => {
		const action = {type: "removeFavorite", payload: favoriteRemove}
		dispatch(action)
	}
	useEffect(() => {
		setFavoriteCount(store.favorites.length)
	}, [store.favorites])
	return (
		<nav className="first-navbar navbar">
			<div className="container">
				<Link to="/">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRecxSfklxII2Rdm_-e3pPj05NO3xdKgyzOM3ONKbkTeEtQJevLT045WJoX47REFCqRUSs&usqp=CAU" alt="ir al inicio" />
				</Link>
				<div className="ml-auto">
						<div className="btn-group dropstart" role="group">
							<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true">
								Favorites {favoriteCount}
							</button>
							<ul className="dropdown-menu">
								{store.favorites.length > 0 ? (
									store.favorites.map((favorite, index) => (
										<li key={index}>
											<div className="boton">
												<span>{favorite}</span>
												<button
												className="btn btn-danger btn-sm"
												onClick={() => handleRemoveFavorite(favorite)}
												>
													<i className="fa-solid fa-trash"></i>
												</button>
											</div>
										</li>
									))
								 ) : (
									<li>
										<span className="dropdown-item"> Empty</span>
									</li>
								)}
							</ul>
						</div>
				</div>
			</div>
		</nav>
	);
};