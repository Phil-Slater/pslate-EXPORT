
import './App.css';
import '../src/css/tailwind/tailwind.min.css'
import './assets/js/main.js'
import Menu from './components/Menu';
import SleevedOrders from './components/SleevedOrders';

function App() {
  return (
    <div>
      <Menu />
      <SleevedOrders />
      <div className="relative pb-160 bg-gray-800">
        <div className="absolute inset-x-0  h-full bg-gradient-zospace-1"></div>
        <div className="absolute bottom-0 pb-160 inset-x-0 h-3/5 w-2full -ml-64 -mb-12 bg-gradient-zospace-2 transform -rotate-6">
        </div>
        <div className="relative container px-4 pt-12 md:pt-20 mx-auto">

          <div className="relative flex flex-wrap -mx-4 items-start">
            <div className="w-full lg:w-1/2 2xl:w-2/5 px-4 mb-20 mb:mb-0">
              <h2 className="max-w-lg lg:max-w-md 2xl:max-w-none mt-7 mb-12 mb:mb-20 text-6xl lg:text-7xl 2xl:text-9xl text-white font-bold font-heading">
                Welcome to pslate Order Exporter.</h2>
            </div>
            <div className="flex flex-col px-20 mx-20 sm:-mx-16"><a
              className="inline-block px-20 py-5 text-lg text-white font-bold bg-blue-500 mb-6 hover:bg-blue-600 rounded-full transition duration-200"
              href="#">Rush Orders</a>
              <a className="inline-block px-20 py-5 text-lg text-white font-bold bg-blue-500 mb-6 hover:bg-blue-600 rounded-full transition duration-200"
                href="#">Sleeved Orders</a>
              <a className="inline-block px-20 py-5 text-lg text-white font-bold bg-blue-500 rounded-full mb-6 hover:bg-blue-600 hover:border-none  transition duration-200"
                href="#">Unsleeved Orders</a>
              <a className="inline-block px-20 py-5 text-lg text-white font-bold bg-blue-500 mb-6 hover:bg-blue-600 rounded-full transition duration-200"
                href="#">Power Switches</a>
              <a className="inline-block px-20 py-5 text-lg text-white font-bold bg-blue-500 mb-6 hover:bg-blue-600 rounded-full transition duration-200"
                href="#">Sleeved 12 Pins</a>
            </div>
            <div className="pb-160"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
