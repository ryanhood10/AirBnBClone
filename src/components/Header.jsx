import Logo from './assets/airbnbLogo.jpeg';
import React from 'react';
import {SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon} from '@heroicons/react/solid';

function Header () {

    return (
        <header className='sticky top-0 z-50 flex flex-col-3 bg-white shadow-md py-5 px-5 md:px-10'>
            {/* Left */}
            <div className='relative flex items-center h-10 cursor-pointer'>
                <img src={Logo} className='h-14 lg:h-24'
                layout="fill"
                objectFit="contain"
                objectPosition="left"/>
            </div>

            {/* Middle - Search */}
            <div className='flex items-center md:border-2 rounded-full py-2'>
                <input 
                className='flex-grow pl-5 bg-transparent outline-none'
                type='text' placeholder='Start your search' />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"
                />

            </div>

            {/* Right */}
            <div className='flex items-center space-x-4 justify-end text-gray-500'>
                <p className='hidden md:inline cursor-pointer'>Become a host!</p>
                <GlobeAltIcon className='h-6 cursor-pointer' />

                <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                    <MenuIcon className='h-6 cursor-pointer'/>
                    <UserCircleIcon className='h-6 cursor-pointer'/>
                </div>
            </div>
        </header>
    )
}

export default Header
