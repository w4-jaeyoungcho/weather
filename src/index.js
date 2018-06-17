import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import './index.css';
// import App from './App';
import App from "./components/App";
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import rootReducer from "./reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
