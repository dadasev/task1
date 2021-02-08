import React from 'react';
import { mount } from 'enzyme';
import SearchBar from '.';

let wrapped;

beforeEach(()=>{
    wrapped = mount(<SearchBar />);
});

afterEach(()=>{
    wrapped.unmount();
});

describe('input validation', () => {

    test('user can type in letters, numbers, whitespaces', () => {
        wrapped.find('input').simulate('change', {
            target: { value: 'a'}
        });
        wrapped.update()
        expect(wrapped.find('input').prop('value')).toEqual('a');
        wrapped.find('input').simulate('change', {
            target: { value: 'a '}
        });
        wrapped.update()
        expect(wrapped.find('input').prop('value')).toEqual('a ');    
        wrapped.find('input').simulate('change', {
            target: { value: 'a 1'}
        });
        wrapped.update()
        expect(wrapped.find('input').prop('value')).toEqual('a 1');         
    });
    
    test('user cannot enter special characters', () => {
        wrapped.find('input').simulate('change', {
            target: { value: '/'}
        });
        wrapped.update()
        expect(wrapped.find('input').prop('value')).toEqual('');
    });
});

it("renders correctly with no error message", () => {
    expect(wrapped.state("error")).toEqual("");
  });
  
