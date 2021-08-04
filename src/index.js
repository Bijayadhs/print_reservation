import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Reserve from './components/Reserve/Reserve';
import Header from './components/Header/Header';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />

      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/reserve' component={Reserve} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
