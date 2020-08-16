import React, { useState } from 'react';
import AddCategory from './AddCategory.js';
import GifGrid from './GifGrid.js';

const GifExpertApp = () => {

    const [ categories, updateCategories ] = useState([ 'Digimon' ]);    

    return ( 
        <>
            <h2>GifExpertApp</h2>
            <AddCategory 
                updateCategories = { updateCategories }
                categories= { categories }
            />
            <hr />
            <ol>
                { categories.map( category => 
                    <GifGrid
                        key={ category }
                        category={ category }
                    />
                )}
            </ol>
        </>
    );
}

export default GifExpertApp;