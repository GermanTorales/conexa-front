import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.styles.css';

const Pagination = ({ handlePageClick, pageCount, currentPage }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Siguiente >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      forcePage={currentPage}
      previousLabel="< Anterior"
      renderOnZeroPageCount={null}
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination justify-content-center"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      activeClassName="active"
    />
  );
};

export default Pagination;
