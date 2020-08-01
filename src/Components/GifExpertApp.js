import React, { useState } from 'react';
import AddCategory from './AddCategory.js';

const GifExpertApp = () => {

    const [ categories, updateCategories ] = useState([ 'One Punch', 'Samurai X', 'Dragon Ball' ]);
    
    let i = 1;

    const handleClick = () => {
        updateCategories([
            ...categories,
            i
        ]);
    };

    return ( 
        <>
            <h2>GifExpertApp</h2>
            <AddCategory 
                updateCategories = { updateCategories }
                categories= { categories }
            />
            <hr />
            <button
                onClick={ handleClick }
            >Agregar</button>
            <ol>
                { categories.map( category => {
                    return <li key={ category }>{ category }</li>
                } ) }
            </ol>
        </>
     );
}
 
export default GifExpertApp;