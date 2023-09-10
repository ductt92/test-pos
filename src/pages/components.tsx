/* eslint-disable unused-imports/no-unused-vars */
import * as React from 'react';

type Color = typeof colorList[number];

export default function ComponentsPage() {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');
  const [color, setColor] = React.useState<Color>('sky');
  function toggleMode() {
    return mode === 'dark' ? setMode('light') : setMode('dark');
  }

  const textColor = mode === 'dark' ? 'text-gray-300' : 'text-gray-600';

  return <main></main>;
}

const colorList = [
  'rose',
  'pink',
  'fuchsia',
  'purple',
  'violet',
  'indigo',
  'blue',
  'sky',
  'cyan',
  'teal',
  'emerald',
  'green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'red',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
] as const;
