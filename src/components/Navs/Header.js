import React from "react";
import "./Header.css";
import SearchBox from "../Search/SearchBox";

function Header({ searchText, setSearchText }) {
  return (
    <div className="row">
      <div className="header">
        <div className="heading">
          <h1>Pics Search</h1>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <SearchBox searchText={searchText} setSearchText={setSearchText} />
        </div>
      </div>
    </div>
  );
}

export default Header;
