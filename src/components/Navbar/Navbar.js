import React from 'react'
import CartWidget from '../CartWidget'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='lista'>
                <li>Inicio</li>
                <li>Mesas</li>
                <li>Sillones</li>
                <li>Deco</li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default Navbar