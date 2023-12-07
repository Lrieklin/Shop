import { useState, useEffect } from "react";
import { Preloader } from "./Preloader";
import { ItemsList } from "./ItemsList";

function Shop() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  useEffect(
    function getPoke() {
      setLoading(true);
      fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=5")
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          setNextPage(data.next);
          setPrevPage(data.previous);
          data && setPokemon(data.map((product) => product.id));
        });
    },
    [currentPage]
  );

  // console.log('pokemon', pokemon);

  return (
    <main className="container content">
      {loading ? <Preloader /> : null}
      <ItemsList pokemon={pokemon} />
    </main>
  );
}

export { Shop };
