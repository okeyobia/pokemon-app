import React, { Component } from "react";
import "./Pokecard.css";

const POKE_URI = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = value => (value <= 999 ? `00${value}`.slice(-3) : value);

export default class Pokecard extends Component {
  render() {
    const { name, id, type, exp } = this.props;
    const imgSrc = `${POKE_URI}${padToThree(id)}.png`;

    return (
      <div className="Pokecard-card">
        <img src={imgSrc} className="card-img" alt="{name}" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{type}</p>
          <p className="card-text">{exp}</p>
        </div>
      </div>
    );
  }
}
