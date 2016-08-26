import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

import App from './components/App';
import Header from './components/Header';
import LoadTest from './components/LoadTest';
import Results from './components/Results';
import Sidebar from './components/Sidebar';
import Loading from './components/Loading';
import SplashPage from './components/SplashPage';

class AppRouter extends React.Component {

  render () {

    return (
      //Defines the routes for app and renders different components
      <Router history={ hashHistory }>
        <Route path="/" component={App}>
          <Route path="results" component={Results}></Route>
          <Route path="loadtest" component={LoadTest}></Route>
          <Route path="loading" component={Loading}></Route>
          <Route path="home" component={SplashPage}></Route>
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(<AppRouter />, document.getElementById('app'));