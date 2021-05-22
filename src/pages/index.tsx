import Reacr, { useState } from 'react';

import { usePokemon } from '../contexts/PokemonContexts';
import { TypePokemonRender } from '../util/typePokemon';

import styles from './home.module.scss';

type Pokemon = {
  id: number;
  name: string;
  types: [];
  spritesBack: string;
  spritesFront: string;
  spritesBackGif: string;
  spritesFrontGif: string;
  order: number;
}

type HomeProps = {
  allPokemon: Pokemon[];
}


export default function Home({ allPokemon }: HomeProps) {

  const [backPokemon, setBackPokemon] = useState(0);

  const { pokeList } = usePokemon();

  return (
    <div className={styles.homePage}>
      <section className={styles.pokemonList}>
        <h2>útimos lançamentos</h2>

        <ul>
          {allPokemon.map((poke, index) => {
            return (
              <li key={index}>
                {backPokemon === (index + 1) ?
                  <img src={poke.spritesBack} onClick={() => setBackPokemon(0)} />
                  : <img src={poke.spritesFront} onClick={() => setBackPokemon(index + 1)} />
                }

                <div className={styles.pokemonDetails}>
                  <p>{poke.name} </p>
                  {poke.types.map(type => TypePokemonRender(type.type.name))}
                  <br />
                  <span>Nº</span>
                  <span>{('000' + poke.id).slice(-3)}</span>
                </div>

                <button type="button" onClick={() => pokeList(allPokemon, index)}>
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


// SSR
export async function getServerSideProps() {

  var pokemon = [];

  for (var i = 1; i < 152; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await res.json();
    pokemon.push(data);
  }

  const allPokemon = pokemon.map(poke => {
    return {
      id: poke.id,
      // name: poke.name,
      name: poke.name.charAt(0).toUpperCase() + poke.name.slice(1),
      types: poke.types,
      spritesBack: poke.sprites.back_default,
      spritesFront: poke.sprites.front_default,

      spritesBackGif: poke.sprites.versions['generation-v']['black-white'].animated.back_default,
      spritesFrontGif: poke.sprites.versions['generation-v']['black-white'].animated.front_default,
      order: poke.order,
    }
  });

  return {
    props: {
      allPokemon,
    }
  }
}
