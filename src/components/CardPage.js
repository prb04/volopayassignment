import React from "react";
import Cards from "./Cards";

const CardPage = ({ cards }) => {
  if (cards.length === 0) {
    return (
      <p className="text-xl font-bold" key="no-cards-message">
        No cards found...
      </p>
    );
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
      {cards.map((card, index) => (
        <Cards key={index} card={card} />
      ))}
    </div>
  );
};

export default CardPage;
