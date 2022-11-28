import React from 'react'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({Item}) => {

    const [show, setShow] = useState(true);

    const { addToCart } = useContext(CartContext);

    const onAdd = (qty) => {
        setShow(false);
        addToCart( Item , qty);
        
    }

    return (

    <div>
            <div className="card mb-4 style=max-width: 340px;">
                <div className="row g-0">
                        <div className="col-md-4">
                        <img src={Item.image} className="img-fluid rounded-start" alt={Item.title}/>
                    </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{Item.title}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <h4>${Item.price}</h4>
                    {show 
                    ?<ItemCount stock = {Item.stock} onAdd ={onAdd}/>
                    :<Link to="/cart">Ir al carrito</Link>
                    }
                    
                </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ItemDetail
