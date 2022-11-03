import React, { useEffect } from 'react'
import './ItemListContainer.css';
import { products } from '../../mock/products';
import { useState } from 'react';
import ItemList from './ItemList/ItemList';

const ItemListContainer = ({greeting}) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const getProducts = () =>{
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res(products);
                }, 2000)
            });
        };
    
        getProducts()     
        
            .then((res) => {
                setItems(res);
            }) 
            .catch((error) => {
                console.log(`rej`, error)
            }); 
    }, []);

    return (
        <div className="contenedor">
            <h3 className='bienvenida'>{greeting}</h3>
            <ItemList items={items}/>
        </div>
    );
}

export default ItemListContainer;

