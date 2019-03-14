import React from 'react';
import {Link,withRouter} from 'react-router-dom';

const Navbar = (props) => {
//    console.log(props);
//    setTimeout(()=>{
//                props.history.push('/About');
//                },2000)
    return(
        <nav className='nav-wrapper orange darken-1'>
            <Link to='/' className='brand-logo left'>Student's Information</Link>
            <ul className='right'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Person'>Info</Link></li>
            </ul>
        </nav>
    )
}
export default withRouter (Navbar);
