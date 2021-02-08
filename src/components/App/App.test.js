import React from 'react';
import { shallow } from 'enzyme';
import App from '.';
import SearchBar from '../SearchBar';
import GifList from '../GifList';

let wrapped;

beforeEach(()=>{
    wrapped = shallow(<App />);
})

test('shows a SearchBar', () => {
    expect(wrapped.find(SearchBar).length).toEqual(1);
});

test('shows a GifList', () => {
    expect(wrapped.find(GifList).length).toEqual(1);
});

test("renders without change in component level state", () => {
    expect(wrapped.state("gifs")).toEqual([]);
    expect(wrapped.state("selectedGif")).toEqual(null);
    expect(wrapped.state("term")).toEqual("");
  });