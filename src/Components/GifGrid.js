import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    return ( 
        <div>
            <h3>{ category }</h3>

            { loading && <p>Cargando...</p> }

            <div className="card-grid">
                { images.map( img => ( 
                    <GifGridItem 
                        key={ img.id }
                        img={ img }    
                        //{ ...img }
                        //también se puede pasar como { ...img }, y servirá.
                        //desestructurando desde el otro lado en la parte de los argumentos
                        //los items necesarios ({ id, title, url })                
                        />
                )) }
            </div>
        </div>
     );
}

export default GifGrid;