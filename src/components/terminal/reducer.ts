import { TerminalActions, actions } from './actions';
import { Action } from 'redux';
import { initialState } from 'initialState';

export type TerminalAction = (
  Action<TerminalActions>
  & { payload: any }
)


export const TerminalReducer = (state = initialState.terminal as Partial<typeof initialState["terminal"]>, action: TerminalAction) => {
  switch (action.type) {
    case TerminalActions.SUBMIT:
      const { command, commandArgs } = action.payload as ReturnType<typeof actions.submitTerminal>["payload"];
      return { ...state, command, commandArgs }
    case TerminalActions.LS:
      return { ...state, ls: action.payload }
    default:
      return state
  }
}