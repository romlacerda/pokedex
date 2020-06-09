import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { FaListAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

const BackHeader = ({ title, back }) => (
  <h2 style={{ display: 'flex', marginTop: '3%', marginBottom: '0' }}>
    <Link to="/" style={{ marginRight: '1%' }}>
      { back ? (
        <IoIosArrowBack size={30} color="#c60304" />
      )
        : (
          <FaListAlt size={30} color="#c60304" />
        )}

    </Link>
    { title }
  </h2>
);

BackHeader.propTypes = {
  title: PropTypes.string.isRequired,
  back: PropTypes.bool.isRequired,
};

export default BackHeader;
