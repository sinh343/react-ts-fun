import { TerminalActions, actions } from './actions';
import { Action } from 'redux';
import { initialState } from 'initialState';
export type TerminalAction = (
  Action<TerminalActions.SUBMIT>
  & { payload: ReturnType<typeof actions.submitTerminal>["payload"] }
)

const commands = [
  'ls',
  'pwd',
  'cd',
  'run',
]
const errors = {
  INVALID_COMMAND: (command: string) => `command not found: ${command}`
}
const parseSubmitedValue = (submitedValue: string) => {
  if (!submitedValue) return;
  const words = submitedValue.split(' ');
  if (words.length === 0) {

  }
  return words
}

export const TerminalReducer = (state = initialState.terminal, action: TerminalAction) => {
  switch (action.type) {
    case TerminalActions.SUBMIT:
      const [command, ...args] = parseSubmitedValue(action.payload)
      if (commands.includes(command)) {
        return { ...state, command, arguments: args }
      }
      return { ...state, error: errors.INVALID_COMMAND(command), command: '', arguments: [] }
    default:
      return state
  }
}