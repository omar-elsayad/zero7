import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Shop from './components/Shop';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart';



function App() {
  return (
    <Router> 
        <div className='App'>
        <Navbar />
            <div className='app-container'>
                
                <Switch>

                    <Route path='/zero7' component={Home} />
                       
                    <Route path='/shop' component={Shop} />
                   
                    <Route path='/contact-us' component={ContactUs} />
               
                    <Route path='/cart' component={Cart} />

                </Switch>
                
            </div>
        <Footer />
        </div>
    </Router>
  );
}

export default App;