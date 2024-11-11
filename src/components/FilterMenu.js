
import React from "react";

const FilterMenu = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
  return (
    <div className="filter-menu">
      <label>Grouping:</label>
      <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>

      <label>Ordering:</label>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default FilterMenu;
