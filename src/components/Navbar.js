import { Link } from 'react-router-dom';
import '../css/navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {

    function showMenu() {
        let menu = document.getElementById('menu');

        menu.style.display = 'block';

        setTimeout(() => {
            menu.style.opacity = '1';
            menu.style.transition = '.4s';
        }, 0);
    }

    function hideMenu() {
        let menu = document.getElementById('menu');

        menu.style.opacity = '0';
        menu.style.transition = '.4s';

        setTimeout(() => {
            menu.style.display = 'none';
        }, 400);
    }

    return (
        <div className="navbar navbar-expand-lg">
            <div className='container'>
                <Link to='/zero7'>
                    <img className='img-fluid' alt='Zero7' src={logo}/>
                </Link>
                <div className='menu-buttons'>
                    <button className="navbar-toggler" >
                    <Link to='/cart'>
                        <i className="fa-solid fa-cart-shopping" />
                    </Link>
                    </button>
                    <button className="navbar-toggler" onClick={showMenu} >
                    <i className="fa-solid fa-bars" />
                    </button>
                </div>
                <div className='collapse navbar-collapse justify-content-end'>
                    <ul className='navbar-nav ms-auto mb-auto mb-lg-0'>
                        <Link className='nav-link p-2 p-lg-3' to='/zero7'>home</Link>
                        <Link className='nav-link p-2 p-lg-3' to='/shop'>shop</Link>
                        <Link className='nav-link p-2 p-lg-3' to='/contact-us'>contact us</Link>
                        <Link className='nav-link p-2 p-lg-3' to='/cart'>cart</Link>
                    </ul> 
                </div> 
            </div>
            <div className="menu" id="menu">
                <ul className=''>
                    <i className="p-2 p-lg-3 fa-solid fa-xmark" onClick={hideMenu} />
                    <Link className='nav-link p-2 p-lg-3' to='/zero7'>home</Link>
                    <Link className='nav-link p-2 p-lg-3' to='/shop'>shop</Link>
                    <Link className='nav-link p-2 p-lg-3' to='/contact-us'>contact us</Link>
                    <Link className='nav-link p-2 p-lg-3' to='/cart'>cart</Link>
                </ul>
            </div>
        </div>
    );
}
    
export default Navbar;