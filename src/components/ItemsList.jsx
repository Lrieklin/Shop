import { useState, useEffect } from "react";
import { Item } from "./Item";

function ItemsList({ pokemon }) {
  const [pokemonItem, setPokemonItem] = useState([]);

  useEffect(() => {
    let urls = pokemon.map(
      (p) => `https://api.escuelajs.co/api/v1/products/${p}`
    );

    let fetches = urls.map((url) =>
      fetch(url).then((response) => response.json())
    );

    Promise.allSettled(fetches).then((results) => {
      results.forEach((result) => {
        if (result.status == "fulfilled") {
          console.log("result", result.value);
          setPokemonItem((prevState) => [
            ...prevState,
            {
              id: result.value.id,
              name: result.value.title,
              images: result.value.images[0],
            },
          ]);
        }
      });
    });
    console.log('ITEM', pokemonItem);
  }, [pokemon]);

  return (
    <div>
      {/* <p>{pokemonItem}</p> */}
      {pokemonItem.map((pokemon, index) => {
        return (
          <div key={pokemon.id}>
            <img src={pokemon.images} alt="" />
            <span className="card-title">{pokemon.name}</span>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export { ItemsList };
