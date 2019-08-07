export enum TerminalActions {
  SUBMIT = 'TERMINAL_SUBMIT',
  LS = 'TERMINAL_LS_SUBMIT'
}

const submitTerminal = (terminalValue: { command: string, commandArgs: string[] }) => ({
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