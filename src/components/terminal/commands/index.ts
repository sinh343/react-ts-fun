import { cd, TerminalArgumentError } from './cd';
import { ls } from './ls';
import { clear } from './clear';
export enum Command {
  LS = 'ls',
  PWD = 'pwd',
  CD = 'cd',
  RUN = 'run',
  CLEAR = 'clear'
}
export const commands = [
  Command.LS,
  Command.PWD,
  Command.CD,
  Command.RUN,
  Command.CLEAR,
]

export function getCommand(command: string) {
  switch (command) {
    case Command.LS:
      return ls;
    case Command.PWD:
      return console.log;
    case Command.CD:
      return cd;
    case Command.RUN:
      return console.log;
    case Command.CLEAR:
      return clear
    default:
      return console.log;
  }
}

export const errors = {
  INVALID_COMMAND: (command: string) => `command not found: ${command}`,
  TOO_FEW_ARGUMENTS: (command: string, args?: string[]) => `too few arguments given to ${command}`
}

export const Errors = {
  TerminalArgumentError,
}
