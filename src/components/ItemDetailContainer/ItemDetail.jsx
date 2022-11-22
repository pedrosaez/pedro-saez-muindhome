import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({Item}) => {

    const navigate = useNavigate();

    const onAdd = (qty) => {
        const [cant, setCant] = useState(0);
        setCant(qty);
        setTimeout(() => {
            navigate('/cart');
        }, 1000)
        
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
                    <ItemCount stock = {Item.stock} onAdd ={onAdd}/>
                </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ItemDetail
