import React from "react";
import { shallow, mount } from 'enzyme';
import App from "./App";
import HotelList from "../HotelList/HotelList";


const waitFor = (wait) =>
  new Promise((resolve) => setTimeout(resolve, wait));

describe('App', () => {
    const props = [
        {
      id: '907',
      rewards: {
      miles: 10000
      },
      lowestAveragePrice: {
      currency: 'USD',
      symbol: '&#36;',
      amount: 579.0
      },
      hotelStaticContent: {
      hotelId: 907,
      languageCode: 'en',
      mainImage: {
      category: 'EXTERIOR',
      url: 'http://d2whcypojkzby.cloudfront.net/imageRepo/2/0/68/56/314/ExteriorCarsGone_S.jpg',
      source: 'VFML'
      },
      name: 'Omni Chicago Hotel & Suites Magnificent Mile',
      neighborhoodName: 'Magnificent Mile',
      address: {
      line1: '676 North Michigan Avenue',
      line2: null,
      city: 'Chicago',
      stateName: 'Illinois',
      stateCode: 'IL',
      countryName: 'United States',
      countryCode: 'US',
      zipCode: '60611',
      latitude: 41.89475,
      longitude: 87.62465,
      timeZoneId: 'America/Chicago'
      },
      stars: 4,
      rating: 9,
      numberOfReviews: 685,
      brandCode: '1324',
      brandName: 'Omni Hotels',
      propertyType: 204,
      propertyTypeName: 'Hotel'
      }
      }

      ];


      it('renders the component', () => {
        const wrapper = mount(<App />);
        expect(wrapper.find('.app-container').exists()).toBe(true);
    });



 });

const filterProps = [   {
    id: '907',
    rewards: {
    miles: 10000
    },
    lowestAveragePrice: {
    currency: 'USD',
    symbol: '&#36;',
    amount: 579.0
    },
    hotelStaticContent: {
    hotelId: 907,
    languageCode: 'en',

    name: 'Omni Chicago Hotel & Suites Magnificent Mile',
    neighborhoodName: 'Magnificent Mile',
    address: {
    line1: '676 North Michigan Avenue',
    line2: null,
    city: 'Chicago',
    stateName: 'Illinois',
    stateCode: 'IL',
    countryName: 'United States',
    countryCode: 'US',
    zipCode: '60611',
    latitude: 41.89475,
    longitude: 87.62465,
    timeZoneId: 'America/Chicago'
    },
    stars: 4,
    rating: 9,
    numberOfReviews: 685,
    brandCode: '1324',
    brandName: 'Omni Hotels',
    propertyType: 204,
    propertyTypeName: 'Hotel'
    }
    },
    {
        id: '908',
        rewards: {
        miles: 8000
        },
        lowestAveragePrice: {
        currency: 'USD',
        symbol: '&#36;',
        amount: 234
        },
        hotelStaticContent: {
        hotelId: 907,
        languageCode: 'en',
        name: 'Chicago Marriott Downtown Magnificent Mile',
        neighborhoodName: 'Magnificent Mile',
        address: {
        line1: '540 North Michigan Avenue',
        line2: null,
        city: 'Chicago',
        stateName: 'Illinois',
        stateCode: 'IL',
        countryName: 'United States',
        countryCode: 'US',
        zipCode: '60611',
        latitude: 41.89475,
        longitude: 87.62465,
        timeZoneId: 'America/Chicago'
        },
        stars: 4,
        rating: 8.5,
        numberOfReviews: 685,
        brandCode: '1324',
        brandName: 'Omni Hotels',
        propertyType: 204,
        propertyTypeName: 'Hotel'
        }
        }
];
const hotelFiltering = (hotels) => {

    return hotels.filter(hotel => {
      return hotel.hotelStaticContent.name
        .toLowerCase()
        .includes("omni");
    });
  };

  const sortHotels = (sortOption, hotelsToRender) => {
    if (sortOption === "low") {
      return hotelsToRender.sort((a, b) => {
        return a.lowestAveragePrice.amount - b.lowestAveragePrice.amount;
      });
    } else if (sortOption === "high") {
      return hotelsToRender.sort((a, b) => {
        return b.lowestAveragePrice.amount - a.lowestAveragePrice.amount;
      });
    } else {
      return hotelsToRender.sort((a, b) => {
        return b.rating - a.rating;
      });
    }
  };


describe('utility functions', () => {
  test('filters hotels passed on search value', () => {
      expect(hotelFiltering(filterProps)).toEqual([   {
        id: '907',
        rewards: {
        miles: 10000
        },
        lowestAveragePrice: {
        currency: 'USD',
        symbol: '&#36;',
        amount: 579.0
        },
        hotelStaticContent: {
        hotelId: 907,
        languageCode: 'en',

        name: 'Omni Chicago Hotel & Suites Magnificent Mile',
        neighborhoodName: 'Magnificent Mile',
        address: {
        line1: '676 North Michigan Avenue',
        line2: null,
        city: 'Chicago',
        stateName: 'Illinois',
        stateCode: 'IL',
        countryName: 'United States',
        countryCode: 'US',
        zipCode: '60611',
        latitude: 41.89475,
        longitude: 87.62465,
        timeZoneId: 'America/Chicago'
        },
        stars: 4,
        rating: 9,
        numberOfReviews: 685,
        brandCode: '1324',
        brandName: 'Omni Hotels',
        propertyType: 204,
        propertyTypeName: 'Hotel'
        }
        },

      ]);
  });

  test('sorts based on selected filter', () => {
      expect(sortHotels('low', filterProps)).toEqual([{
        id: '908',
        rewards: {
        miles: 8000
        },
        lowestAveragePrice: {
        currency: 'USD',
        symbol: '&#36;',
        amount: 234
        },
        hotelStaticContent: {
        hotelId: 907,
        languageCode: 'en',
        name: 'Chicago Marriott Downtown Magnificent Mile',
        neighborhoodName: 'Magnificent Mile',
        address: {
        line1: '540 North Michigan Avenue',
        line2: null,
        city: 'Chicago',
        stateName: 'Illinois',
        stateCode: 'IL',
        countryName: 'United States',
        countryCode: 'US',
        zipCode: '60611',
        latitude: 41.89475,
        longitude: 87.62465,
        timeZoneId: 'America/Chicago'
        },
        stars: 4,
        rating: 8.5,
        numberOfReviews: 685,
        brandCode: '1324',
        brandName: 'Omni Hotels',
        propertyType: 204,
        propertyTypeName: 'Hotel'
        }
        },
        {
            id: '907',
            rewards: {
            miles: 10000
            },
            lowestAveragePrice: {
            currency: 'USD',
            symbol: '&#36;',
            amount: 579.0
            },
            hotelStaticContent: {
            hotelId: 907,
            languageCode: 'en',

            name: 'Omni Chicago Hotel & Suites Magnificent Mile',
            neighborhoodName: 'Magnificent Mile',
            address: {
            line1: '676 North Michigan Avenue',
            line2: null,
            city: 'Chicago',
            stateName: 'Illinois',
            stateCode: 'IL',
            countryName: 'United States',
            countryCode: 'US',
            zipCode: '60611',
            latitude: 41.89475,
            longitude: 87.62465,
            timeZoneId: 'America/Chicago'
            },
            stars: 4,
            rating: 9,
            numberOfReviews: 685,
            brandCode: '1324',
            brandName: 'Omni Hotels',
            propertyType: 204,
            propertyTypeName: 'Hotel'
            }
            }
    ]);
  });
}
);
