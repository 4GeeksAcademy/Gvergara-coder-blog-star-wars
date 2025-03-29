import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useGlobalReducer from '../hooks/useGlobalReducer'

const CardStarships = (props) => {
    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()
    const heandleFavorite = () => {
        if (isFavorite === true) {
            const action = { type: "removeFavorite", payload: props.sp.name }
            dispatch(action)
        }
        else {
            const action = { type: "addFavorite", payload: props.sp.name }
            dispatch(action)
        }
    }

    const isFavorite = store.favorites.includes(props.sp.name)
    console.log(isFavorite)
    return (
        <div>
            <div className="card star-card">
                <img src="https://preview.redd.it/cr90-corvette-aka-blockade-runner-v0-zwbd3547t1z91.jpg?width=1080&crop=smart&auto=webp&s=76157b543d04adea9e213080b1dabaeffb1eeffe" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.sp.name}</h5>
                    <p className="card-text">Cost in Credits: {props.sp.cost_in_credits}</p>
                    <p className="card-text">Max Speed: {props.sp.max_atmosphering_speed}</p>
                    <p className="card-text">Passengers: {props.sp.passengers}</p>
                </div>
                <div className="card-body">
                    <button type="button" className="btn btn-outline-success"
                        onClick={() => navigate(`/starship/${props.sp.uid}`)}
                    >Learn more!</button>
                    <button type="button"
                        className="btn btn-outline-warning hearth"
                        onClick={heandleFavorite}
                    ><i className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i></button>
                </div>
            </div>
        </div>
    )
}

export default CardStarships
