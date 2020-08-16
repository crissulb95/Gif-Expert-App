import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [ state, updateState ] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs( category )
            .then( imgs => {
                
                setTimeout( () => {

                    updateState({
                        data: imgs,
                        loading: false
                    });

                }, 2250 );
                    
            } )
    }, [ category ] );

    return state;

};