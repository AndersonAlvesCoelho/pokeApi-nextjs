import { createContext, useState, ReactNode, useContext } from 'react';

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

type PokemonContextData = {
    pokemonList: Pokemon[];
    currentPokemonIndex: number;

    pokeList: (list: Pokemon[], index: number) => void;
}

export const PokemonContext = createContext({} as PokemonContextData);

// -------------------------------------------------------------------------

type PokemonContextProviderProps = {
    children: ReactNode;
}
export function PokemonContextProvider({ children }) {

    const [pokemonList, setPokemonList] = useState([]);
    const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);

    function pokeList(list: Pokemon[], index: number) {
        setPokemonList(list);
        setCurrentPokemonIndex(index);
    }


    return (
        <PokemonContext.Provider
            value={{
                // ESTADOS
                pokemonList,
                currentPokemonIndex,

                // FUNCTIONS
                pokeList,
            }}>
            {children}
        </PokemonContext.Provider>
    )
}

export const usePokemon = () => {
    return useContext(PokemonContext);
}