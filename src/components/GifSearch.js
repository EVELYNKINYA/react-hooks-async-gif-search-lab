import React, { useState } from "react";

const GifSearch = ({ onSearchSubmit }) => {
  const [query, setQuery] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass the query to the parent component
    onSearchSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchInput">
  Search for GIFs:
  <input
    id="searchInput"
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
</label>
<button type="submit">Search</button>

</form>

  );
};

export default GifSearch;
