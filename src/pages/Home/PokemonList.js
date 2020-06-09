import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineFileSearch } from 'react-icons/ai';
import api from '../../services/api';
import Table from '../../components/Table/styles';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const rowsPerPage = 20;

  function calculatePageNumbers(total) {
    const pages = Math.ceil(total / rowsPerPage);
    setTotalPages(pages);
  }

  useEffect(() => {
    api.get('pokemon').then((response) => {
      const { data } = response;
      setPokemons(data.results);
      calculatePageNumbers(data.count);
    });
  }, []);

  return (
    <Table>
      <thead>
        <th>Nome</th>
        <th>Ações</th>
      </thead>
      <tbody>
        { pokemons && pokemons.map((poke) => (
          <tr>
            <td key={poke.name}>
              {poke.name}
            </td>
            <td>
              <Link to={`/pokemon/${poke.name}`}>
                <AiOutlineFileSearch size={20} color="#8e8e8e" />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot />
    </Table>
  );
};

export default PokemonList;
