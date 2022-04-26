import * as React from 'react';
import { render } from 'react-dom';
import { ReloadPrompt } from './components';
import AppHome from './App';

const rootElement = document.getElementById('root');
render(
  <React.StrictMode>
    <ReloadPrompt />
    <AppHome />
  </React.StrictMode>,
  rootElement,
);
