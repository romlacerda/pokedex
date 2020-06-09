import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

const Pagination = ({ totalPages, handlePageClick }) => (
  <ReactPaginate
    previousLabel="anterior"
    nextLabel="próximo"
    breakLabel="..."
    breakClassName="break-me"
    pageCount={totalPages}
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    onPageChange={handlePageClick}
    containerClassName="pagination"
    subContainerClassName="pages pagination"
    activeClassName="active"
  />
);

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  handlePageClick: PropTypes.func.isRequired,
};

export default Pagination;
