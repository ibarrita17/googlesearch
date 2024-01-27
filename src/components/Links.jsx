import React from "react";
import {NavLink} from 'react-router-dom';
import {FaSearch, FaImage, FaNewspaper, FaVideo} from 'react-icons/fa';

const links=[
   {url:'/search',Text:'All', Icon: FaSearch},
   {url:'/images',Text:'Images', Icon: FaImage},
   {url:'/news',Text:'News', Icon: FaNewspaper},
   {url:'/videos',Text:'Videos', Icon: FaVideo}
]
export const Links = () => {
    return(
        <div className="flex flex-wrap justify-start items-center mt-4 space-x-4">
            {links.map(({url,Text, Icon}) => (
                <NavLink 
                    to={url} 
                    activeClassName="text-blue-500" 
                    className="text-gray-600 hover:text-blue-500 px-2 py-1" 
                    exact
                >
                    <Icon className="text-lg" />
                    <span className="ml-2">{Text}</span>
                </NavLink>
            ))}
        </div>
    )
}