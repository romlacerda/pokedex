import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PokemonList from './PokemonList';
import Container from '../../components/Container/styles';

const Home = () => {
  const [searched, setSearched] = useState('');
  const history = useHistory();

  function handleSearchedChange(e) {
    const { value } = e.target;
    setSearched(value);
  }

  function handleSearchSubmit() {
    history.push(`pokemon/${searched}`);
  }

  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <input type="text" value={searched} onChange={handleSearchedChange} />
        <button type="submit" onClick={handleSearchSubmit}>Buscar</button>
        <PokemonList />
      </div>
    </Container>
  );
};

export default Home;
