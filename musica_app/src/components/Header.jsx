import search from "../assets/icons/search.svg"
import menu from '../assets/icons/menu.svg'
import logo from '../assets/logo.svg'
import {navItems} from '../data'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <input type="search" placeholder="Search artists" className="hidden md:block md:w-full md:h-[70px] pl-16 relative border-none bg-[--clr--darkalt--bg] text-[--clr--textlight] font-base" />
            <div className="md:hidden flex">
                {/*<img src={menu} alt="menu" className=" block md:hidden" width="30px" height="30px" onClick={handleClick} role="button" />*/}
                <button
                    onClick={handleClick}
                      className="flex flex-col justify-center items-center block md:hidden">
                        <span className={`bg-neutral-200 block transition-all duration-300 ease-out
                                        h-0.5 w-6 rounded-sm ${isMenuOpen ?
                                        'rotate-45 translate-y-1' : '-translate-y-0.5'
                                        }`}></span>
                        <span className={`bg-neutral-200 block transition-all duration-300 ease-out
                                        h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ?
                                        'opacity-0' : 'opacity-100'
                                        }`}>
                        </span>
                        <span className={`bg-neutral-200 block transition-all duration-300 ease-out
                                        h-0.5 w-6 rounded-sm ${isMenuOpen ?
                                        '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                                        }`}>
                        </span>
                </button>
                <img src={logo} width="30px" height="30px" className="ml-2" />
                <img src={search} alt="search" className="ml-auto md:absolute top-[43px] left-[110px]" width="30px" height="30px" role="button" />
                <div className={`fixed top-0 left-0 bg-[--clr--darkalt--bg] z-50 w-full min-h-screen ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col gap-10 p-10">
                         {
                            navItems.map((item,index) => (
                                 <li key={index}>
                                    <NavLink to={item.path} className=" text-neutral-600 font-semibold active:text-white" onClick={handleClick}><img src={item.icon} className="inline-block w-5 h-5 mr-6" width="35px" height="35px" />{item.label}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}