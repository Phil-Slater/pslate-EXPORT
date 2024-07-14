import './css/styles.css'
import './App.css';
import '../src/css/tailwind/tailwind.min.css'
import './assets/js/main.js'
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
import LoadingAnimation from './components/Loading/LoadingAnimation';
import WarGanizerOrders from './components/WarGanizerOrders.js';

const App = () => {

  const orderReducer = useSelector(state => state.orderReducer)
  const { isLoading } = orderReducer

  return (
    <>
      {isLoading && <LoadingAnimation />}
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
        <Route path='/war-ganizer-orders' element={
          <ProtectedRoute>
            <WarGanizerOrders />
          </ProtectedRoute>} />
      </Routes>
    </>
  );
}

export default App;
