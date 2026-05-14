import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchBox = ({ onSearch }) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  function handleClick() {
    const item = inputValue.toLocaleLowerCase().trim();
    if (item === "clothing" || item === "shirts" || item === "cloth") {
      navigate("/category/clothing");
    } else if (item === "electronics") {
      navigate("/category/electronics");
    } else if (item === "jewellery" || item == "Earings" || item === "jewelery") {
      navigate("/category/jewellery");
    } else if (item === "") {
      return <p>No item found</p>
    }
  }
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search products"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleClick();
          }
        }}

        onChange={(e) => {
          const value = e.target.value;
          setInputValue(value);
          onSearch(value);
        }} />
    </div>
  );
}

export default SearchBox;