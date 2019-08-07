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
    const fullRoutes = [...dotRoute, ...remainder]

    return fullRoutes

  }
  if (location.startsWith('~') || location.startsWith('')) {
    // we have an absolute path
    if (routes[0] === '~' || routes[0] === '') return routes.length === 1 ? [] : routes.slice(1);

    console.log(routes);
    throw new TerminalNavigationError('invalid syntax for naviagation')
  }
  // lastly relative without dot   
  return `${props.location.pathname}/${location}`.split('/');
}