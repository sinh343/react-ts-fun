import { Props as TerminalProps } from 'components/terminal'
import { pathParser } from '../pathParser';

export class TerminalArgumentError extends Error { }

export function cd(props: TerminalProps, location: string) {
  if (!location) {
    throw new TerminalArgumentError('args is empty')
  }
  const pathRoutes = pathParser(props, location);
  console.log(pathRoutes);
  if (location.startsWith('~') || location.startsWith('/')) {
    if (location.length === 1) {
      return props.history.push('/');
    } else if (!location.startsWith('~') || location.startsWith('~/')) {
      return props.history.push(`/${location.slice(1)}`);
    } throw new Error('invalid syntax for naviagation')
  }

  if (props.location.pathname === '/') {
    return props.history.push(location)
  }

  return props.history.push(`${props.location.pathname}/${location}`)
}