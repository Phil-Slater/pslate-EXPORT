import '../css/styles.css'
import '../App.css';
import '../css/tailwind/tailwind.min.css'
import '../assets/js/main.js'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <div className="container px-4 pt-12 md:pt-20 mx-auto">
                <div className="relative flex flex-wrap -mx-4 items-start">
                    <div className="w-full lg:w-1/2 2xl:w-2/5 px-4 mb-20 mb:mb-0">
                        <h2 className="max-w-lg lg:max-w-md 2xl:max-w-none mt-7 mb-12 mb:mb-20 text-6xl lg:text-7xl 2xl:text-9xl text-white font-bold font-heading">
                            Welcome to pslate Order Exporter.</h2>
                    </div>
                    <div className="flex flex-col mx-4">
                        <NavLink to='/rush-orders'><div className="button-29-app text-white text-2xl">Rush Orders</div></NavLink>
                        <NavLink to='/sleeved-orders'><div className="button-29-app text-white text-2xl">Sleeved Orders</div></NavLink>
                        <NavLink to='/unsleeved-orders'><div className="button-29-app text-white text-2xl">Unsleeved Orders</div></NavLink>
                        <NavLink to='/power-switches'><div className="button-29-app text-white text-2xl">Power Switches</div></NavLink>
                        <NavLink to='/sleeved-12-pins'><div className="button-29-app text-white text-2xl">Sleeved 12 Pins</div></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomePage;


