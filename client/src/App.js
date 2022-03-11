
import './App.css';
import '../src/css/tailwind/tailwind.min.css'
import './assets/js/main.js'
import bgLines from './assets/zospace-assets/lines/circle.svg'
import Menu from './components/Menu';
import SleevedOrders from './components/SleevedOrders';
import { NavLink } from 'react-router-dom'

function App() {
  return (
    <div>
      {/* <div className="relative pb-160 bg-gray-800">
        <div className="absolute inset-x-0  h-full bg-gradient-zospace-1"></div>
        <div className="absolute bottom-0 pb-160 inset-x-0 h-3/5 w-2full -ml-64 -mb-12 bg-gradient-zospace-2 transform -rotate-6">
        </div> */}
      <div className="container px-4 pt-12 md:pt-20 mx-auto">
        <div className="relative flex flex-wrap -mx-4 items-start">
          <div className="w-full lg:w-1/2 2xl:w-2/5 px-4 mb-20 mb:mb-0">
            <h2 className="max-w-lg lg:max-w-md 2xl:max-w-none mt-7 mb-12 mb:mb-20 text-6xl lg:text-7xl 2xl:text-9xl text-white font-bold font-heading">
              Welcome to pslate Order Exporter.</h2>
          </div>
          <div className="flex flex-col px-12 mx-12 sm:-mx-8">
            <NavLink to='/rush-orders'><div className="inline-block px-20 py-5 w-112 text-lg text-white text-center font-bold bg-blue-500 mb-6 hover:bg-blue-600 rounded-full transition duration-200">Rush Orders</div></NavLink>
            <NavLink to='/sleeved-orders'><div className="inline-block px-20 py-5 w-112 text-lg text-white text-center font-bold bg-blue-500 mb-6 hover:bg-blue-600 rounded-full transition duration-200">Sleeved Orders</div></NavLink>
            <NavLink to='/unsleeved-orders'><div className="inline-block px-20 py-5 w-112 text-lg text-white text-center font-bold bg-blue-500 mb-6 hover:bg-blue-600 rounded-full transition duration-200">Unsleeved Orders</div></NavLink>
            <NavLink to='/power-switches'><div className="inline-block px-20 py-5 w-112 text-lg text-white text-center font-bold bg-blue-500 mb-6 hover:bg-blue-600 rounded-full transition duration-200">Power Switches</div></NavLink>
            <NavLink to='/sleeved-12-pins'><div className="inline-block px-20 py-5 w-112 text-lg text-white text-center font-bold bg-blue-500 mb-6 hover:bg-blue-600 rounded-full transition duration-200">Sleeved 12 Pins</div></NavLink>
          </div>

        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
