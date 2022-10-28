import React from 'react'
import './ItemListContainer.css';
import fotoMesa from '../img/mesaJulia.jpg';

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h3 className="saludo">{greeting}</h3>
            <div className="card" style={{width: '300px'}}>
                <img src={fotoMesa} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Mesa Julia</h5>
                    <a href="http://localhost:3000/" className="btn btn-primary">Agregar (+)</a>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer