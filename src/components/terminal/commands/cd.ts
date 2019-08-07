import { Props as TerminalProps } from 'components/terminal'
import { pathParser } from '../pathParser';

export class TerminalArgumentError extends Error { }

export function cd(props: TerminalProps, location: string) {
  if (!location) {
    throw new TerminalArgumentError('args is empty')
  }
  const pathRoutes = pathParser(props, location);
  console.log(pathRoutes);
  props.history.push(pathRoutes.join('/'));
}