import { Props as TerminalProps } from 'components/terminal'
import { pathParser } from '../pathParser';

export class TerminalArgumentError extends Error { }

export function clear(props: TerminalProps) {
  props.submitLS([] as string[]) // reset ls list every command
}