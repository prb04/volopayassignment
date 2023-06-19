import React from "react";
import { SlRefresh } from "react-icons/sl";
import { IoFlameSharp } from "react-icons/io5";

const Cards = ({
  card: { name, budget_name, available_to_spend, spent, card_type },
}) => {
  const cardTypeClass =
    card_type === "burner"
      ? "bg-orange-50 fill-orange-300"
      : "bg-rose-50 fill-rose-500";

  const perc = (spent.value / available_to_spend.value) * 100;
  console.log(perc);

  return (
    <div className="max-w-[300px] min-w-[300px] flex flex-col gap-2 p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <div className="font-semibold text-gray-500">
            <span>{budget_name}</span>
          </div>
        </div>
        {card_type === "burner" ? (
          <IoFlameSharp
            size={50}
            className={`p-4 rounded-full ${cardTypeClass}`}
          />
        ) : (
          <SlRefresh
            size={50}
            className={`p-4 rounded-full ${cardTypeClass}`}
          />
        )}
      </div>
      <div className="flex justify-between text-sm text-gray-400">
        <div className="flex flex-col">
          <span>Amount</span>
          <span className="font-semibold text-gray-600">300 SGD</span>
        </div>
        <div className="flex flex-col">
          <span>Frequency</span>
          <span className="font-semibold text-gray-600">Monthly</span>
        </div>
        <div className="flex flex-col">
          <span>Expiry</span>
          <span className="font-semibold text-gray-600">21 July 2021</span>
        </div>
      </div>
      <div className="w-full relative h-[10px] bg-rose-500 rounded-lg">
        <div
          className={`absolute bg-green-400 h-full rounded-lg`}
          style={{ width: `${perc}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-gray-400">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
          <span>Spent</span>
        </div>
        <span className="font-semibold text-gray-600">{spent.value} SGD</span>
      </div>
      <div className="flex justify-between text-gray-400">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-rose-500"></span>
          <span>Balance</span>
        </div>
        <span className="font-semibold text-gray-600">
          {available_to_spend.value} SGD
        </span>
      </div>
    </div>
  );
};

export default Cards;
