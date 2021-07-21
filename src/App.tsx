import './App.css';
import * as React from 'react';
import { History, LocationState } from 'history';
import { Router } from 'react-router';
import Routes from './routes';

interface AppProps {
  history: History<LocationState>,
}

const App = ({ history }: AppProps) => (
  <Router history={history}>
    <Routes />
  </Router>
);

export default App;
