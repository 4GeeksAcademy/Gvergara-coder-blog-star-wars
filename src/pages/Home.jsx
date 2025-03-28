import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import CardCharacter from "../components/CardCharacter.jsx";
import { CardPlanets } from "../components/CardPlanets.jsx";
import CardStarships from "../components/CardStarships.jsx";


export const Home = () => {
	const apiUrl ="https://swapi.dev/api"
	const { store, dispatch } = useGlobalReducer()
	
	useEffect(() => {
		fetch(`${apiUrl}/people`)
		.then((response) =>{
			if(!response.ok){
				throw new Error("Error al obtener los personajes")	
			}
			return response.json()
		})
		.then((data) =>{
			console.log(data)
			const newArray = data.results.map(character => {
				character["uid"] = character.url.split("/")[5]
				return character
			})
			console.log(newArray)
			
			const action = {type: "setCharacters", payload: newArray}
			dispatch(action)
			
		})
		.catch((error) =>{
			console.log(error)
			
		})
	}, [])

	useEffect(() => {		
		fetch(`${apiUrl}/planets`)
		.then((response)=>{
			if(!response.ok){
				throw new Error("Error al obtener los planetas")
			}
			return response.json()
		})
		.then((data)=>{
			console.log(data)
			const action = {type: "setPlanets", payload: data.results}
			dispatch(action)
			
		})
		.catch((error)=>{
			console.log(error);
			
		})

	}, [])

	useEffect(() => {
		fetch(`${apiUrl}/starships`)
		.then((response)=>{
			if(!response.ok){
				throw new Error("Error al cargar las naves")
			}
			return response.json()
		})
		.then((data)=>{
			console.log(data)
			const action = {type: "setStarships", payload: data.results}
			dispatch(action)
			
		})
		.catch((error)=>{
			console.log(error)
			
		})
	}, [])

	return (
		<div className="text-center mt-5">

			<div className="horizontal-scroll-container">
				<h1 className="tittle">
					Characters
				</h1>
				<div className="card-header container">
					{store.characters.map((character, index) => {
						return (
							<CardCharacter ch={character} key={index} />
						);
							
					})}
				</div>
			</div>

			<div className="horizontal-scroll-container">
				<h1 className="tittle">
					Planets
				</h1>
				<div className="card-header container">
					{store.planets.map((planet , index) =>{
						return(
							<CardPlanets pl={planet} key={index}/>
						)
					})}
				</div>
			</div>

			<div className="horizontal-scroll-container">
				<h1 className="tittle">
					Starships
				</h1>
				<div className="card-header container">
					{store.starships.map((starship, index) =>{
						return(
							<CardStarships sp={starship} key={index} />
						)
					})}
				</div>
			</div>
		</div>
	);
}; 