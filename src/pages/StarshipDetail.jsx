import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useGlobalReducer from '../hooks/useGlobalReducer'

function StarshipDetail() {
    const { uid } = useParams()
    const { store } = useGlobalReducer()
    const [starship, setStarship] = useState()

    useEffect(() => {
        if(store.starships){
            if(store.starships.length > 0 && uid){
                const result = store.starships.find(starship => starship.uid === uid)
                if(result){
                    setStarship(result)
                }
            }
        }
    }, [uid, store.starships])
    return (
        <div>
            {starship &&

                <div className="card mb-3">
                    <img src="https://info.hughesenv.com/hs-fs/hubfs/Imported_Blog_Media/death-star.jpg?width=368&height=330&name=death-star.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{starship.name}</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat optio itaque, quo excepturi maiores, sequi temporibus earum expedita fuga quaerat dolores neque nulla nostrum ipsam architecto explicabo similique veritatis. Incidunt!</p>
                        <p className="card-textd hr">Name: {starship.name} </p> <br />
                        <p className="card-textd">Model: {starship.model} </p>
                        <p className="card-textd">Manufacturer: {starship.manufacturer} </p>
                        <p className="card-textd">Cost in credits: {starship.cost_in_credits} </p>
                        <p className="card-textd">Max atmosphering speed: {starship.max_atmosphering_speed} </p>
                        <p className="card-textd">Crew: {starship.crew} </p>
                        <p className="card-textd">Passengers: {starship.passengers} </p>
                    </div>
                </div>
            }
        </div>
    )
}

export default StarshipDetail