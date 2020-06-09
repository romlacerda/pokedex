import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import Container from '../../components/Container/styles';
import Paper from '../../components/Paper/styles';
import Table from '../../components/Table/styles';
import Wrapper from '../../components/Wrapper/styles';
import BackHeader from '../../components/BackHeader';


const Detail = () => {
  const { name } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    api.get(`pokemon/${name.toLowerCase()}`).then((response) => {
      const { data } = response;
      setSelectedPokemon(data);
    }).catch((er) => console.log(er));
  }, []);

  return (
    <Container flexD="c">
      <BackHeader title="detalhes do pokémon" back />
      <Paper>
        { selectedPokemon ? (
          <Wrapper>
            <div style={{
              display: 'flex', flexDirection: 'column', flex: '1', alignItems: 'center',
            }}
            >
              { selectedPokemon.types && selectedPokemon.types.map((type) => type.type.name).join(', ')}

              <img src={selectedPokemon.sprites && selectedPokemon.sprites.front_default} alt="Pokemon" style={{ width: '35%' }} />
            </div>
            <Table variant="inversed" flex="1.5">
              <tbody>
                <tr>
                  <td className="head-table">Código</td>
                  <td>{ selectedPokemon.id }</td>
                </tr>
                <tr>
                  <td className="head-table">Nome</td>
                  <td>
                    { selectedPokemon.name }
                  </td>
                </tr>
                <tr>
                  <td className="head-table">Habilidades</td>
                  <td>
                    {selectedPokemon.abilities && selectedPokemon.abilities.map((ability) => (
                      ability.ability.name
                    )).join(', ')}

                  </td>
                </tr>
                <tr>
                  <td className="head-table">Base XP</td>
                  <td>{ selectedPokemon.base_experience }</td>
                </tr>
                <tr>
                  <td className="head-table">Peso</td>
                  <td>{ selectedPokemon.weight }</td>
                </tr>
              </tbody>
            </Table>
          </Wrapper>
        ) : 'Nenhum pokémon foi encontrado.' }
      </Paper>
    </Container>
  );
};

export default Detail;
