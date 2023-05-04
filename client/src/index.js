import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import userReducer from './store/reducers/user'
import orderReducer from './store/reducers/order'
import BaseLayout from './components/BaseLayout';
import { BrowserRouter } from 'react-router-dom';
import { requestSent, responseRecieved } from './store/creators/actionCreators';

const rootReducer = combineReducers({
  userReducer: userReducer,
  orderReducer: orderReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const token = localStorage.getItem('jwt')
store.dispatch({ type: 'ON_AUTH', payload: token })

//axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.baseURL = 'https://pslate-export.herokuapp.com'
axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
axios.defaults.transformRequest = [(data) => {
  store.dispatch(requestSent())
  return data
},
...axios.defaults.transformRequest,
]

axios.defaults.transformResponse = [(data) => {
  store.dispatch(responseRecieved())
  return data
},
...axios.defaults.transformResponse,
]

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout>
          <App />
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
