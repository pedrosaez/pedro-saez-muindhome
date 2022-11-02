import React from 'react'
import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({stock, onAdd}) => {
    const [initial, setCantidad] = useState(1);
    
    const sumar = () => {
        if (initial < stock){
            setCantidad(initial + 1);
        }
    };

    const restar = () =>{
        setCantidad(initial - 1);
    };

    const reset = () => {
        setCantidad(0);
    };
    

    return (
        <div className='contador'>
            <div className='sumatoria'>
                <button className='boton1' disabled = {initial === 0 } onClick={restar}>-</button>
                <p className='numero'>{initial}</p>
                <button className='boton2' onClick={sumar}>+</button> 
                <button className='botonGrande' onClick={reset}>Volver a 0</button> 
                <button className='agregar' onClick={() => onAdd(initial)}>Agregar (+)</button>
            </div>
        </div>
    )
}

export default ItemCount