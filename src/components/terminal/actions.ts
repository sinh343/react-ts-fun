export enum TerminalActions {
  SUBMIT = 'TERMINAL_SUBMIT'
}

const submitTerminal = (terminalValue: string) => ({
  type: TerminalActions.SUBMIT,
  payload: terminalValue
})


export const actions = { submitTerminal };