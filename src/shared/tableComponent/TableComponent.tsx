import React, { useState } from "react";
import Pagination from "shared/paginationComponent";
import "./TableComponent-styles.css";

interface TableProps {
  data: any[];
  columnNames: any[];
  dataValues: any[];
  noDataFoundMsg: string;
  onRowClick: (id: string) => void;
}

const Table: React.FC<TableProps> = ({
  data,
  columnNames,
  dataValues,
  noDataFoundMsg,
  onRowClick,
}: TableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleRowClick = (id: string) => {
    onRowClick(id);
  };

  const handlePageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentPage(1);
    setItemsPerPage(Number(event.target.value));
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderRows = currentItems.map((item) => {
    return (
      <tr key={item.id} onClick={() => handleRowClick(item.id)}>
        {dataValues.map((value,index) => {
          return <td key={index} className="table-cell">{item[value]}</td>;
        })}
      </tr>
    );
  });

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const NoItemsFound: React.FC<any> = ({ message }) => {
    return (
      <div className="no-items-found-container">
        <p className="no-items-found-message">{message}</p>
      </div>
    );
  };

  return (
    <>
      {currentItems.length === 0 ? (
        <NoItemsFound message={noDataFoundMsg} />
      ) : (
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                {columnNames.map((columnName,index) => {
                  return <th key={index} className="table-header">{columnName}</th>;
                })}
              </tr>
            </thead>
            <tbody>{renderRows}</tbody>
          </table>

          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={data.length}
            paginate={paginate}
          />

          <div className="pagination-container">
            <span className="pagination-label">Items per page:</span>
            <select className="pagination-select" onChange={handlePageChange}>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
      )}
    </>
  );
};

export default Table;
