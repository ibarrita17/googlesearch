import React, { createContext, useState } from 'react';

export const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [images, setImages] = useState([]);
    const[news,setNews] = useState([]);
    const [search_term, setSearch_term] = useState('');
    const [videos, setVideos] = useState([]);


    const getResults = async (query) => {
        const url = `https://google-search74.p.rapidapi.com/?query=${query}&limit=10&related_keywords=true`;
        const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
              'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setResults(result);
        } catch (error) {
            console.error(error);
        }
    };

    const getImages = async (text) => {
      const url = 'https://google-api31.p.rapidapi.com/imagesearch';
        const options = {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
              'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
            },
            body: JSON.stringify({
                text: text,
                safesearch: 'off',
                region: 'wt-wt',
                color: '',
                size: '',
                type_image: '',
                layout: '',
                max_results: 100
            })
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setImages(result.result);
        } catch (error) {
            console.error(error);
        }
    };
    const getNews = async (text) => {
      const url= 'https://google-api31.p.rapidapi.com/'
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
		      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
		      'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
        },
        body: JSON.stringify({
          text: text,
          region: 'wt-wt',
          max_results: 25
        })
      };
      
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setNews(result.news);
      } catch (error) {
        console.error(error);
      }

    }
    const getVideos = async (text) => {
      const url = 'https://google-api31.p.rapidapi.com/videosearch';
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
          'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
        },
        body: JSON.stringify({
          text: text,
          safesearch: 'off',
          timelimit: '',
          duration: '',
          resolution: '',
          region: 'wt-wt',
          max_results: 50
        })
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setVideos(result.result);
      } catch (error) {
        console.error(error);
      }
    }
    
    

    return (
        <ResultContext.Provider value={{ results, getResults ,images,getImages, search_term,setSearch_term,news,getNews,videos,getVideos }}>
            {children}
        </ResultContext.Provider>
    );
};