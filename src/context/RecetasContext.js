import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const RecetasContext = createContext();

export const RecetasProvider = ( props ) => {

    const [recetas, setRecetas] = useState([]);
    const [busqueda, buscarRecetas] = useState({
        nombre: '',
        categoria: ''
    });
    const [consultar, setConsultar] = useState(false);
    const { nombre, categoria } = busqueda;

    useEffect(() => {
        if ( consultar ) {
            const obtenerRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ nombre }&c=${ categoria }`;
                const resultado = await axios( url );

                setRecetas( resultado.data.drinks );
            };
            obtenerRecetas();
        }
    }, [ busqueda ])
    
    return (
        <RecetasContext.Provider
            value={{
                buscarRecetas,
                setConsultar
            }}
        >
            { props.children }
        </RecetasContext.Provider>
    )
}
