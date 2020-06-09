import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineFileSearch } from 'react-icons/ai';
import api from '../../services/api';
import Table from '../../components/Table/styles';
import Pagination from '../../components/Pagination';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [offset, setOffset] = useState(0);

  const rowsPerPage = 20;

  function calculatePageNumbers(total) {
    const pages = Math.ceil(total / rowsPerPage);
    setTotalPages(pages);
  }

  function getPokemons() {
    api.get(`pokemon?offset=${offset}limit=${rowsPerPage}`).then((response) => {
      const { data } = response;
      setPokemons(data.results);
      calculatePageNumbers(data.count);
    });
  }

  useEffect(() => {
    getPokemons();
  }, [offset]);

  async function handlePageClick(data) {
    const { selected } = data;
    const newOffset = Math.ceil(selected * rowsPerPage);
    setOffset(newOffset);
  }


  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          { pokemons && pokemons.map((poke) => (
            <tr key={poke.name}>
              <td>
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
      </Table>
      <Pagination totalPages={totalPages} handlePageClick={handlePageClick} />
    </>
  );
};

export default PokemonList;
