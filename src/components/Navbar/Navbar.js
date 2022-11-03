import React from 'react'
import CartWidget from '../CartWidget'
import './Navbar.css'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img a href="/" className='logo' src="https://res.cloudinary.com/dvn2dp6im/image/upload/v1667246006/Muind%20Home/LogoMH-02_v08c5k.png" alt="" />
            <ul className='lista'>
                <Link to='/'>Inicio</Link>
                <Link to='/category/Mesas'>Mesas</Link>
                <Link to='/category/Sillones'>Sillones</Link>
                <Link to='/category/Deco'>Deco</Link>
            </ul>
                <Link to='/Cart'><CartWidget/></Link>
        </nav>
    )
}

export default Navbar