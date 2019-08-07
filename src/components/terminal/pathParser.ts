import { Props as TerminalProps } from 'components/terminal'

export class TerminalNavigationError extends Error { }

export function pathParser(props: TerminalProps, location: string): string[] {
  if (!location) {
    const lsRoute = props.location.pathname.split('/').slice(1);
    return lsRoute
  }
  if (location.startsWith('~') || location.startsWith('/')) {
    if (!location.startsWith('~') || location.startsWith('~/')) {
      return location.split('/').slice(1);
    } throw new TerminalNavigationError('invalid syntax for naviagation')
  }
  // return []
  return location.split('/');
}