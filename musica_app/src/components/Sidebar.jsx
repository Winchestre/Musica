import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import {navItems} from '../data'

export default function Sidebar() {
    return (
        <main className="md:w-[100px] pt-4 items-center gap-5 md:fixed h-full hidden md:flex md:flex-col">
        <img src={logo} width="35px" height="35px" />
        <nav className="pt-4">
            <ul className="flex flex-col bg-[--clr--darkalt--bg] rounded-full px-5 py-8 gap-8 mb-6">
                {
                    navItems.map((item,index) => (
                         <li key={index} className="flex gap-2 items-center">
                            <NavLink to={item.path}><img src={item.icon} width="23px" height="23px" /></NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
        </main>
    )
}