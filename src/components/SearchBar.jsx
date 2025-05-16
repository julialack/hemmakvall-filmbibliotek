// filepath: /C:/Users/julia/hemmakvall-filmbibliotek/src/components/SearchBar.jsx
import React from "react";
import "./SearchBar.css"; // Importera CSS-filen

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Sök efter filmer..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Sök</button>
    </div>
  );
};

export default SearchBar;