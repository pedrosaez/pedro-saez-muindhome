import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {

    const {cart} = useContext(CartContext);

    return (
        <div>
            {cart.map((prod) => {
                <div>
                        <img src={prod.img} alt={prod.title} />   
                    <div>
                        <h3>{prod.cantidad}</h3>
                        <button>Eliminar</button> 
                    </div>
                </div>         
            })}
        </div>
    );
};

export default Cart