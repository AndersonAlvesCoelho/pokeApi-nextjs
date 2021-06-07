
import Reacr, { useState, useEffect } from 'react';
import { usePokemon } from '../../contexts/PokemonContexts';
import Lottie from 'react-lottie';

import styles from './styles.module.scss';

import loadPokemon from '../../assets/dice-rolling.json';

export function Pokemon() {

    const { currentPokemonIndex, pokemonList } = usePokemon();
    const [turnPokemon, seTurnPokemon] = useState(true);
    const [diceRolling, seDiceRolling] = useState(false);

    const pokemon = pokemonList[currentPokemonIndex];

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadPokemon,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    useEffect(() => {

        if (!diceRolling) {
            setTimeout(function () {
                seDiceRolling(true);
            }, 3000);
        }

    }, [diceRolling])


    return (
        <div className={styles.pokemonContainer}>

            <header>
                <strong>Pokémon, Tem que pegá-los...</strong>
                <div >
                    <Lottie
                        options={defaultOptions}
                        height={100}
                        width={100}
                        isStopped={diceRolling}
                    />
                </div>
            </header>

            {pokemon ? (
                <div className={styles.currentPokemon}>

                    <img src={turnPokemon ? pokemon.spritesFrontGif : pokemon.spritesBackGif}
                        onClick={() => seTurnPokemon(!turnPokemon)}
                    />

                    <strong>{pokemon.name}</strong>
                    <span>Nº {('000' + pokemon.id).slice(-3)}</span>

                </div>
            ) : (
                <div className={styles.emptyPokemon}>
                    <strong>Quem é esse pokemon?</strong>
                </div>
            )}

            <footer className={pokemon ? styles.empty : ''} >
                <div className={styles.progress}>
                    <span>0</span>

                    <div className={styles.slider}>
                        < div className={styles.emptySlider} />
                    </div>
                    <span>213</span>
                </div>

                {/* CONTROLLER PLAYER  */}
                <div className={styles.buttons}>
                    <button type="button"><img src="/play-previous.svg" alt="Tocar anterior" /></button>
                    <button
                        type="button"
                        className={styles.playButton}
                        onClick={() => seDiceRolling(!diceRolling)}
                        disabled={!diceRolling}
                    >
                        <img src="/shuffle.svg" alt="Embaralhar" />
                    </button>

                    <button type="button"  ><img src="/play-next.svg" alt="Tocar próximo" /></button>
                </div>

                <span>213</span>
            </footer>
        </div >
    )
}