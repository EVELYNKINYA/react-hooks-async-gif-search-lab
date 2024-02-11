import React from "react";

const GifList = ({ gifs }) => {
  return (
    <ul>
      {gifs.map((gif) => (
        <li key={gif.id}>
          <img src={gif.url} alt={`GIF ${gif.id}`} />
        </li>
      ))}
    </ul>
  );
};

export default GifList;
