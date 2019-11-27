import React from 'react';
import ReactDOM from 'react-dom';

import './stylesheets/ui.scss';
import './stylesheets/index.scss';

import { App } from './components/App';


window.react = React;
//const history = createBrowserHistory();


ReactDOM.render(
  <App />,
  document.getElementById('react-container')
);
