'use client'

import React, { useState } from "react";
import axios from "axios";

const SearchImages = ({ getSearchImages }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.API_KEY}`;
    try {
      const response = await axios.get(url);
      getSearchImages(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for images"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchImages;