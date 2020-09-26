import { Props as TerminalProps } from 'components/terminal'

export class TerminalNavigationError extends Error { }

export function pathParser(props: TerminalProps, location: string): string[] {
  if (!location) {
    const lsRoute = props.location.pathname.split('/').slice(1);
    return lsRoute
  }

  const routes = location.split('/');
  if (location.startsWith('.')) {
    // dot relative path
    let dotRoute: string[] = [];
    if (routes[0] === '.') dotRoute = [...props.location.pathname.split('/')];
    if (routes[0] === '..') {
      dotRoute = props.location.pathname.split('/');
      dotRoute.pop();
    }

    const remainder = routes.slice(1)
    const fullRoutes = [...dotRoute, ...remainder].filter(str => str !== '')

    return fullRoutes

  }
  if (location.startsWith('~') || location.startsWith('/')) {
    // we have an absolute path
    if (routes[0] === '~' || routes[0] === '') return routes.length === 1 ? [] : routes.filter(str => str !== '');
    if (routes.length > 1) throw new TerminalNavigationError('invalid syntax for naviagation')
  }
  // lastly relative without dot
  // `${props.location.pathname}/${routes.join('/')}`.split('/')
  return [...props.location.pathname.split('/'), ...routes].filter(str => str !== '');
}