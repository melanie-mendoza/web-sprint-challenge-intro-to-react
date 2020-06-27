// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect( () => {
  //Call API and get a list of characters
  //https://swapi.py4e.com/api/people/
    axios
    .get("https://swapi.py4e.com/api/people/")
    .then((response) => {
      //console.log(response.data.results)
      setCharacters(response.data.results)
    })
    .catch((err) => {
      console.log(err);
    })
}, []);

// render the characters to the screen using CharacterCard component for each character.
  return (
    <div className="character">
      <ul>
        {characters.map((character, i) => 
          <CharacterCard 
            key={i}
            name={character.name}
            eye_color={character.eye_color}
          />
        )}
      </ul>
     </div>
  );
}