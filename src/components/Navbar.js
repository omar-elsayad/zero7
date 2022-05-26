import { Link } from 'react-router-dom';
import '../css/nav&footer.css';
import logo from '../images/logo.png';

const Navbar = () => {
    return (
        <div className="navbar navbar-expand-lg">
            <div className='container'>
                <Link to='/'>
                    <img className='img-fluid' alt='Zero7' src={logo}/>
                </Link>
                <button className="navbar-toggler">
                <i className="fa-solid fa-bars" />
                </button>
                <div className='collapse navbar-collapse justify-content-end' id='main'>
                    <ul className='navbar-nav ms-auto mb-auto mb-lg-0'>
                        <Link className='nav-link p-2 p-lg-3' to='/'>home</Link>
                        <Link className='nav-link p-2 p-lg-3' to='/shop'>shop</Link>
                        <Link className='nav-link p-2 p-lg-3' to='/contact-us'>contact us</Link>
                        <Link className='nav-link p-2 p-lg-3' to='/cart'>cart</Link>
                    </ul> 
                </div> 
            </div>
        </div>
    );
}
    
export default Navbar;