import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import Container from '../../components/Container/styles';
import Paper from '../../components/Paper/styles';
import Table from '../../components/Table/styles';
import Wrapper from '../../components/Wrapper/styles';

const Detail = () => {
  const { name } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState({});

  useEffect(() => {
    api.get(`pokemon/${name.toLowerCase()}`).then((response) => {
      const { data } = response;
      setSelectedPokemon(data);
      console.log(data);
    });
  }, []);

  return (
    <Container>
      <Paper>
        <Wrapper>
          <img src={selectedPokemon.sprites && selectedPokemon.sprites.front_default} alt="Pokemon" style={{ width: '19%' }} />
          { selectedPokemon.types && selectedPokemon.types.map((type) => type.type.name).join(', ')}
          <Table variant="inversed">
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
          </Table>
        </Wrapper>
      </Paper>
    </Container>
  );
};

export default Detail;
