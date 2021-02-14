import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';


import { GifGrid } from '../../Components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

//Sustituye el hook real por uno de prueba
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en el <GifGrid />', () => {

    const category = 'Hobbit';
    const wrapper = shallow( <GifGrid category={ category } /> )

    test('Debe de mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar imágenes cuando carga useFetchGifs', () => {
        
        const gifs = [{
            id: 'AB1C',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'test1'
        },
        {
            id: '12h3',
            url: 'https://localhost/cualquier/cosa2.jpg',
            title: 'test2'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        expect( wrapper.find('h3').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    })
    
    

})

