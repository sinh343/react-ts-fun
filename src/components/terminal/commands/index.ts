import { cd, TerminalArgumentError } from './cd';

export const commands = [
  'ls',
  'pwd',
  'cd',
  'run',
]

export function getCommand(command: string) {
  switch (command) {
    case 'ls':
      return console.log
    case 'pwd':
      return console.log
    case 'cd':
      return cd
    case 'run':
      return console.log
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
