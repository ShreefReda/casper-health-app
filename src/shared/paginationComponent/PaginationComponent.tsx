import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import './PaginationComponent-styles.css'

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ itemsPerPage, totalItems, paginate }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
      paginate(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      paginate(currentPage - 1);
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    paginate(pageNumber);
  };

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={handlePrevPage}>
            <FaAngleLeft />
          </button>
        </li>

        <select className="form-select" value={currentPage} onChange={(e) => handlePageChange(parseInt(e.target.value))}>
            {pageNumbers.map((pageNumber) => (
              <option key={pageNumber} value={pageNumber}>
                {pageNumber}
              </option>
            ))}
          </select>
          
        <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
          <button className="page-link" onClick={handleNextPage}>
            <FaAngleRight />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
