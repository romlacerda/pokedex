import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import PokemonList from './PokemonList';
import Container from '../../components/Container/styles';
import Input from '../../components/Input/styles';
import Button from '../../components/Button/styles';
import Wrapper from '../../components/Wrapper/styles';
import Paper from '../../components/Paper/styles';
import BackHeader from '../../components/BackHeader';

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
    <Container flexD="c">
      <BackHeader title="lista de pokémons" back={false} />
      <Paper>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <Wrapper style={{ marginTop: '1%' }}>
            <Input type="text" value={searched} onChange={handleSearchedChange} flex="0.1 auto" />
            <Button type="submit" onClick={handleSearchSubmit} flex="0.02 auto">
              <FiSearch size={20} />
            </Button>
          </Wrapper>
          <div style={{ marginTop: '2%' }}>
            <PokemonList />
          </div>
        </div>
      </Paper>
    </Container>
  );
};

export default Home;
