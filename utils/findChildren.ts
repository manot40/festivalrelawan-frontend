import { ReactNode, Children } from 'react';

export default function findChildren(children: ReactNode, name: string) {
  return Children.map(children, (child) =>
    // @ts-ignore
    child?.type.displayName === name ? child : null
  );
}
