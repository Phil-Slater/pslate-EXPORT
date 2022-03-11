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

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/sleeved-orders' element={<SleevedOrders />} />
          <Route path='/unsleeved-orders' element={<UnsleevedOrders />} />
          <Route path='/rush-orders' element={<RushOrders />} />
          <Route path='/power-switches' element={<PowerSwitches />} />
          <Route path='/sleeved-12-pins' element={<Sleeved12Pins />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
