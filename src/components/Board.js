
import React from "react";
import Column from "./Column";

const groupTickets = (tickets, groupBy) => {
  return tickets.reduce((groups, ticket) => {
    const key = ticket[groupBy] || "Unassigned"; 
    if (!groups[key]) groups[key] = [];
    groups[key].push(ticket);
    return groups;
  }, {});
};

const sortTickets = (tickets, sortBy) => {
  if (sortBy === "priority") {
    return tickets.sort((a, b) => b.priority - a.priority);
  } else if (sortBy === "title") {
    return tickets.sort((a, b) => a.title.localeCompare(b.title));
  }
  return tickets;
};

const Board = ({ tickets, groupBy, sortBy }) => {
  const groupedTickets = groupTickets(tickets, groupBy);
  const sortedGroupedTickets = Object.keys(groupedTickets).map((key) => ({
    key,
    tickets: sortTickets(groupedTickets[key], sortBy),
  }));

  return (
    <div className="board">
      {sortedGroupedTickets.map((group) => (
        <Column key={group.key} title={group.key} tickets={group.tickets} />
      ))}
    </div>
  );
};

export default Board;
