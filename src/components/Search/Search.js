import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Search.css";

const Search = ({ data }) => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSearch = (event) => {
    if (query) {
      navigate(`/show/product/${query}`);
      return;
    } else if (query === "") {
      toast.info("please type anything to search", {
        position: "top-center",
      });
    }
  };

  const handleSearchOnKeyDown = (event) => {
    if (event.key === "Enter") {
      if (query) {
        navigate(`/show/product/${query}`);
        return;
      } else if (query === "") {
        toast.info("please type anything to search", {
          position: "top-center",
        });
      }
    }
  };
  return (
    <div className="search">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onKeyDown={(e) => handleSearchOnKeyDown(e)}
        placeholder="Search..."
        className="search-input"
      />
      <div className="search-icon">
        <SearchIcon
          sx={{ color: "#F4EEE0" }}
          onClick={(e) => {
            handleSearch(e);
          }}
        />
      </div>
    </div>
  );
};

export default Search;
