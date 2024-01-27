import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";
import { FaUserSecret } from 'react-icons/fa';
export const Navbar = ({darkTheme, setDarkTheme}) => {
    return (
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="https://google.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <FaUserSecret className="h-8 w-8 text-blue-500" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Guugle</span>
                </Link>
                <button type="button" onClick={()=> setDarkTheme(!darkTheme)} className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
                    <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                    <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
                        {darkTheme ? 'Light🌞' : 'Dark🌙'}
                    </span>
                </button>
            </div>
        </nav>
    );
    }
