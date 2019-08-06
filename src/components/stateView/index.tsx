import React from 'react';
import { connect } from 'react-redux';
import { initialState } from 'initialState';

const mapStateToProps = (state: typeof initialState) => {
  return { state };
}


type Props = {} & ReturnType<typeof mapStateToProps>


function BaseStateView(props: Props) {

  const renderBlock = (partialState: Partial<typeof initialState>, index: number) => {
    const jsonPrettyString = JSON.stringify(partialState, null, 4)
    return (<li key={index}>{jsonPrettyString}</li>)
  }

  const stateBlocks = Object.keys(props.state)
    .filter((key) => key[0] !== '_') // removing private state
    .map((key, index) => renderBlock({ [key]: props.state[key as keyof typeof props.state] }, index))


  return (
    <ul>
      {stateBlocks}
    </ul>
  )
}

export const StateView = connect(mapStateToProps)(BaseStateView);
export default StateView;