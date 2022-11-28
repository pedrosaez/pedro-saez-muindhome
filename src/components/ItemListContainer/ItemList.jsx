import React, { memo } from 'react'
import Item from './Item';
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

export default memo(ItemList)
