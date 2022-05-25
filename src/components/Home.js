import '../css/home.css';
import landingImage from '../images/landing.png';

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
            <div className="landing-section d-flex flex-column-reverse-md row">
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
                            <button className='mainBut' id='mainBut'>New Collection</button>
                        </div>
                    </div>
                </div>
                <div className="image-section col-lg-6 col-md-12 d-flex justify-content-center justify-content-start-md align-items-center">
                    <img className='img-fluid' id='img' src={landingImage} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Home;