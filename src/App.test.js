import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import formatElapsedTime from './utils';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('returns 00:00:00 when parameter is not a number', () => {
  const result1 = formatElapsedTime('string');
  const result2 = formatElapsedTime([]);
  const result3 = formatElapsedTime({});

  expect(result1).toBe('00:00:00');
  expect(result2).toBe('00:00:00');
  expect(result3).toBe('00:00:00');
});


it('returns elapsed time in format 00:00:00 when parameter is a number', () => {
  const result1 = formatElapsedTime(129100);

  expect(result1).toBe('02:09:10');
});

