import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialStae = {};

const middleware = [thunk];

const store = createStore(
  rootReducer, 
  initialStae, 
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;