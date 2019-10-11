import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import peopleReducer from "./reducers/index"
import { Provider } from 'react-redux'
import { addPerson, addPeople } from "./actions";

const store = createStore(peopleReducer);
store.dispatch(addPeople());
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


serviceWorker.unregister();
