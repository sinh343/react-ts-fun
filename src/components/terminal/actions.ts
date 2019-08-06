export enum TerminalActions {
  SUBMIT = 'TERMINAL_SUBMIT'
}

const submitTerminal = (terminalValue: {command:string, commandArgs: string[]}) => ({
  type: TerminalActions.SUBMIT,
  payload: terminalValue
})


export const actions = { submitTerminal };