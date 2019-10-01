import React from "react";


const HotelList = props => {


  return (
    <div>
      {props.hotels.length === 0 && (
        <h6 data-testid="search-error" className="search-error">
          No hotels match your search. Trying searching for something else!
        </h6>
      )}

      {props.hotels.length > 0 && (
        <div className="hotel-list">
          {props.hotels.map(hotel => (
            <div className="hotel-card" key={hotel.id}>
              <div
                className="image"
                style={{
                  backgroundImage: `url(${hotel.hotelStaticContent.mainImage.url})`, backgroundColor: '#6DBA4A'
                }}

              />
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
                  <span
                    dangerouslySetInnerHTML={{
                      __html: hotel.lowestAveragePrice.symbol
                    }}
                  />
                  {hotel.lowestAveragePrice.amount}
                </span>
                <span className="rewards">{hotel.rewards.miles} miles</span>
                <span className="rating">
                  {hotel.hotelStaticContent.stars} stars
                </span>
                <button className="button">Select</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HotelList;
