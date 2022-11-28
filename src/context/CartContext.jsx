import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    //const copia = cart.map((prod) => prod)

    const addToCart = (item, cantidad) =>{
        console.log("funcion")
        

        if (isInCart(item.id)) {
            
        } else {
            setCart([...cart, {...item, cantidad}]);
        }
    }

    const isInCart = (id) => {
        return cart.some((prod)=> prod.id === id)
    }

    const deleteAll = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value={{ cart, addToCart, deleteAll }} >
            {props.children}
        </CartContext.Provider>
    )
}       

export default CartProvider