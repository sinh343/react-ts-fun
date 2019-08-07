import { Props as TerminalProps } from 'components/terminal'
import { urls } from 'components/router';

export class TerminalArgumentError extends Error { }

export function ls(props: TerminalProps, location: string) {
  if (!location) {
    const lsRoute = props.location.pathname.split('/').slice(1);
    console.log(lsRoute);
    return props.submitLS(constructPaths(lsRoute))
  }
  if (location.startsWith('~') || location.startsWith('/')) {
    if (!location.startsWith('~') || location.startsWith('~/')) {
      return props.submitLS(constructPaths(location.split('/').slice(1)));
    } throw new Error('invalid syntax for naviagation')
  }
  console.log(props.location);
  return props.submitLS(constructPaths([]))
}

export function constructPaths(lsRoute: string[]) {
  // 'ls /4/2' => lsRoute = [4,2]\
  
  let reducedUrls = { ...urls['/'] };
  lsRoute.forEach((path, index) => {
    if (path === '') return;
    const key = `/${path}`;
    reducedUrls = (reducedUrls as any)[key]
  })
  
  return Object.keys(reducedUrls);

}