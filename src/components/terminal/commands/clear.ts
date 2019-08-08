import { Props as TerminalProps } from 'components/terminal'

export class TerminalArgumentError extends Error { }

export function clear(props: TerminalProps) {
  props.submitLS([] as string[]) // reset ls list every command
}