import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    const wrapper = shallow(<App />);

    it('renders the component', () => {
        expect(wrapper.find('.app-container').exists()).toBe(true);
    });

    //it renders API failed div if responseStatus is false

    //it renders no hotels found if hotelsToRender is length 0

    //sorts hotels correctly

    //searches for hotels correctly
});
