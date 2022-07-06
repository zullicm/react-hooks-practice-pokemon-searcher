import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [allPokemon, setAllPokemon] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(res => res.json())
    .then(data => setAllPokemon(data))
  }, [])

  
  function setPokeSearch(e){
    setSearch(e.target.value)
  }
  
  function addPokemon(newPokemon){
    setAllPokemon([...allPokemon, newPokemon])
  }
  
  const allSearchedPokemon = allPokemon.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon}/>
      <br />
      <Search search={search} setPokeSearch={setPokeSearch} />
      <br />
      <PokemonCollection allPokemon={allSearchedPokemon} />
    </Container>
  );
}

export default PokemonPage;
