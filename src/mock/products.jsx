export const products = [{

    id:1, 
    title: `Mesa Julia` , 
    price: 65000, 
    descuento: 5,
    stock: 5 , 
    category:`Mesas`, 
    image:`https://res.cloudinary.com/dvn2dp6im/image/upload/v1667246014/Muind%20Home/mesaJulia_w8fibx.jpg`,
}, 
{
    id:2, 
    title: `Mesa Ratona` , 
    price: 63000, 
    descuento: 5,
    stock: 10, 
    category:`Mesas`, 
    image:`https://res.cloudinary.com/dvn2dp6im/image/upload/v1667246010/Muind%20Home/mesaRatona_kwnaun.jpg`,
},
{
    id:3, 
    title: `Rack` , 
    price: 43000, 
    descuento: 5,
    stock: 5, 
    category:`Rack TV`, 
    image:`https://res.cloudinary.com/dvn2dp6im/image/upload/v1667246012/Muind%20Home/rack_zlhbl6.jpg`,
},
{
    id:4, 
    title: `Sofa Chester` , 
    price: 85000, 
    descuento: 5,
    stock: 2, 
    category:`Sillones`, 
    image:`https://res.cloudinary.com/dvn2dp6im/image/upload/v1667246016/Muind%20Home/sillon5_weydbi.jpg`,
}]



export const getProductsFilter = (categoryName) =>{
    return new Promise((res, rej) => {
        const productosFiltrados = products.filter((prod) => prod.category === categoryName)
        const ref = categoryName ? productosFiltrados : products;
        setTimeout(() => {
            res(ref);
        }, 1500)
    });
    
};

export const getProduct = (idProd) =>{
    return new Promise((res, rej) => {
        const product = products.find((prod) => prod.id === +idProd)
        setTimeout(() => {
            res(product);
        }, 1500)
    });
};    