import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
// import MediumCard from './components/MediumCard';
import MediumCardSlides from './components/MediumCardSlides';
import LargeCard from './components/LargeCard';
import Footer from './components/Footer'
import Search from './components/Search';

import './index.css';


function App() {
  
  return (
    <Router>
      <div>
        <Header />
        <Routes>
        <Route
            path="/"
            element={<React.Fragment>
                     <Banner />
                    {/* <MediumCard /> */}
                    <MediumCardSlides />
                    <LargeCard />
                    <Footer />
                    </React.Fragment>
                    }
                    />

                      <Route
            path="/Search"
            element={<React.Fragment>
                    <Search />
                     <Banner />
                    <Footer />
                    </React.Fragment>
                    }
                    />

        </Routes>
        {/* <Routes> */}
          {/* <Route
            path="/"
            element={<React.Fragment>
              <Hero /> */}
        
          {/* </Routes> */}

      </div>
    </Router>
  );
}

export default App;
