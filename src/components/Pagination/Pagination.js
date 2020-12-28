import React, { memo } from "react";
import "./Pagination.css";

/* 
pagination component has exaclty 9 pages -
this is something i did because
it looked this way in the scetches and i had limited time...
*/
const Next = ({ onPgClicked, currentPage }) => (
  <li
    className="pagination--forward"
    disabled={+currentPage === 1}
    onClick={() => {
      if (currentPage > 1) onPgClicked(currentPage - 1);
    }}
  >
    &lt;
  </li>
);

const Prev = ({ onPgClicked, currentPage }) => (
  <li
    className="pagination--backward"
    disabled={+currentPage === 9}
    onClick={() => {
      if (currentPage < 9) onPgClicked(currentPage + 1);
    }}
  >
    &gt;
  </li>
);

const Pagination_ = ({ currentPage, onPgClicked }) => {
  const pagesArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <ul className="pagination">
      <Next {...{ onPgClicked, currentPage }} />
      {pagesArr.map((pg) => {
        return (
          <li
            key={`page-${pg}`}
            onClick={() => onPgClicked(pg)}
            className={`${+currentPage === pg ? "current" : ""}`}
          >
            {pg}
          </li>
        );
      })}
      <Prev {...{ onPgClicked, currentPage }} />
    </ul>
  );
};

export const Pagination = memo(Pagination_);
