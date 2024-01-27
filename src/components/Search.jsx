import React ,{useEffect,useState,useContext} from "react";
import {Links} from "./Links";
import { useDebounce } from 'use-debounce';
//use debounce to prevent too many requests to the api

import { ResultContext} from '../contexts/ResultContextProvider';
export const Search = () => {

    const [text,setText]=useState('');
    const {setSearch_term}=useContext(ResultContext);
    const [debouncedValue]=useDebounce(text,320);
    useEffect(() => {
        if(debouncedValue) {
            setSearch_term(debouncedValue);
        }
    }, [debouncedValue]);
    return (

        <div className='relative sm:ml-48 md:ml-72 sm:-mt-5 mt-10'>
            <input  
              value={text}
              type="text"
              className="px-4 py-2 w-96 rounded-full focus:outline-none shadow-lg border border-gray-200 focus:border-blue-500"
              placeholder="Search something"
              //make the input controlled
              onChange={(e)=>setText(e.target.value)}
              />
            
            {!text && (
              <button className='absolute top-2 right-2 text-2xl text-gray-500 focus:outline-none'onClick={()=>setText=" "}>
                <svg xmlns="http://www.w3.org/2000/svg" activeClassName="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                   />
                </svg>  </button>

            )}
      
             
          

            <Links/>
        </div>
    );
    }