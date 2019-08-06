import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { actions } from './actions';
import { commands, errors, getCommand } from './commands';
import { TerminalArgumentError } from './commands/cd';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export type Props = ReturnType<typeof mapDispatchToProps> & RouteComponentProps;


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

    if (!commands.includes(command)) {
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
    props.submitTerminal({ command, commandArgs });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        $<input type="text" onChange={e => setValue(e.target.value)} value={value} />
        {error && <span>{error}</span>}
      </div>
    </form>
  );
}

export const Terminal = withRouter(connect(null, mapDispatchToProps)(BaseTerminal))
export default Terminal;