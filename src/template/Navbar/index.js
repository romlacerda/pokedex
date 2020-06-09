import React from 'react';
import { GiPokecog } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/styles';
import Container from '../../components/Container/styles';

const NavbarTemplate = () => (
  <Navbar>
    <Container>
      <Link to="/">

        <h1 style={{
          padding: '10px 0', display: 'flex', alignItems: 'center', fontSize: '1.3em',
        }}
        >
          <GiPokecog size={30} style={{ marginRight: '10px' }} />
          Pokedex
        </h1>
      </Link>
    </Container>
  </Navbar>
);

export default NavbarTemplate;
