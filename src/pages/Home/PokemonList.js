import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api.get('pokemon').then((response) => {
      const { data } = response;
      setPokemons(data.results);
    });
  }, []);


  return (
    <table>
      <thead>
        <th>Nome</th>
      </thead>
      <tbody>
        { pokemons && pokemons.map((poke) => (
          <tr>
            <td key={poke.name}>
              {poke.name}
            </td>
            <td>
              <Link to={`/pokemon/${poke.name}`}>Visualizar</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PokemonList;
