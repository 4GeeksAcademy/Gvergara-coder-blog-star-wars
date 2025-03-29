import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

function CharacterDetail() {
  const { uid } = useParams()
  const { store } = useGlobalReducer()
  const [character, setCharacter] = useState()

  useEffect(() => {
    if (store.characters) {
      if (store.characters.length > 0 && uid) {
        const result = store.characters.find(character => character.uid == uid)
        if (result) {
          setCharacter(result)
        }
      }
    }
  }, [uid, store.characters])
  return (
    <div>
      {character &&

        <div className="card mb-3">
          <img src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/2/2d/Luke.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat optio itaque, quo excepturi maiores, sequi temporibus earum expedita fuga quaerat dolores neque nulla nostrum ipsam architecto explicabo similique veritatis. Incidunt!</p>
            <p className="card-textd hr">Name: {character.name} </p> <br />
            <p className="card-textd">Birth Year: {character.birth_year} </p>
            <p className="card-textd">Gender: {character.gender} </p>
            <p className="card-textd">Height: {character.height} </p>
            <p className="card-textd">Skin Color: {character.skin_color} </p>
            <p className="card-textd">Eye Color: {character.eye_color} </p>

          </div>
        </div>
      }
    </div>
  )
}
export default CharacterDetail
