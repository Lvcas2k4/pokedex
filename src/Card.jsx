import React, { useState, useEffect } from "react";
function Card() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const pokemonApi = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  useEffect(() => {
    fetch(pokemonApi)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud de la API");
        }
        return response.json();
      })
      .then((data) => setPokemonData(data.results))
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const filteredPokemonData = pokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          placeholder="Buscar Pokémon"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <section className="padre-cards">
        {filteredPokemonData.map((pokemon) => {
          return (
            <div className="card" key={pokemon.name}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                  pokemon.url.split("/")[6]
                }.png`}
                alt={pokemon.name}
              />
              <div className="button-container">
                <h2>{pokemon.name}</h2>
                <button> More Info.</button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
export { Card };
