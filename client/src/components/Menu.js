import '../assets/js/main.js'
import logo2 from '../assets/logo2.png'
import { NavLink } from 'react-router-dom'

function Menu() {

    return (
        <div>
            <section className="py-8 px-4 lg:px-10 bg-gray-800">
                <nav className="relative flex justify-between items-center">
                    <NavLink to='/'><div className="text-2xl text-white font-bold">
                        <img className="h-20" src={logo2} alt="" width="auto" />
                    </div></NavLink>
                    <div className="lg:hidden">
                        <button className="p-2 navbar-burger">
                            <svg className="w-10 h-3" width="39" height="13" viewBox="0 0 39 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect width="39" height="2" rx="1" fill="#C4C4C4"></rect>
                                <rect x="19" y="11" width="20" height="2" rx="1" fill="#C4C4C4"></rect>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <ul className="flex items-center text-white space-x-8">
                            <NavLink to='/rush-orders'><li><div className="text-white font-bold text-lg" >Rush Orders</div></li></NavLink>
                            <span>
                                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle>
                                </svg>
                            </span>
                            <NavLink to='/sleeved-orders'><li><div className="text-white font-bold text-lg" >Sleeved Orders</div></li></NavLink>
                            <span>
                                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle>
                                </svg>
                            </span>
                            <NavLink to='/unsleeved-orders'><li><div className="text-white font-bold text-lg" >Unsleeved Orders</div></li></NavLink>
                            <span>
                                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle>
                                </svg>
                            </span>
                            <NavLink to='/power-switches'><li><div className="text-white font-bold text-lg" >Power Switches</div></li></NavLink>
                            <span>
                                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle>
                                </svg>
                            </span>
                            <NavLink to='/sleeved-12-pins'><li><div className="text-white font-bold text-lg" >Sleeved 12 Pins</div></li></NavLink>
                        </ul>
                    </div>
                    <div className="hidden lg:block"><NavLink to='/sign-in'><div
                        className="inline-block px-8 py-4 text-white font-bold border border-gray-200 hover:border-white rounded-xl">Sign In</div></NavLink></div>
                </nav>
                <div className="hidden navbar-menu fixed top-0 left-0 h-full w-5/6 max-w-sm z-50">
                    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
                    <nav className="relative flex flex-col py-8 h-full w-full bg-gray-600 overflow-y-auto">
                        <div className="flex items-center mb-16 pr-6">
                            <a className="ml-10 text-2xl text-gray-800 font-bold" href="/">
                                <img className="h-28" src={logo2} alt="" width="auto" />
                            </a>
                        </div>
                        <div>
                            <ul>
                                <NavLink to='/rush-orders'><li className="mb-1 px-10"><div className="block pl-8 py-4 text-xl text-white hover:bg-gray-400 rounded-xl">Rush Orders</div></li></NavLink>
                                <NavLink to='/sleeved-orders'><li className="mb-1 px-10"><div className="block pl-8 py-4 text-xl text-white hover:bg-gray-400 rounded-xl">Sleeved Orders</div></li></NavLink>
                                <NavLink to='/unsleeved-orders'><li className="mb-1 px-10"><div className="block pl-8 py-4 text-xl text-white hover:bg-gray-400 rounded-xl">Unsleeved Orders</div></li></NavLink>
                                <NavLink to='/power-switches'><li className="mb-1 px-10"><div className="block pl-8 py-4 text-xl text-white hover:bg-gray-400 rounded-xl">Power Switches</div></li></NavLink>
                                <NavLink to='/sleeved-12-pins'><li className="mb-1 px-10"><div className="block pl-8 py-4 text-xl text-white hover:bg-gray-400 rounded-xl">Sleeved 12 Pins</div></li></NavLink>
                            </ul>
                        </div>
                        <div className="mt-auto px-10">
                            <div className="pt-6"><NavLink to='/sign-in'><div
                                className="block mb-4 py-4 px-12 text-white text-center font-bold border border-gray-50 hover:border-gray-100 rounded-xl"
                                href="#">Sign In</div></NavLink>
                                <NavLink to='/sign-up'><div
                                    className="block py-4 px-12 text-white text-center font-bold bg-blue-500 hover:bg-blue-600 rounded-xl transition duration-200"
                                    href="#">Sign Up</div></NavLink>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </div>
    )
}

export default Menu
