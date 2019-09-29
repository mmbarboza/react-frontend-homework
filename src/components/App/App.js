import React, { useState, useEffect } from 'react';
import './App.style.scss';
import HotelList from '../HotelList/HotelList';

import hotelResultService from '../../services/hotel-result/hotel-result.service';

const App = () => {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [searchHotel, setSearchHotel] = useState('');

  useEffect(() => {
    hotelResultService.get().then(response => {
      setHotels(response.results.hotels);
    });
  }, []);

  const handleChange = event => {
    setSearchHotel(event.target.value);
  };

  const handleChangeSort = event => {
    setSortOption(event.target.value);
  };

  let hotelsToRender;
  const hotelFiltering = () => {
    hotelsToRender = hotels.filter(hotel => {
      return hotel.hotelStaticContent.name
        .toLowerCase()
        .includes(searchHotel.toLowerCase());
    });
  };

  const sortHotels = () => {
    if (sortOption === 'low') {
      hotelsToRender.sort((a, b) => {
        return a.lowestAveragePrice.amount - b.lowestAveragePrice.amount;
      });
    } else if (sortOption === 'high') {
      hotelsToRender.sort((a, b) => {
        return b.lowestAveragePrice.amount - a.lowestAveragePrice.amount;
      });
    }
  };

  return (
    //sort function here

    <div className="app-container">
      <div className="content">
        <div>
          <div className="filters">
            Hotel name
            <input
              type="text"
              className="input"
              maxLength={10}
              value={searchHotel}
              onChange={handleChange}
            />
            Price
            <select
              name="sortOption"
              className="select"
              onChange={handleChangeSort}
            >
              <option value="recommended">Recommended</option>
              <option value="low">Price low-to-high</option>
              <option value="high">Price high-to-low</option>
            </select>
            <button className="button">Reset</button>
          </div>
        </div>

        {hotelFiltering()}
        {sortHotels()}
        {hotelsToRender.length > 0 && <HotelList hotels={hotelsToRender} />}
        {hotelsToRender.length === 0 && (
          <div>No hotels match your search. </div>
        )}
      </div>
    </div>
  );
};

export default App;
