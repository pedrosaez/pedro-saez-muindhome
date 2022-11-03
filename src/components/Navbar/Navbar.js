import React from 'react'
import CartWidget from './CartWidget'
import './Navbar.css'
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to={'/'}><img className='logo' src="https://res.cloudinary.com/dvn2dp6im/image/upload/v1667246006/Muind%20Home/LogoMH-02_v08c5k.png" alt=""/></Link>
            <ul className='lista'>
                <NavLink className={"links"} to='/'>Inicio</NavLink>
                <NavLink className={"links"} to='/category/Mesas'>Mesas</NavLink>
                <NavLink className={"links"} to='/category/Sillones'>Sillones</NavLink>
                <NavLink className={"links"} to='/category/Rack TV'>Rack TV</NavLink>
                <NavLink className={"links"} to='/category/Deco'>Deco</NavLink>
            </ul>
                <Link to='/Cart'><CartWidget/></Link>
        </nav>
    )
}

export default Navbar