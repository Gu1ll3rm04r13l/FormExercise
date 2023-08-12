import React, { useState } from "react";
import Event from "./Event";
import MostrarEvento from "./MostrarEvento";


function Form() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [pokemonFavorito, setPokemonFavorito] = useState('');
  const [datosEnviados, setDatosEnviados] = useState(false);

  const handleSubmit = (data) => {
    setNombre(data.nombre);
    setEdad(data.edad);
    setPokemonFavorito(data.pokemonFavorito);
    setDatosEnviados(true);
  };

  return (
    <div>
      <h1>Formulario de Registro</h1>
      <Event onSubmit={handleSubmit} />
      {datosEnviados && (<MostrarEvento nombre={nombre} edad={edad} pokemonFavorito={pokemonFavorito}/>)}
    </div>
  );
}

export default Form;
