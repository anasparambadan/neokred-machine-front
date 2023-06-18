import React from 'react'

import hero from "../assets/images/hero.svg";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
       <nav className='h-[72px] max-w-[1920px] w-full flex justify-between px-10 border-b-2 border-gray-500'>
            <div>
                <img src={hero} alt="" />
            </div>
            <div>
                <span className='text-lightGrey'>Name</span>
                <span>NK admin</span>

            </div>
        </nav>
        <Link to={'/profile'}>My profile</Link>
    </div>
  )
}

export default Home