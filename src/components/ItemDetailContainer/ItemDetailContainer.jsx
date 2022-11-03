import React, { useEffect, useState } from 'react'
import { products } from '../../mock/products';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [Items, setItem] = useState ({})

    useEffect (() => {
        const getProduct = () =>{
            return new Promise((res, rej) => {
                const product = products.find((prod) => prod.id ===2)
                setTimeout(() => {
                    res(product);
                }, 2000)
            });
        };
    
        getProduct()     
        
            .then((res) => {
                setItem(res);
            }) 
            .catch((error) => {
                console.log(`rej`, error)
            }); 
    }, []);


    return (
        
        <div>
            <ItemDetail/>
        </div>
    )
}

export default ItemDetailContainer