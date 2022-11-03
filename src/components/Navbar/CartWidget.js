import React from 'react'
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className='botonCarrito'>
            <button type="button" className="btn btn-outline-dark border border-0 position-relative">
                    <span className="material-symbols-outlined">shopping_cart</span>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    10
                    </span>
            </button>
        </div>
    )
}

export default CartWidget
