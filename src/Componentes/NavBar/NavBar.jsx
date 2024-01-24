import CartWidget from './CartWidget/CartWidget';
import './NavBar.css';
import { Link,NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <Link>
            <h1>Mia Tienda</h1>
            </Link>
            <nav>
                <ul>
                    <li>
                        <NavLink to= "/categoria/2">
                    Camperas
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to = "/categoria/3">
                        Camisetas</NavLink>
                        </li>
                    <li>
                    <NavLink to= "/categoria/4">
                        Pantalones</NavLink>
                        </li>
                </ul>
            </nav>
            
            <CartWidget/>
        </header>
    )
}

export default NavBar