import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = () => {

    const onAdd = (qty) => console.log(qty);
    
    return (

    <div>
            <div class="card mb-4 style=max-width: 340px;">
                <div class="row g-0">
                        <div class="col-md-4">
                        <img src="https://res.cloudinary.com/dvn2dp6im/image/upload/v1667246014/Muind%20Home/mesaJulia_w8fibx.jpg" class="img-fluid rounded-start" alt="..."/>
                    </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    <ItemCount stock = {18} onAdd ={onAdd}/>
                </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ItemDetail

/* 
<div>
            <h2>Hola</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel hic aliquid inventore exercitationem sint optio </p>
            <h3>$57.500</h3>
            <button>Add</button>
            <ItemCount/>
        </div> */