import React from 'react'

function MostrarEvento ({ nombre, edad, pokemonFavorito }) {
    return (
        <div>
            <h2>Datos enviados:</h2>
            <p>Nombre: {nombre}</p>
            <p>Edad: {edad}</p>
            <p>Pokemon favorito: {pokemonFavorito}</p>
        </div>
    );
}

export default MostrarEvento;