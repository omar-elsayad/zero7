import '../css/home.css';
import landingImage from '../images/landing.png';
import newCollectionImage from '../images/newCollection.jpg';
import newCollectionImage2 from '../images/newCollection2.jpg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Home = () => {

    // function for landing animatinos
    setTimeout(function() {
        let img = document.getElementById('img');
        let big = document.getElementById('big');
        let small = document.getElementById('small');

        img.style.opacity = "1";
        img.style.transition = '2s';

        big.style.marginLeft = "50px";
        big.style.transition = '2s';

        small.style.marginLeft = '-30px';
        small.style.transition = '2s';
    }, 0); 

    return (
        <div className="home container">

            {/* start landing seciton */}
            <div className="landing-section d-flex row mtb">
                <div className="text-section col-lg-6 col-md-12 d-flex flex-column justify-content-center justify-content-start-md align-items-start">
                    <div className="text-container1">
                        <p className='dash' id='dash'>-----</p>
                        <p className='big' id='big'>Creativity</p>
                    </div>
                    <div className="text-container2">
                        <p className='small' id='small'>We Are</p>
                        <div className='textBut' id='textBut'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis earum iusto nesciunt?   
                                Quod beatae, nostrum magnam deserunt.
                            </p>
                            <Link to='/shop'>
                                <button className='mainBut' id='mainBut'>New Collection</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="image-section col-lg-6 col-md-12 d-flex justify-content-center justify-content-start-md align-items-center">
                    <img className='img-fluid' id='img' src={landingImage} alt="" />
                </div>
            </div>
            {/* end landing section */}


            {/* start new collection section */}
            <div className="new-collection-section d-flex flex-row-reverse row mtb">
                <div className="text-section col-lg-8 col-sm-12 d-flex flex-column justify-content-evenly align-items-center p-5">
                    <div>
                        <h1 className='text-capitalize text-center pb-4'>New summer collection</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi libero, impedit iusto doloribus, obcaecati ipsam unde officiis cupiditate eius nostrum inventore et sunt in eos nobis vel error iste.</p>
                    </div>
                    <Link to='/shop'>
                        <button className='mainBut'>Shop Now</button>
                    </Link>
                </div>
                <div className="image-section col-lg-4 col-sm-12 p-lg-0 px-sm-5">
                    <img className='img-fluid' src={newCollectionImage} alt="" />
                </div> 
            </div>
            {/* end new collection section */}


            {/* start new collection section */}
            <div className="new-collection-section row mtb">
                <div className="text-section col-lg-8 col-sm-12 d-flex flex-column justify-content-evenly align-items-center p-5">
                    <div>
                        <h1 className='text-capitalize text-center pb-4'>New summer collection</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi libero, impedit iusto doloribus, obcaecati ipsam unde officiis cupiditate eius nostrum inventore et sunt in eos nobis vel error iste.</p>
                    </div>                    
                    <Link to='/shop'>
                        <button className='mainBut'>Shop Now</button>
                    </Link>
                </div>  
                <div className="image-section col-lg-4 col-sm-12 p-lg-0 px-sm-5">
                    <img className='img-fluid' src={newCollectionImage2} alt="" />
                </div> 
            </div>
            {/* end new collection section */}

        </div>
    );  
}       

export default Home;