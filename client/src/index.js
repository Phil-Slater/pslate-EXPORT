import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import SleevedOrders from './components/SleevedOrders';
import UnsleevedOrders from './components/UnsleevedOrders';
import RushOrders from './components/RushOrders';
import PowerSwitches from './components/PowerSwitches';
import Sleeved12Pins from './components/Sleeved12Pins';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import userReducer from './store/reducers/user'
import orderReducer from './store/reducers/order'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';


const rootReducer = combineReducers({
  userReducer: userReducer,
  orderReducer: orderReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const token = localStorage.getItem('jwt')
store.dispatch({ type: 'ON_AUTH', payload: token })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        </Routes>
        <BaseLayout>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/sleeved-orders' element={<SleevedOrders />} />
            <Route path='/unsleeved-orders' element={<UnsleevedOrders />} />
            <Route path='/rush-orders' element={<RushOrders />} />
            <Route path='/power-switches' element={<PowerSwitches />} />
            <Route path='/sleeved-12-pins' element={<Sleeved12Pins />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/sign-in' element={<SignIn />} />
          </Routes>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
