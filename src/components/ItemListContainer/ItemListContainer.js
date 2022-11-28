import React, { useEffect } from 'react'
import './ItemListContainer.css';
import { getProductsFilter} from '../../mock/products';
import { useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import BounceLoader from "react-spinners/BounceLoader";


const ItemListContainer = () => {

    const [items, setItems] = useState([])

    const [loading, setLoading] = useState(true)

    const {categoryName} = useParams();

    useEffect(() => {
    
        getProductsFilter(categoryName)     
        
            .then((res) => {
                setItems(res);
            }) 
            .catch((error) => {
                console.log( error)
            })
            .finally(() => {
                setLoading(false);
            }); 

        return () => setLoading(true);    
    
    }, [categoryName]);

    if (loading) {
        return(
            <div className="spinners">
            <BounceLoader/>
            </div>
    );
    }

    return (
        <div className="contenedor">
            <ItemList items={items}/> 
        </div>
    );
}

export default ItemListContainer;

