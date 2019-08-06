import { RouteComponentProps } from 'react-router';


export class TerminalArgumentError extends Error { }

export function cd(props: RouteComponentProps, location: string) {
  if (!location) {
    throw new TerminalArgumentError('args is empty')
  }
  if (location.startsWith('~')) {
    if (location.length === 1) {
      return props.history.push('/');
    } else if (location.startsWith('~/')) {
      return props.history.push(location.slice(1));
    } throw new Error('invalid syntax for naviagation')
  }
  return props.history.replace(location)
}