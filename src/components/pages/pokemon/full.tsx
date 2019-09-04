import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { getFullPokemon } from './api';

type Props = RouteComponentProps<{ name: string }>;
export const FullPokemon = (props: Props) => {
  const [pokemonData, setPokemonData] = useState<any>({});
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
  const showedKeys = ['height', 'weight', 'types','name'];
  const { height, weight, types } = pokemonData;
  const typeNames = !!types ? types.sort((typeObj: any) => typeObj.slot).map((type: any) => type.type).map((type: any) => type.name).join(', ') : []
  return (
    <section>
      <div>
        <h2>{name}</h2>
        <p>height: {height} weight: {weight} types: {typeNames}</p>
        {/* {JSON.stringify(pokemonData, null, 4)} */}
        <InfoRenderer pokeData={pokemonData} keysToHide={showedKeys}/>
      </div>
    </section>
  )
}

const InfoRenderer = ({ pokeData, keysToHide }: {pokeData:any, keysToHide: string[]}) => {
  const Link = ({ pokeDataKey }: any) => {
    const [hovered, setHovered] = useState(false);
    return (
      <div>
        <button onClick={() => setHovered(!hovered)}>{pokeDataKey}</button>
        {hovered && <div>{JSON.stringify(pokeData[pokeDataKey], null, 4)}</div>}
      </div>
    )
  }
  const allKeys = Object.keys(pokeData);
  const keysToShow = allKeys.filter((key) => !keysToHide.includes(key));
  return <div>{keysToShow.map((pokeKey, index) => <Link key={index} pokeDataKey={pokeKey} />)}</div>
}