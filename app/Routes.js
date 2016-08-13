import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

import App from './components/App';
import Form from './components/Form';
import Results from './components/Results';

class AppRouter extends React.Component {

  render () {

    return (
      //Defines the routes for app and renders different components
      <Router history={ hashHistory }>
        <Route path="/" component={App}>
          <Route path="results" component={Results}></Route>
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(<AppRouter />, document.getElementById('app'));