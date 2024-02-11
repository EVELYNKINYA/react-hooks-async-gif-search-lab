import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("cats");

  useEffect(() => {
    // Function to fetch data from Giphy API
    const fetchData = async () => {
      try {
        const apiKey = "f1OZb85c4iRnNjOTEolF1VzrDDjhjojc"; 
        const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=${apiKey}&rating=g&limit=3`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Extract the GIFs from the API response
        const gifData = data.data.map((gif) => ({
          id: gif.id,
          url: gif.images.original.url,
        }));

        // Update the state with the fetched GIFs
        setGifs(gifData);
      } catch (error) {
        console.error("Error fetching data from Giphy:", error.message);
      }
    };

    // Fetch data when the component mounts or when searchQuery changes
    fetchData();
  }, [searchQuery]);

  // Function to handle search form submission
  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <GifSearch onSearchSubmit={handleSearchSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
};

export default GifListContainer;
