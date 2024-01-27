import React, { useContext, useEffect } from 'react';
import { ResultContext } from '../contexts/ResultContextProvider';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

const Results = () => {
  const { results, getResults ,images,getImages,search_term,setSearch_term,news, getNews ,videos ,getVideos  } = useContext(ResultContext);
  const location= useLocation();
  useEffect(() => {
    if(search_term) {
  
      if(location.pathname === '/videos'){
        getVideos(search_term);
      
      }if(location.pathname === '/images'){
        getImages(search_term);}
      if(location.pathname === '/news'){
        getNews(search_term);
      }
      
      else {
      getResults(`${location.pathname}/q=${search_term}&num=40`);
      }
    }
    }, [search_term,location.pathname]);//everytime one of these changes, useEffect will run

  switch(location.pathname) {
    case '/search':
      return(
        <div className="grid grid-cols-1 gap-4 p-4">
        {results?.results?.map(({url,title,description},index) => (
          <div key={index} className='flex flex-col bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 m-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100'> 
            <a href={url} target='_blank' rel='noreferrer' className='text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500'>
              <p className='text-xs truncate dark:text-gray-300'>{url}</p>
              <h2 className='text-xl hover:underline dark:text-blue-300 text-blue-700 mt-2'>{title}</h2>
              <p className='text-sm text-gray-700 line-clamp-3 mt-2 dark:text-gray-300'>{description}</p>
            </a>
          </div>
          ))}
        </div>
      );
    case '/images':
      return(
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 dark:bg-gray-800'>
            {images?.map((image, index) => (
                <div key={index} className='bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden'>
                    <div className='relative h-48 w-full'>
                        <img src={image.image} alt={image.title} className='absolute h-full w-full object-cover' />
                    </div>
                    <div className='p-4'>
                        <h2 className='mb-2 text-lg font-bold text-gray-800 dark:text-gray-200 truncate'>{image.title}</h2>
                        <p className='text-gray-600 dark:text-gray-400 text-sm overflow-ellipsis overflow-hidden'>Source: {image.source}</p>
                        <a href={image.url} className='text-blue-500 hover:underline mt-2 block text-sm dark:text-blue-400'>{image.url}</a>
                    </div>
                </div>
            ))}
        </div>
     
        )
      
    case '/news':
      return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        {news?.map(({date, title, body, url}, index) => (
          <div key={index} className='flex flex-col bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 m-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100'> 
            <a href={url} target='_blank' rel='noreferrer' className='text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500'>
              <p className='text-xs truncate dark:text-gray-300'>{date}</p>
              <h2 className='text-xl hover:underline dark:text-blue-300 text-blue-700 mt-2'>{title}</h2>
              <p className='text-sm text-gray-700 line-clamp-3 mt-2 dark:text-gray-300'>{body}</p>
            </a>
          </div>
        ))}
      </div> 
          );
    case '/videos':
      return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8'>
        {videos.map((video, index) => (
          <div key={index} className='flex flex-col bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 m-2 transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100'> 
            <a href={video.content} target='_blank' rel='noreferrer' className='text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500'>
              <img className='w-full h-64 rounded-t-2xl object-cover hover:opacity-90' src={video.images.medium} alt={video.title} />
              <p className='text-xs truncate dark:text-gray-300 mt-4'>{video.content}</p>
              <h2 className='text-2xl hover:underline dark:text-blue-300 text-blue-700 mt-4'>{video.title}</h2>
              <p className='text-sm text-gray-700 line-clamp-3 mt-4 dark:text-gray-300'>{video.description}</p>
              <p className='text-sm text-gray-700 mt-4 dark:text-gray-300'>{`Duration: ${video.duration}`}</p>
              <p className='text-sm text-gray-700 mt-4 dark:text-gray-300'>{`Uploader: ${video.uploader}`}</p>
            </a>
          </div>
        ))}
      </div>
          );
    default:
      break;
  }
  
};

export default Results;