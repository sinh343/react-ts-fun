import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { getFullPokemon } from './api';

type Props = RouteComponentProps<{ name: string }>;
export const FullPokemon = (props: Props) => {
  const [pokemonData, setPokemonData] = useState({});
  const { name } = props.match.params;

  useEffect(() => {
    const populateData = async () => {
      console.log('called', name)
      const data = await getFullPokemon(name);
      setPokemonData(data);
      console.log(data);
    }
    populateData()
  }, [setPokemonData, name])
  return (
    <section>
      <div>
        {JSON.stringify(pokemonData, null, 4)}
      </div>
    </section>
  )
}
