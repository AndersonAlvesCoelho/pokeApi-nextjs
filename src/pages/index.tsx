import Reacr, { useState } from 'react';
import Lottie from 'react-lottie';

import { usePokemon } from '../contexts/PokemonContexts';
import { TypePokemonRender } from '../util/typePokemon';
import api from '../services/api';

import loadingPng from '../assets/loading.json';

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

const PLUS_POKEMON = 13;
const MAX_POKEMON = 891 ;

export default function Home({ allPokemon }: HomeProps) {

  const [turnPokemon, seTurnPokemon] = useState(0);
  const [plusPokemon, setPlusPokemon] = useState(PLUS_POKEMON);
  const [loading, setLoading] = useState(false);

  const pokemon = allPokemon;
  const { pokeList } = usePokemon();

  const defaultLoading = {
    loop: true,
    autoplay: true,
    animationData: loadingPng,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  async function loadPokemon() {
    setLoading(true);
    var max = MAX_POKEMON >= plusPokemon + 13 ? MAX_POKEMON : plusPokemon + 13
    for (var i = plusPokemon; i < max; i++) {
      const res = await api.get(`/${i}`);

      const plus = {
        id: res.data.id,
        name: res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1),
        types: res.data.types,
        spritesBack: res.data.sprites.back_default,
        spritesFront: res.data.sprites.front_default,

        spritesBackGif: res.data.sprites.versions['generation-v']['black-white'].animated.back_default,
        spritesFrontGif: res.data.sprites.versions['generation-v']['black-white'].animated.front_default,
        order: res.data.order,
      }

      pokemon.push(plus);
    }

    setPlusPokemon(plusPokemon + 13)
    setLoading(false);

    return pokemon;
  }

  return (
    <div className={styles.homePage}>
      <section className={styles.pokemonList}>
        <h2>útimos lançamentos</h2>

        <ul>
          {pokemon.map((poke, index) => {
            return (
              <li key={index}>

                {turnPokemon === (index + 1) ?
                  <img src={poke.spritesBack} onClick={() => seTurnPokemon(0)} />
                  : <img src={poke.spritesFront} onClick={() => seTurnPokemon(index + 1)} />
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

      <div className={styles.loadPokemon}>
        {loading ?
          <div >
            <Lottie
              options={defaultLoading}
              height={100}
              width={100}
            />
          </div>
          :
          <button
            type="button"
            onClick={() => loadPokemon()}
          >
            Carregar mais Pokémon
          </button>
        }
      </div>
    </div >
  )
}


// SSR
export async function getServerSideProps() {

  var pokemon = [];

  for (var i = 1; i < 13; i++) {
    const res = await api.get(`/${i}`);
    pokemon.push(res.data);
  }

  const allPokemon = pokemon.map(poke => {
    return {
      id: poke.id,
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
