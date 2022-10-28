import React from 'react';

type NamedChildren = { type: { displayName?: string } } & React.ReactNode;

export default function findChildren(
  children: React.ReactNode | React.ReactElement,
  name: string
) {
  return React.Children.map(children as NamedChildren, (child) =>
    child?.type?.displayName === name ? child : null
  ) as React.ReactElement[];
}
