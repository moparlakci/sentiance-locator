import { createStore, applyMiddleware /*combineReducers*/ } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import rootReducer from './State/Reducers/index';

const middleware = [thunk];

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
