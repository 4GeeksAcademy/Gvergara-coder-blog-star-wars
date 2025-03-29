import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useGlobalReducer from '../hooks/useGlobalReducer'

const PlanetDetail = () => {
    const { uid } = useParams()
    const { store } = useGlobalReducer()
    const [planet, setPlanet] = useState()

    useEffect(() => {
        console.log(uid)
        console.log(store.planets);
        if(store.planets){
            if(store.planets.length > 0 && uid) {
                const result = store.planets.find(planet => planet.uid === uid)
                if(result){
                    setPlanet(result)

                    
                    
                }
            }
        }
    }, [uid, store.planets])
    return (
        <div>
            {planet &&

                <div className="card mb-3">
                    <img src="https://static.wikia.nocookie.net/esstarwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20100723184830" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{planet.name}</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat optio itaque, quo excepturi maiores, sequi temporibus earum expedita fuga quaerat dolores neque nulla nostrum ipsam architecto explicabo similique veritatis. Incidunt!</p>
                        <p className="card-textd hr">Name: {planet.name} </p> <br />
                        <p className="card-textd">Orbital Period: {planet.orbital_period} </p>
                        <p className="card-textd">Diameter: {planet.diameter} </p>
                        <p className="card-textd">Climate: {planet.climate} </p>
                        <p className="card-textd">Gravity: {planet.gravity} </p>
                        <p className="card-textd">Terrain: {planet.terrain} </p>

                    </div>
                </div>
            }
        </div>
    )
}

export default PlanetDetail