import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCPtMiTJcb99t9nT8NrYfjuB2cqpzYpB9M",
      authDomain: "manager-27056.firebaseapp.com",
      databaseURL: "https://manager-27056.firebaseio.com",
      projectId: "manager-27056",
      storageBucket: "manager-27056.appspot.com",
      messagingSenderId: "770292979376"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
export default App;
