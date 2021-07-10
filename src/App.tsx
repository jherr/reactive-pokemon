import React, { useEffect, useState, useMemo } from "react";
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
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Type</td>
          <td colSpan={6}>Stats</td>
        </tr>
      </thead>
      <tbody>
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
      </tbody>
    </table>
  );
};

export default function App() {
  return (
    <div>
      <div className="top-bar">
        <div>Search</div>
        <input type="text"></input>
        <div>Power threshold</div>
        <input type="text"></input>
        <div>Count over threshold: </div>
      </div>
      <div className="two-column">
        <PokemonTable pokemon={[]} />
        <div>
          <div>Min: </div>
          <div>Max: </div>
        </div>
      </div>
    </div>
  );
}
