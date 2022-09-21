import React from 'react'
import SportPage from './SportPage';
import {Link} from 'react-router-dom'
import '../Sass/NavBar.scss'

const NavBar = props => {

    return ( 
        <>
        <nav>
            <ul className="navList">
                {
                    props.data.map((item) => (
                    <Link to={`/${item.sport}`}>
                        <li>{item.sport}</li>
                    </Link>
                   
                    ))
                }
            </ul>
        </nav>
        </>
     );
}
 
export default NavBar;