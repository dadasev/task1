import React from 'react';
import { shallow } from 'enzyme';
import GifItem from './index';

let wrapped;

beforeEach(()=>{
    wrapped = shallow(<GifItem onGifSelect={() => testFn} gif={{ title: 'test title', images: { fixed_height: { webp: 'url'} } }}/>);
})


test('renders buttons and images of passed gif', () => {
    expect(wrapped.find('button').length).toEqual(1); 
    expect(wrapped.find('img').length).toEqual(1);
});