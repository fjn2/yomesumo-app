import { createClass } from 'react'
import { render } from 'react-dom'
import createReactClass from 'create-react-class'
import { createStore, combineReducers } from 'redux'
import { createBrowserHistory } from 'history';
import { Provider, connect } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import application from './application';

const reducers = {
  home: application.home.homeReducer,
  routing: routerReducer
};

let store = createStore(combineReducers(reducers));

const history = syncHistoryWithStore(createBrowserHistory(), store);


const homePageConnected = connect((a) => (a), null)(application.home.homePage);


const App = createReactClass({
  render:() => {
    return(
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={homePageConnected}>
          </Route>
        </Router>
      </Provider>
    )
  }
});



render(<App/>, document.getElementById('app'));


// export default function foo() {
//   console.log('this is the start');
// }