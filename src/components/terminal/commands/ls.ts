import { Props as TerminalProps } from 'components/terminal'
import { urls } from 'components/router';
import { pathParser } from '../pathParser';

export function ls(props: TerminalProps, location: string) {
  const lsRoute = pathParser(props, location);
  console.log(lsRoute)
  return props.submitLS(constructPaths(lsRoute))
}

export class TerminalTerminatedPathError extends Error { }

export function constructPaths(lsRoute: string[]) {
  // 'ls /4/2' => lsRoute = [4,2]\

  let reducedUrls = { ...urls['/'] };

  try {
    lsRoute.forEach((path, index) => {
      if (path === '') return;
      const key = `/${path}`;
      try {
        const newUrls = { ...(reducedUrls as any)[key] }
        reducedUrls = { ...newUrls };

      } catch (error) {

        if (error instanceof TypeError) {
          if (reducedUrls as any === {}) {
            throw new TerminalTerminatedPathError();
          }
          return reducedUrls
        }
        throw error;
      }
    })
  } catch (error) {
    if (error instanceof TerminalTerminatedPathError) {
      return Object.keys(reducedUrls);
    }
    throw error;
  }

  return Object.keys(reducedUrls);
}