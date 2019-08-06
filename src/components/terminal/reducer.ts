import { TerminalActions, actions } from './actions';
import { Action } from 'redux';
import { initialState } from 'initialState';
export type TerminalAction = (
  Action<TerminalActions.SUBMIT>
  & { payload: ReturnType<typeof actions.submitTerminal>["payload"] }
)




export const TerminalReducer = (state = initialState.terminal, action: TerminalAction) => {
  switch (action.type) {
    case TerminalActions.SUBMIT:
      const {command, commandArgs} = action.payload;
      return { ...state, command, commandArgs }
    default:
      return state
  }
}