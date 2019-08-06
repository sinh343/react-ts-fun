import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { actions } from './actions'

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(actions, dispatch)
}

type Props = ReturnType<typeof mapDispatchToProps>;

function BaseTerminal(props: Props) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.submitTerminal(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>$<input type="text" onChange={e => setValue(e.target.value)} value={value} /></div>
    </form>
  );
}

export const Terminal = connect(null, mapDispatchToProps)(BaseTerminal)
export default Terminal;