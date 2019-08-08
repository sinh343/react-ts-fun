import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { useStyles } from './styles';

export type Props = RouteComponentProps & { name: string };
const BasePokemon = (props: Props) => {
  const { name } = props;
  const classes = useStyles()
  const makeMainPokemon = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    props.history.push(name);
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