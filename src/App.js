import logo from "./logo.svg";
import "./App.css";
import Tab from "./components/Tab";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="max-w-[940px] mx-auto py-5">
      <Tab />
      <Filter />
    </div>
  );
}

export default App;
