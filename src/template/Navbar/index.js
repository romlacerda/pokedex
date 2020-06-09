import React from 'react';
import { GiPokecog } from 'react-icons/gi';
import Navbar from '../../components/Navbar/styles';
import Container from '../../components/Container/styles';

const NavbarTemplate = () => (
  <Navbar>
    <Container>
      <h1 style={{
        padding: '10px 0', display: 'flex', alignItems: 'center', fontSize: '1.3em',
      }}
      >
        <GiPokecog size={30} style={{ marginRight: '10px' }} />
        Pokedex
      </h1>
    </Container>
  </Navbar>
);

export default NavbarTemplate;
