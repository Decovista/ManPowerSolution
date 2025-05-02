import React from 'react'
import './Page404.css'
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

function Page404() {
    const { getFinder, setGetFinder} = useContext(GlobalContext);
  return (
    <div className='Page-404'>
      <i class="fa-solid fa-xmark" onClick={() => setGetFinder(false)}></i>
      <div className="Page-404-wrapper">

      </div>
    </div>
  )
}

export default Page404
