
import React, { useEffect, useState } from "react";
import { fetchData } from "./apiService";
import Board from "./components/Board";
import FilterMenu from "./components/FilterMenu";

import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState("status");
  const [sortBy, setSortBy] = useState("priority");

  useEffect(() => {
    const loadTickets = async () => {
      const data = await fetchData();
      setTickets(data); 
    };
    loadTickets();
  }, []);

  return (
    <div className="App">
      <FilterMenu groupBy={groupBy} setGroupBy={setGroupBy} sortBy={sortBy} setSortBy={setSortBy} />
      <Board tickets={tickets} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
}

export default App;
