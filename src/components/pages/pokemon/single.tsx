import React from 'react';

export type Props = { id: number, name: string, height: number, weight: number };
export const Pokemon = (props: Props) => {
  const { name } = props;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}