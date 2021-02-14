import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { AddCategory } from '../../Components/AddCategory';


describe('Pruebas en <AddCategory />', () => {

    const updateCategories = jest.fn();

    let wrapper = shallow( <AddCategory updateCategories={ updateCategories } /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory updateCategories={ updateCategories } /> );
    });
    
    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Test';

        input.simulate('change', { target: { value } });

        //expect( wrapper.find('p').text().trim() ).toBe( value );
        //No hay paragraph
    })

    test('No tiene que postear la información con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( updateCategories ).not.toHaveBeenCalled();

    })
    
    test('Tiene que llamar el updateCategories y limpiar la caja de texto', () => {

        const value = 'Test';

        // 1. Simular el inputChange
        wrapper.find('input').simulate('change', { target: { value } });

        // 2. Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // 3. updateCategories se debe de haber llamado
        expect( updateCategories ).toHaveBeenCalled();
        expect( updateCategories ).toHaveBeenCalledTimes(1);
        expect( updateCategories ).toHaveBeenCalledWith( expect.any(Function)  );

        // 4. El valor del input debe de estar vacío
        expect( wrapper.find('input').prop('value') ).toBe('');       
    })
    
    

})
