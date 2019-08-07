import React from 'react';
import { Pokemon, Props as PokemonProps } from './single';

type Props = { pokemonList: PokemonProps[] };
export const PokemonList = (props: Props) => {
  return (
    <section>
      <ol>
        {props.pokemonList.map(pokeData => <li key={pokeData.name}><Pokemon {...pokeData} /></li>)}
      </ol>

    </section>
  )
}