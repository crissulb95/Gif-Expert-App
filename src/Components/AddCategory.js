import React, { useState } from 'react';

const AddCategory = ({ updateCategories, categories }) => {

    const [ inputValue, updateInputValue ] = useState('');

    const handleChange = ( e ) => {
        updateInputValue(e.target.value);
    };

    const handleSubmit = ( e ) => {
        e.preventDefault();
        updateCategories([ ...categories, inputValue]);
        updateInputValue('');
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


export default AddCategory;