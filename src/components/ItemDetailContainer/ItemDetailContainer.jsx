import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProduct } from '../../mock/products';
import ItemDetail from './ItemDetail';
import BounceLoader from "react-spinners/BounceLoader";

const ItemDetailContainer = () => {

    const [Item, setItem] = useState ({})

    const [loading, setLoading] = useState(true)

    const {idProd} = useParams ();
    

    useEffect (() => {
        setLoading(true);
        getProduct(idProd) 
            .then((res) => {
                setItem(res);
            }) 
            .catch((error) => {
                console.log(`rej`, error)
            })
            .finally(() => {
                setLoading(false);
            }); 
    }, [idProd]);
    
        
        if (loading) {
            return(
                <div className="spinners">
                <BounceLoader/>
                </div>
        );
            
        }    


    return (
        
        <div>
            <ItemDetail Item ={Item}/>
        </div>
    )
}

export default ItemDetailContainer