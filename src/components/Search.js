import React from "react";

function Search({ search, setPokeSearch }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={setPokeSearch} className="prompt" placeholder="search ..." value={search}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
