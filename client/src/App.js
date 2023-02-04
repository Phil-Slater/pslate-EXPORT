import './css/styles.css'
import './App.css';
import '../src/css/tailwind/tailwind.min.css'
import './assets/js/main.js'
import { Route, Routes } from 'react-router-dom';

import SleevedOrders from './components/SleevedOrders';
import UnsleevedOrders from './components/UnsleevedOrders';
import RushOrders from './components/RushOrders';
import PowerSwitches from './components/PowerSwitches';
import Sleeved12Pins from './components/Sleeved12Pins';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import ProtectedRoute from './components/ProtectedRoute';
import Order from './components/Order';
import Guest from './components/Guest';
import SleevedDoubles from './components/Sleeved Orders/SleevedDoubles';
import AdapterCounts from './components/Adapter Counts/AdapterCounts';
import MissingCables from './components/Unsleeved Orders/MissingCables';
import UnsleevedCounts from './components/Unsleeved Orders/UnsleevedCounts';
import HomePage from './components/HomePage';

const App = () => {
  return (
    // <div>
    //   <div className="container px-4 pt-12 md:pt-20 mx-auto">
    //     <div className="relative flex flex-wrap -mx-4 items-start">
    //       <div className="w-full lg:w-1/2 2xl:w-2/5 px-4 mb-20 mb:mb-0">
    //         <h2 className="max-w-lg lg:max-w-md 2xl:max-w-none mt-7 mb-12 mb:mb-20 text-6xl lg:text-7xl 2xl:text-9xl text-white font-bold font-heading">
    //           Welcome to pslate Order Exporter.</h2>
    //       </div>
    //       <div className="flex flex-col mx-4">
    //         <NavLink to='/rush-orders'><div className="button-29-app text-white text-2xl">Rush Orders</div></NavLink>
    //         <NavLink to='/sleeved-orders'><div className="button-29-app text-white text-2xl">Sleeved Orders</div></NavLink>
    //         <NavLink to='/unsleeved-orders'><div className="button-29-app text-white text-2xl">Unsleeved Orders</div></NavLink>
    //         <NavLink to='/power-switches'><div className="button-29-app text-white text-2xl">Power Switches</div></NavLink>
    //         <NavLink to='/sleeved-12-pins'><div className="button-29-app text-white text-2xl">Sleeved 12 Pins</div></NavLink>
    //       </div>

    //     </div>
    //   </div>
    // </div>

    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-out' element={<SignOut />} />
      <Route path='/guest' element={<Guest />} />

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
      <Route path='/sleeved-doubles' element={
        <ProtectedRoute>
          <SleevedDoubles />
        </ProtectedRoute>} />
      <Route path='/adapter-counts' element={
        <ProtectedRoute>
          <AdapterCounts />
        </ProtectedRoute>} />
      <Route path='/unsleeved-counts' element={
        <ProtectedRoute>
          <UnsleevedCounts />
        </ProtectedRoute>} />
      <Route path='/missing-cables' element={
        <ProtectedRoute>
          <MissingCables />
        </ProtectedRoute>} />
    </Routes>
  );
}

export default App;
