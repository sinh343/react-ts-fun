import React from 'react';
import { Pokemon, Props as PokemonProps } from './single';
import { useStyles } from './styles';

type Props = { pokemonList: PokemonProps[] };
export const PokemonList = (props: Props) => {
  const classes = useStyles()
  return (
    <section>
      <ol className={classes.pokemonList}>
        {props.pokemonList.map(pokeData => <li key={pokeData.name} className={classes.pokemonInfo}><Pokemon {...pokeData} /></li>)}
      </ol>

    </section>
  )
}