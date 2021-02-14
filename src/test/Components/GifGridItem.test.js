import React from 'react';
import { shallow } from 'enzyme';

import GifGridItem from '../../Components/GifGridItem';

describe( 'Pruebas en componente <GifGridItem />', () => {
    const title = 'Un título';
    const url   = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );

    

    test( 'Debe mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    
    test('Heading con el titulo', () => {
        const h3 = wrapper.find('h3');
        expect( h3.text().trim() ).toBe( title );
    })

    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');

        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });


    test('debe de tener clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes('animate__fadeIn') ).toBe( true );
    })

});