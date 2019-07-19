import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

export default class Pokedex extends Component {
  render() {
    let pokedexTitle;
    if (this.props.isWinner) {
      pokedexTitle = <h1 className="Pokedex-winner">Pokemon Winner!!</h1>;
    } else {
      pokedexTitle = <h1 className="Pokedex-loser">Pokemon Loser</h1>;
    }
    return (
      <div className="Pokedex">
        <p>Total Experience: {this.props.exp}</p>
        {pokedexTitle}
        <div className="Pokedex-card">
          {this.props.pokemon.map((poke, key) => (
            <Pokecard
              key={poke.id}
              id={poke.id}
              name={poke.name}
              exp={poke.base_experience}
              type={poke.type}
            />
          ))}
        </div>
      </div>
    );
  }
}
