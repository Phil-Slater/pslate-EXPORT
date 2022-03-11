import logo from '../assets/pslate.png'
import logo2 from '../assets/logo2.png'

function Menu() {
    return (
        <div>
            <section className="py-8 px-4 lg:px-10 bg-gray-800">
                <nav className="relative flex justify-between items-center">
                    <a className="text-2xl text-white font-bold" href="#">
                        <img className="h-20" src={logo2} alt="" width="auto" />
                    </a>
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
                            <li><a className="text-white font-bold text-lg" href="#">Rush Orders</a></li>
                            <span>
                                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle>
                                </svg>
                            </span>
                            <li><a className="text-white font-bold text-lg" href="#">Sleeved Orders</a></li>
                            <span>
                                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle>
                                </svg>
                            </span>
                            <li><a className="text-white font-bold text-lg" href="#">Unsleeved Orders</a></li>
                            <span>
                                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle>
                                </svg>
                            </span>
                            <li><a className="text-white font-bold text-lg" href="#">Power Switches</a></li>
                            <span>
                                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle>
                                </svg>
                            </span>
                            <li><a className="text-white font-bold text-lg" href="#">Sleeved 12 Pins</a></li>
                        </ul>
                    </div>
                    <div className="hidden lg:block"><a
                        className="inline-block px-8 py-4 text-white font-bold border border-gray-200 hover:border-white rounded-full"
                        href="#">Sign Up</a></div>
                </nav>
                <div className="hidden navbar-menu fixed top-0 left-0 bottom-52 w-5/6 max-w-sm z-50">
                    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
                    <nav className="relative flex flex-col py-8 h-full w-full bg-gray-600 overflow-y-auto">
                        <div className="flex items-center mb-16 pr-6">
                            <a className="ml-10 text-2xl text-gray-800 font-bold" href="#">
                                <img className="h-28" src={logo2} alt="" width="auto" />
                            </a>
                        </div>
                        <div>
                            <ul>
                                <li className="mb-1 px-10"><a className="block pl-8 py-4 text-xl text-white hover:bg-gray-400 rounded-xl"
                                    href="#">Rush Orders</a></li>
                                <li className="mb-1 px-10"><a className="block pl-8 py-4 text-xl text-white hover:bg-gray-400 rounded-xl"
                                    href="#">Sleeved Orders</a></li>
                                <li className="mb-1 px-10"><a className="block pl-8 py-4 text-xl text-white hover:bg-gray-400 rounded-xl"
                                    href="#">Unsleeved Orders</a></li>
                                <li className="mb-1 px-10"><a className="block pl-8 py-4 text-xl text-white hover:bg-gray-400 rounded-xl"
                                    href="#">Power Switches</a></li>
                                <li className="mb-1 px-10"><a className="block pl-8 py-4 text-xl text-white hover:bg-gray-400 rounded-xl"
                                    href="#">Sleeved 12 Pins</a></li>
                            </ul>
                        </div>
                        <div className="mt-auto px-10">
                            <div className="pt-6"><a
                                className="block mb-4 py-4 px-12 text-white text-center font-bold border border-gray-50 hover:border-gray-100 rounded-full"
                                href="#">Sign in</a><a
                                    className="block py-4 px-12 text-white text-center font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200"
                                    href="#">Sign up</a></div>
                        </div>
                    </nav>
                </div>
            </section>
        </div>
    )
}

export default Menu
