import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ updateCategories, categories }) => {

    const [ inputValue, updateInputValue ] = useState('');

    const handleChange = ( e ) => {
        updateInputValue(e.target.value);
    };

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if( inputValue.length > 0 ) {
            updateCategories([ inputValue, ...categories ]);
            //sin traer categories => updateCategories( array => [ ...array, inputValue ] );
            // en array se toma la referencia directamente en donde se envíe la información(categories en el sitio)
            updateInputValue('');
        }
    };

    return (
        <>
            <form
                onSubmit={ handleSubmit }
                id='forma'
            >
                <input 
                    type='text'
                    value={ inputValue }
                    onChange={ handleChange }
                />
            </form>
        </>
    )
}


AddCategory.propTypes = {
    updateCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
};

export default AddCategory;