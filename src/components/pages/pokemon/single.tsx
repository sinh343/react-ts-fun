import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

export type Props = RouteComponentProps & { name: string };
const BasePokemon = (props: Props) => {
  const { name } = props;
  const makeMainPokemon = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    props.history.push(`pokemon/${name}`);
  }
  return (
    <div>
      <button onClick={makeMainPokemon}>
        <h1>{name}</h1>
      </button>
    </div>
  )
}
export const Pokemon = withRouter(BasePokemon);