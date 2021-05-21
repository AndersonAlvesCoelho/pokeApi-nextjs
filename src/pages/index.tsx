import Reacr, { useState } from 'react';

import styles from './home.module.scss';

export default function Home({ pokemon }) {

  const [backPokemon, setBackPokemon] = useState(0);

  function typePokemon(type) {
    switch (type.type.name) {
      case "normal":
        return (
          <p className={`${styles.badge} ${styles.badgeNormal}`} >
            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
          </p>
        )
      case "fighting":
        return (
          <p className={`${styles.badge} ${styles.badgeFighting}`} >
            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
          </p>
        )
      case "water":
        return (
          <p className={`${styles.badge} ${styles.badgeWater}`} >
            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
          </p>
        )
      case "flying":
        return (
          <p className={`${styles.badge} ${styles.badgeFlying}`} >
            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
          </p>
        )
      case "fire":
        return (
          <p className={`${styles.badge} ${styles.badgeFire}`} >
            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
          </p>
        )
      case "grass":
        return (
          <p className={`${styles.badge} ${styles.badgeGrass}`} >
            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
          </p>
        )
      case "poison":
        return (
          <p className={`${styles.badge} ${styles.badgePoison}`} >
            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
          </p>
        )
      case "electric":
        return (
          <p className={`${styles.badge} ${styles.badgeElectric}`} >
            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
          </p>
        )
      case "ground":
        return (
          <p className={`${styles.badge} ${styles.badgeGround}`} >
            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
          </p>
        )
      case "psychic":
        return (
          <p className={`${styles.badge} ${styles.badgePsychic}`} >
            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
          </p>
        )
      case "rock":
        return (
          <p className={`${styles.badge} ${styles.badgeRock}`} >
            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
          </p>
        )
      case "ice":
        return (
          <p className={`${styles.badge} ${styles.badgeIce}`} >
            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
          </p>
        )
      case "bug":
        return (
          <p className={`${styles.badge} ${styles.badgeBug}`} >
            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
          </p>
        )
      case "dragon":
        return (
          <p className={`${styles.badge} ${styles.badgeDragon}`} >
            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
          </p>
        )
      case "ghost":
        return (
          <p className={`${styles.badge} ${styles.badgeGhost}`} >
            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
          </p>
        )
      case "dark":
        return (
          <p className={`${styles.badge} ${styles.badgeDark}`} >
            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
          </p>
        )
      case "steel":
        return (
          <p className={`${styles.badge} ${styles.badgeSteel}`} >
            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
          </p>
        )
      case "fairy":
        return (
          <p className={`${styles.badge} ${styles.badgeFairy}`} >
            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
          </p>
        )
    }
  }

  console.log("backPokemon ", backPokemon);

  return (
    <div className={styles.homePage}>
      <section className={styles.pokemonList}>
        <h2>útimos lançamentos</h2>

        <ul>
          {pokemon.map((poke, index) => {
            return (
              <li key={index}>


                {backPokemon === (index + 1) ?
                  <img src={poke.sprites.back_default} onClick={() => setBackPokemon(0)} />
                  : <img src={poke.sprites.front_default} onClick={() => setBackPokemon(index + 1)} />
                }

                <div className={styles.pokemonDetails}>
                  <p>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)} </p>
                  {poke.types.map(type => typePokemon(type))}
                  <br />
                  <span>Nº</span>
                  <span>{('000' + poke.id).slice(-3)}</span>
                </div>

                <button type="button">
                  <i className={styles.ggEyeAlt}></i>
                </button>
              </li>
            )
          })}
        </ul>
      </section>

    </div>
  )
}

//SSG
export async function getStaticProps() {


  var pokemon = [];

  for (var i = 1; i < 152; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await res.json();
    pokemon.push(data);
  }

  return {
    props: {
      pokemon,
    },
    revalidate: 60 * 60 * 8,
  }

}