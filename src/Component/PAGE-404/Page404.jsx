import React from 'react'
import './Page404.css'
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

function Page404() {
    const { getFinder, setGetFinder,searchInput, setSearchInput} = useContext(GlobalContext);
    useEffect(() => {
      setSearchInput('')
    },[getFinder])
  return (
    <div className='Page-404'>
      <i className="fa-solid fa-xmark" onClick={() => setGetFinder(false)}></i>
      <div className="Page-404-wrapper">

      </div>
    </div>
  )
}

export default Page404
