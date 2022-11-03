import React, { useEffect } from 'react'
import './ItemListContainer.css';
import { products } from '../../mock/products';
import { useState } from 'react';
import ItemList from './ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [items, setItems] = useState([])

    const {categoryName} = useParams();

    useEffect(() => {

        const getProductsFilter = () =>{
            return new Promise((res, rej) => {
                const productosFiltrados = products.filter((prod) => prod.category === categoryName)
                const ref = categoryName ? productosFiltrados : products;
                setTimeout(() => {
                    res(ref);
                }, 500)
            });
        };
    
        getProductsFilter()     
        
            .then((res) => {
                setItems(res);
            }) 
            .catch((error) => {
                console.log(`rej`, error)
            }); 
    
    }, [categoryName]);

    return (
        <div className="contenedor">
            <ItemList items={items}/> 
        </div>
    );
}

export default ItemListContainer;

