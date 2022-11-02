import React from 'react'
import './Item.css';

const Item = ({producto}) => {
    return (
                <div key = {producto.id}>
                <div className="card card text-center border border-0" style={{width: '300px'}}>
                    <img src={producto.image} className="card-img-top" alt={producto.title}/>
                    <div className="card-body">
                        <h5 className="card-title">{producto.title}</h5>
                        <a href="http://localhost:3000/" className="btn btn-primary">Agregar (+)</a>
                    </div>
                </div>
            </div>    
            );
        }

export default Item