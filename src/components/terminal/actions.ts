import { initialState } from "initialState";

export enum TerminalActions {
  SUBMIT = 'TERMINAL_SUBMIT',
  LS = 'TERMINAL_LS_SUBMIT'
}

const submitTerminal = (terminalValue: Partial<typeof initialState["terminal"]>) => ({
  type: TerminalActions.SUBMIT,
  payload: terminalValue
})

const submitLS = (lsRoute: string[]) => {
  return {
    type: TerminalActions.LS,
    payload: lsRoute
  }
}
export const actions = { submitTerminal, submitLS };