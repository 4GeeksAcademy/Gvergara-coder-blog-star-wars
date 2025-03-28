import React, { useId } from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer';

function CardCharacter(props) {
    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()
    const heandleFavorite = () => {
        if(isFavorite === true){
            const action = {type: "removeFavorite", payload: props.ch.name}
            dispatch(action)
        }
        else{
            const action = {type: "addFavorite", payload: props.ch.name}
            dispatch(action)
        }
    }

    const isFavorite = store.favorites.includes(props.ch.name)
        console.log(isFavorite)
        

    return (
        <div className="card star-card">
            <img src="data:image/jpeg;base64,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" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.ch.name}</h5>
            </div>
            <p className="card-text">
                Gender: {props.ch.gender} <br />
                Hair-color: {props.ch.hair_color} <br />
                Eye-color: {props.ch.eye_color}
            </p>
            <div className="card-body">
                <button type="button"
                    className="btn btn-outline-success"
                    onClick={() => navigate(`/character/${props.ch.uid}`)}
                >Learn more!</button>
                <button type="button"
                    className="btn btn-outline-warning hearth"
                    onClick={heandleFavorite}
                ><i className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i></button>
            </div>
        </div>


    )
}

export default CardCharacter