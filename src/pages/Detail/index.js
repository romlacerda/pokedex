import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import Container from '../../components/Container/styles';

const Detail = () => {
  const { name } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState({});

  useEffect(() => {
    api.get(`pokemon/${name}`).then((response) => {
      const { data } = response;
      setSelectedPokemon(data);
      console.log(data);
    });
  }, []);

  return (
    <Container>
      <img src={selectedPokemon.sprites && selectedPokemon.sprites.front_default} />
      <table>
        <tr>
          <th>Código</th>
          <td>{ selectedPokemon.id }</td>
        </tr>
        <tr>
          <th>Nome</th>
          <td>
            { selectedPokemon.name }
          </td>
        </tr>
        <tr>
          <th>Habilidades</th>
          <td>
            {selectedPokemon.abilities && selectedPokemon.abilities.map((ability) => (
              ability.ability.name
            )).join(', ')}

          </td>
        </tr>
        <tr>
          <th>Base XP</th>
          <td>{ selectedPokemon.base_experience }</td>
        </tr>
        <tr>
          <th>Peso</th>
          <td>{ selectedPokemon.weight }</td>
        </tr>
      </table>
    </Container>
  );
};

export default Detail;
