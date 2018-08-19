import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import PropTypes from 'prop-types';
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import routes from './routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <div>
            <Router history={history} routes={routes} />
         </div>
      </Provider>
    );
  }
}

App.propTypes = {
   store: PropTypes.object.isRequired,
   history: PropTypes.object.isRequired
}

export default App;

/*
PropTypes improve reusability of your component by validating the received data.
syncHistoryWithStore is a functino from react-router-redux that synce the browser history with redux's store. 
This library helps redux work with react-router. Every route change will equal to an action dispatched to the store.
configureStore is a helper function which help us configure the store.
*/
