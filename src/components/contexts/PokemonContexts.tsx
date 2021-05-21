import { createContext, useState, ReactNode, useContext } from 'react';

export function PlayerContextProvider({ children }) {

    const [pokemonList, setPokemonList] = useState([]);
   

    return (
        <createContext.Provider
            value={{
                pokemonList,

            }}>
            {children}
        </createContext.Provider>
    )
}

export const usePlayer = () => {
    return useContext(PokemonContext);
}