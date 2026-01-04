import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../../assets/logo.png';
import Github from '../../assets/github.png'

const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu side-menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><NavLink className={'font-medium text-lg'} to={'/'}>Home</NavLink></li>
                    <li>
                        <NavLink className={'font-medium text-lg'} to={'/apps'}>App</NavLink>
                    </li>
                    <li><NavLink className={'font-medium text-lg'} to={'/install'}>Installation</NavLink></li>
                </ul>
                </div>
                <Link to={'/'} className="flex gap-2 font-bold items-center text-xl bg-linear-to-tl from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">
                    <img src={Logo} alt="logo" className='h-10 w-10' />Hero.io
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu main-menu menu-horizontal px-1">
                <li><NavLink className={'font-semibold text-lg'} to={'/'}>Home</NavLink></li>
                <li>
                    <NavLink className={'font-semibold text-lg'}  to={'/apps'}>App</NavLink>
                </li>
                <li><NavLink className={'font-semibold text-lg'} to={'/install'}>Installation</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href="https://github.com/st-shourov12" target='_blank' className="btn lg:text-lg bg-linear-to-br from-[#632ee3] to-[#9f62f2] space-x-1 text-white">
                    <img src={Github} alt="Github" />
                    Contribute
                </a>
            </div>
        </div>
    );
};

export default Header;