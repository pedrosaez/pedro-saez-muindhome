import React from 'react'
import Item from './item/Item';
import './ItemList.css';

const ItemList = ({items}) => {
    return (
        <div className='itemList'>
        {items.map((producto) => {
            return (
                <Item key={producto.id} producto={producto} /> 
            );
        })}
        </div>
    )
}

export default ItemList
