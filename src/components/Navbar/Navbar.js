import React from 'react';
import { SearchIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-col lg:flex-row justify-between p-6 lg:h-20  bg-slate-50">
      <div className="flex items-center lg:w-[740px]">
        <Link to="/" className="font-bold text-xl">dribbble</Link>
        <ul className="lg:flex hidden flex-1 items-center justify-between ml-8 text-[14px] text-gray-600 hover:cursor-pointer pl-12">
          <CustomLink to="/Find_talent" className='hover: cursor-pointer hover:font-bold'>Find talent</CustomLink>
          <CustomLink to="/Inspiration" className='hover: cursor-pointer hover:font-bold'>Inspiration</CustomLink>
          <CustomLink to="/Learn_design" className='hover: cursor-pointer hover:font-bold'>Learn design</CustomLink>
          <CustomLink to="/Jobs" className='hover: cursor-pointer hover:font-bold'>Jobs</CustomLink>
          <CustomLink to="/Go_Pro" className='hover: cursor-pointer hover:font-bold'>Go Pro</CustomLink>
        </ul>
      </div>
      <div className="text-gray-700 px-4 mt-2 lg:mt-0 ">
        <ul className="lg:flex hidden flex-1 items-center justify-center ml-8 text-[14px] text-gray-600 hover:cursor-pointer pl-12">
          <SearchIcon className="mt-2 h-4 hover:cursor-pointer" />
          <CustomLink to="/Login" className="hover:cursor-pointer mt-1 font-bold rounded-xl px-4">Login</CustomLink>
          <CustomLink to="/Signup" className="bg-pink-500 px-2 py-1 font-bold text-white rounded-3xl hover:bg-pink-400">Sign up</CustomLink>
        </ul>
      </div>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const path = window.location.pathname

  return (
    <li className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Navbar;
