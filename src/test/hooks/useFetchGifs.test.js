import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {

    test('Tiene que devolver estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Cheems' ) );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    })

    test('Tiene que devolver un array de imágenes y loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Cheems' ) );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );
    });
    
    
    
})
