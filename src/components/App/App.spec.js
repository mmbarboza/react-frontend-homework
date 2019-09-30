import {render, fireEvent} from '@testing-library/react'

import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import HotelList from '../HotelList/HotelList'

const waitFor = (wait) =>
  new Promise((resolve) => setTimeout(resolve, wait))


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
      //await waitFor(10);

      it('renders the component', () => {
        const wrapper = mount(<App />);
        expect(wrapper.find('.app-container').exists()).toBe(true);
    });

    it('filters hotels based on search', async ()=>{
        const wrapperSearch = mount(<App>
            <HotelList hotels={props}/>
        </App>);
        await waitFor(30);
        expect(wrapperSearch.find(HotelList).exists()).toBe(true)
    const containerHotel = wrapperSearch.find(HotelList);
    console.log(containerHotel)
    wrapperSearch.find('.input').simulate('change', {target: {value: 'omni'}})

    console.log(wrapperSearch.children())

    expect(wrapperSearch.children().text().includes('Omni')).toBe('true')
    expect(wrapperSearch.children().includes('Hilton')).toBe('false')


    });

    it("renders error message when API responds with 500 error", async () => {
        const wrapperSearch = mount(<App>
            <HotelList hotels={props}/>
        </App>);
        await waitFor(30);
        wrapperSearch.setState({ responseStatus: "failed" });
        expect(wrapperSearch.find("error").exists()).toBe(true);
      });



    //it renders no hotels found if hotelsToRender is length 0

    //sorts hotels correctly

    //searches for hotels correctly
});
