import React, { useState, useEffect } from 'react';
import { PokemonList } from './list';
import { getFirstTwenty } from './api';
import { Props as PokemonData } from './single';
import { isEqual } from 'lodash';
import { Switch, Route } from 'react-router';
import { urls } from 'components/router';
import { FullPokemon } from './full';
type Props = {};
export function Pokemon(props: Props) {
  const [pokemonList, setPokemonList] = useState<PokemonData[]>([])
  const [filteredList, setFilteredList] = useState<PokemonData[]>([])
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const updatePokemon = async () => {
      const newList = await getFirstTwenty();
      setPokemonList(newList);
    }
    updatePokemon();
  }, []);

  useEffect(() => {
    const filtered = pokemonList.filter(pokemon => (pokemon.name.search(filter) >= 0));
    if (!isEqual(filteredList, filtered)) {
      setFilteredList(filtered)
    }
  }, [filter, pokemonList, filteredList]);
  const ListSection = () => {
    return (
      <>
        <span>filter:</span><input value={filter} onChange={e => setFilter(e.target.value)} />
        <PokemonList pokemonList={filteredList} />
      </>
    )
  }
  const paths = Object.keys(urls['/']);
  console.log(paths[0])
  return (
    <section>
      <Switch>
        <Route exact path={`/${paths[0]}`} render={() => <ListSection />} />
        <Route exact path={`/${paths[0]}/:name`} component={FullPokemon} />
      </Switch>
    </section>
  )
}