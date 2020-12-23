import React from "react";
import "./Pagination.css";

/* 
pagination component has exaclty 9 pages -
this is something i did because
it looked this way in the scetches and i had limited time...
*/

export const Pagination = ({currentPage, onPgClicked}) => {
  return (
    <ul className="pagination">
        <li className="pagination--forward" disabled={+currentPage === 1} onClick={() => {
          if (currentPage > 1)
            onPgClicked(currentPage - 1)
          }}>&lt;</li>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(pg => {
           return <li key={`page-${pg}`} onClick={() => onPgClicked(pg)} className={`${+currentPage === pg ? 'current' : ''}`}>{pg}</li>
        })}
        <li className="pagination--backward" disabled={+currentPage === 9}  onClick={() => {
          if (currentPage < 9)
            onPgClicked(currentPage + 1)
          }}>&gt;</li>
    </ul>
  );
};