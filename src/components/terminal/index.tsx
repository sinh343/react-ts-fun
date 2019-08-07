import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { actions } from './actions';
import { commands, errors, getCommand, Command } from './commands';
import { TerminalArgumentError } from './commands/cd';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { initialState } from 'initialState';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(actions, dispatch)
}
const mapDispatchToState = (state: typeof initialState) => {
  const { terminal } = state;
  return {
    terminal
  }
}

export type Props = ReturnType<typeof mapDispatchToState> & ReturnType<typeof mapDispatchToProps> & RouteComponentProps;


const parseSubmitedValue = (submitedValue: string) => {
  if (!submitedValue) return;
  const words = submitedValue.split(' ');
  if (words.length === 0) {

  }
  return words
}

function BaseTerminal(props: Props) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [command, ...commandArgs] = parseSubmitedValue(value);
    setValue('');

    if (!commands.includes(command as Command)) {
      setError(errors.INVALID_COMMAND(command));
      return props.submitTerminal({ command: '', commandArgs: [] });
    }
    setError('');
    try {
      getCommand(command)(props, ...commandArgs);
    } catch (error) {
      if (error instanceof TerminalArgumentError) {
        setError(errors.TOO_FEW_ARGUMENTS(command, commandArgs))
      }
      setError(error.message)
    }
    props.submitTerminal({ command, commandArgs, ls: [] });
  }
  const lsBlock = (item: string, key: number) => {
    return (<ul key={key}>{item}</ul>)
  }
  return (
    <section className='section'>
      <form onSubmit={handleSubmit}>
        $<input type="text" onChange={e => setValue(e.target.value)} value={value} />
      </form>
      {error && <span>{error}</span>}
      {props.terminal.ls && props.terminal.ls.map(lsBlock)}
    </section>
  );
}

export const Terminal = withRouter(connect(mapDispatchToState, mapDispatchToProps)(BaseTerminal))
export default Terminal;