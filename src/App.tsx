import React, { useEffect, useState } from "react";
import { Pokemon, getAll, getByName } from "./API";

import "./styles.css";

const calculatePower = (pokemon: Pokemon) =>
  pokemon.hp +
  pokemon.attack +
  pokemon.defense +
  pokemon.special_attack +
  pokemon.special_defense +
  pokemon.speed;

const PokemonTable: React.FunctionComponent<{
  pokemon: Pokemon[];
}> = ({ pokemon }) => {
  return (
    <table>
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Type</td>
        <td colSpan={6}>Stats</td>
      </tr>
      {pokemon.map((p) => (
        <tr key={p.id}>
          <td>{p.id}</td>
          <td>{p.name}</td>
          <td>{p.type.join(",")}</td>
          <td>{p.hp}</td>
          <td>{p.attack}</td>
          <td>{p.defense}</td>
          <td>{p.special_attack}</td>
          <td>{p.special_defense}</td>
          <td>{p.speed}</td>
        </tr>
      ))}
    </table>
  );
};

export default function App() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    getByName("bu").then(setPokemon);
  }, []);

  return (
    <div className="App">
      <PokemonTable pokemon={pokemon} />
    </div>
  );
}
