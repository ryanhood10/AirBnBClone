import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import MediumCardSlides from './components/MediumCardSlides';
import LargeCard from './components/LargeCard';
import Footer from './components/Footer';
import Search from './components/Search';

import './index.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch searchResults data here
    const fetchData = async () => {
      try {
        const response = await fetch("https://links.papareact.com/isz");
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error("Error fetching searchResults:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Header />
                <Banner />
                <MediumCardSlides />
                <LargeCard />
                <Footer />
              </React.Fragment>
            }
          />

          <Route
            path="/search"
            element={
              <React.Fragment>
                <Search searchResults={searchResults} />
                <Footer />
              </React.Fragment>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
