import React from 'react'
import { useState } from 'react';
import './Form.css'

const Form = () => {

    const [name, setName] = useState(' ')    
    const [lastname, setLastName] = useState(' ')    

    const enviarDatos = (e) => {
        e.preventDefault();
        console.log(e.target);
        console.log(e.target.elements.nombre.value);
        console.log(e.target.elements.apellido.value);
    };

    const handleName = (e) => {
        setName(e.target.value);
    };

    console.log(name)
    
    const handleLastName = (e) => {
        setLastName(e.target.value);
    };

    console.log(lastname);


    return (
        <div>
            <form className='formulario' action="" onSubmit={enviarDatos} >
                <input type="text" placeholder='Nombre' name="nombre" onChange={handleName} value={name} />
                <input type="text" placeholder='Apellido' name="apellido" onChange={handleLastName} value={lastname} />
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default Form