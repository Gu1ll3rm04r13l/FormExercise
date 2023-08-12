import React, { useState } from 'react';

function Event({ onSubmit }) {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [pokemonFavorito, setPokemonFavorito] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {nombre, edad, pokemonFavorito};
        onSubmit(userData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre completo:</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div>
                <label>Edad:</label>
                <input type="text" value={edad} onChange={(e) => setEdad(e.target.value)} />
            </div>
            <div>
                <label>Pokemon favorito:</label>
                <input type="text" value={pokemonFavorito} onChange={(e) => setPokemonFavorito(e.target.value)} />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Event