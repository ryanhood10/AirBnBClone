import Logo from './assets/airbnbLogo.jpeg'; // Import the Logo image
import React, { useState } from 'react';
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css'; //for calendar
import 'react-date-range/dist/theme/default.css'; //for calendar 
import { DateRangePicker } from 'react-date-range';
import { Link, useNavigate } from 'react-router-dom';

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const navigate = useNavigate();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    const queryParams = `?location=${searchInput}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&noOfGuests=${noOfGuests}`;

    navigate(`/search${queryParams}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-5 px-5 md:px-10 flex justify-between items-center  ">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer flex-1">
        <Link to="/">
          <img
            src={Logo}
            className="h-14 lg:h-20"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            alt="Logo"
          />
        </Link>
      </div>

      {/* Middle - Search */}
      <div className="flex-grow md:flex md:items-center md:border-2 md:rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || 'Start your search'}
        />
        <SearchIcon
          className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500 flex-1">
        <p className="hidden md:inline cursor-pointer">Become a host!</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {searchInput && (
        <div className="md:flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>

            <UsersIcon className="h-5 hover:cursor-pointer" />
            <input
              className="w-12 pl-2 text-lg outline-none text-red-400"
              type="number"
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
            />
          </div>

          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>

            <button
              className="flex-grow text-red-400"
              onClick={search}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
