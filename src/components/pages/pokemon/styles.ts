import { createUseStyles } from 'react-jss';
import { CSSProperties } from 'react';

const pokemonList: CSSProperties = {
  display: 'flex',
  listStyle: 'none',
  flexWrap: 'wrap',
}
const pokemonInfo: CSSProperties = {
  padding: '8px',
}

const styles = { pokemonList,pokemonInfo }

export const useStyles = createUseStyles(styles);