
import { usePokemon } from '../../contexts/PokemonContexts';

import styles from './styles.module.scss';

export function Pokemon() {

        const { currentPokemonIndex, pokemonList } = usePokemon();

    console.log("usePokemon ", usePokemon);

    const pokemon = pokemonList[currentPokemonIndex];

    return (
        <div className={styles.pokemonContainer}>

            <header>
                <strong>Pokémon, Tem que pegá-los...</strong>
                <img
                    src="https://media.tenor.com/images/528a291987f7f2ea1d9d6b3c541e3e42/tenor.gif"
                />
            </header>

            {pokemon ? (
                <div className={styles.currentPokemon}>
                    <img src={pokemon.spritesFrontGif} />
                    <strong>{pokemon.name}</strong>

                    <span>Nº {('000' + pokemon.id).slice(-3)}</span>
                </div>
            ) : (
                <div className={styles.emptyPokemon}>
                    <strong>Quem é esse pokemon?</strong>
                </div>
            )}


            <footer className={styles.empty} >
                {/* <div className={styles.progress}>
                    <span>Controles</span>

                </div>
                <div className={styles.buttons}>
                    <span>Numero</span>
                </div> */}

            </footer>
        </div >
    )
}