import React from 'react';
import { render } from 'enzyme';
import GifList from '.';

let wrapped;

test('shows a grid', () => {
    const gifs = [{id: 1, title: "abc", images: { fixed_height: "abcd"}}, {id: 2, title: "abcd", images: { fixed_height: "abcde"}}]
    wrapped = render(<GifList gifs={gifs}/>);
    expect(wrapped.find('div').length).toEqual(2);
    expect(wrapped.find('button').length).toEqual(2);
});
