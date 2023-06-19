import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Tab from "./components/Tab";
import Filter from "./components/Filter";
import data from "./data/data";
import CardPage from "./components/CardPage";
import Pagination from "./components/Pagination";

function App() {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;

  useEffect(() => {
    setCards(data.data);
  }, []);

  useEffect(() => {
    const filtered = cards.filter((card) => {
      const nameMatch = card.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const typeMatch = filterType === "" || card.card_type === filterType;
      return nameMatch && typeMatch;
    });
    setFilteredCards(filtered);
  }, [cards, searchTerm, filterType]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    let newFilteredCards = [];

    switch (tab) {
      case "your":
        newFilteredCards = cards.filter((card) => card.owner_id === 1);
        break;
      case "all":
        newFilteredCards = cards;
        break;
      case "blocked":
        newFilteredCards = cards.filter((card) => card.status === "blocked");
        break;
      default:
        newFilteredCards = cards;
    }

    setFilteredCards(newFilteredCards);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="max-w-[940px] min-h-screen mx-auto py-5">
      <Tab activeTab={activeTab} onChange={handleTabChange} />
      <Filter
        setFilterType={setFilterType}
        handleSearchChange={handleSearchChange}
        value={searchTerm}
      />

      {currentCards.length > 0 ? (
        <CardPage cards={currentCards} />
      ) : (
        <p className="text-xl font-medium">No cards found...</p>
      )}
      <Pagination
        totalCards={filteredCards.length}
        cardsPerPage={cardsPerPage}
        filteredCards={filteredCards}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
