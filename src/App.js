import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import MediumCardSlides from './components/MediumCardSlides';
import LargeCard from './components/LargeCard';
import Footer from './components/Footer';
import Search from './components/Search';
import ProgressBar from '@badrap/bar-of-progress'; // Import the ProgressBar module
import './index.css';

const progress = new ProgressBar({
  size: 4, // The height of the loading bar
  color: '#29d', // The color of the loading bar
  className: 'z-50', // The z-index of the loading bar
  delay: 100, // Delay before showing the loading bar
});

function App() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch searchResults data here
    const fetchData = async () => {
      try {
        progress.start(); // Start the loading bar
        const response = await fetch("https://links.papareact.com/isz");
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error("Error fetching searchResults:", error);
      } finally {
        progress.finish(); // Finish the loading bar
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
