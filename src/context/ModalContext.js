import axios from 'axios';
import React, { Children, createContext, useEffect, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ( props ) => {

    // State del provider
    const [idReceta, setIdReceta] = useState(null);
    const [receta, setReceta] = useState({});
    
    useEffect(() => {
        const obtenerReceta = async () => {
            if ( !idReceta ) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${ idReceta }`;
            
            const resultado = await axios( url );

            setReceta( resultado.data.drinks[0] );
            
        };

        obtenerReceta();
    }, [ idReceta ])
    
    return (
        <ModalContext.Provider
            value={{
                setIdReceta
            }}
        >
            { props.children }
        </ModalContext.Provider>
    )
}
