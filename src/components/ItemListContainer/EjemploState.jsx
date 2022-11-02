import React, { useState } from 'react'

const EjemploState = () => {

    const [texto, setTexto] = useState("volver a 0");

    const cambiarTexto = () =>{
        if (texto === "volver a 0"){

            setTexto("Estas en 0");

        } else{
            setTexto("volver a 0")
        }
    };

    return (
        <button onClick={cambiarTexto}>{texto}</button>
    );
};

export default EjemploState;