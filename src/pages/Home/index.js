import React from 'react';
import PokemonList from './PokemonList';
import Container from '../../components/Container/styles';

const Home = () => (
  <Container>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <input type="text" />
      <PokemonList />
    </div>
  </Container>
);

export default Home;
