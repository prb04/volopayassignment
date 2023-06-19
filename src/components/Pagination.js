import React, { useState } from "react";

const Pagination = ({ totalCards, cardsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    onPageChange(pageNumber);
  };

  if (totalPages <= 1) {
    return null; // or render a message indicating no pagination needed
  }

  return (
    <div className="flex items-center justify-center gap-x-[10px]">
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (pageNumber) => (
          <div
            key={pageNumber}
            className={`rounded-full mt-5 w-12 h-12 flex justify-center items-center text-white bg-rose-500 cursor-pointer ${
              activePage === pageNumber ? "active" : ""
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </div>
        )
      )}
    </div>
  );
};

export default Pagination;
