import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'
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
import SignOut from './components/SignOut';
import ProtectedRoute from './components/ProtectedRoute';
import Order from './components/Order';

const rootReducer = combineReducers({
  userReducer: userReducer,
  orderReducer: orderReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const token = localStorage.getItem('jwt')
store.dispatch({ type: 'ON_AUTH', payload: token })

axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        </Routes>
        <BaseLayout>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-out' element={<SignOut />} />

            <Route path='/sleeved-orders' element={
              <ProtectedRoute>
                <SleevedOrders />
              </ProtectedRoute>} />
            <Route path='/unsleeved-orders' element={
              <ProtectedRoute>
                <UnsleevedOrders />
              </ProtectedRoute>} />
            <Route path='/rush-orders' element={
              <ProtectedRoute>
                <RushOrders />
              </ProtectedRoute>} />
            <Route path='/power-switches' element={
              <ProtectedRoute>
                <PowerSwitches />
              </ProtectedRoute>} />
            <Route path='/sleeved-12-pins' element={
              <ProtectedRoute>
                <Sleeved12Pins />
              </ProtectedRoute>} />
            <Route path='/order/:id' element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>} />

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
