import React, { useState, useEffect } from "react";
import "./App.style.scss";
import HotelList from "../HotelList/HotelList";

import hotelResultService from "../../services/hotel-result/hotel-result.service";

const App = () => {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [searchHotel, setSearchHotel] = useState("");

  useEffect(() => {
    hotelResultService.get().then(response => {
      setHotels(response.results.hotels);
    });
  }, []);

  const handleChange = event => {
    console.log("in handle change");
    setSearchHotel(event.target.value);
  };

  let hotelsToRender;
  const hotelFiltering = () => {
    //console.log("in filtering");
    //hotelsToRender = hotels.filter(hotel => {
    //   console.log("hotel:", hotel.hotelStaticContent.name.toLowerCase());
    //   console.log("search content:", searchHotel);
    //   console.log("includes?", hotel.hotelStaticContent.name
    //   .toLowerCase()
    //   .includes(searchHotel.toLowerCase()))
    // console.log("hotels to render", hotelsToRender)
    //   hotel.hotelStaticContent.name
    //     .toLowerCase()
    //     .includes(searchHotel.toLowerCase());
        hotelsToRender = hotels.filter(hotel => (
              hotel.hotelStaticContent.name
                .toLowerCase()
                .includes(searchHotel.toLowerCase())
    ));
  };

  return (
    //filter function here
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
            <select name="" className="select">
              <option value="">Recommended</option>
              <option value="">Price low-to-high</option>
              <option value="">Price high-to-low</option>
            </select>
            <button className="button">Reset</button>
          </div>
        </div>

              {hotelFiltering()}
        <HotelList hotels={hotelsToRender} />

        {/* <div className="hotel-list">
                    {hotels.map(hotel => (
                        <div className="hotel-card" key={hotel.id}>
                            <div
                                className="image"
                                style={{ backgroundImage: `url(${hotel.hotelStaticContent.mainImage.url})`}}>
                            </div>
                            <div className="hotel-details">
                                <div className="hotel-name">
                                    {hotel.hotelStaticContent.name}
                                </div>
                                <div className="location">
                                    {hotel.hotelStaticContent.neighborhoodName}
                                </div>
                            </div>
                            <div className="price-details">
                                <span className="price">
                                    <span dangerouslySetInnerHTML={{ __html: hotel.lowestAveragePrice.symbol }}></span>
                                    {hotel.lowestAveragePrice.amount}
                                </span>
                                <span className="rewards">
                                    {hotel.rewards.miles} miles
                                </span>
                                <button className="button">Select</button>
                            </div>
                        </div>
                    ))}
                </div> */}
      </div>
    </div>
  );
};

export default App;
