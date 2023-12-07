function Item({ pokemonItem }) {
    const employees = ['Alice', 'Bob', 'Carl'];
    console.log("pokemonItem", pokemonItem);
    console.log('hriughaiuerguieir');

    return (
      <div>
        <p>{pokemonItem}</p>
        {pokemonItem.map((pokemon, index) => {
          return (
            <div key={index}>
                <img src={pokemon.sprite} alt="" />
                <span className="card-title">{pokemon.name}</span>
              <hr />
            </div>
          );
        })}
      </div>
    );


}
//   return (
//     <div>
//         {pokemonItem.map((pokemon, index) => {
//             return (
//                 <div key={index}>
                
//                 <div/>
//             );

//         })}
//     </div>
//   )
//     //   {/* {pokemonItem.map((res, index) => {}} */}

// }
export { Item };
