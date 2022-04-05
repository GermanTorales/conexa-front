import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.styles.css';

const Pagination = ({ handlePageClick, pageCount, currentPage }) => {
  const { innerWidth: width } = window;
  const pageRangeDisplayed = width < 768 ? 1 : 5;
  const prevText = width < 768 ? '<' : 'Anterior';
  const nextText = width < 768 ? '>' : 'Siguiente';

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={nextText}
      onPageChange={handlePageClick}
      pageRangeDisplayed={pageRangeDisplayed}
      pageCount={pageCount}
      forcePage={currentPage}
      previousLabel={prevText}
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
