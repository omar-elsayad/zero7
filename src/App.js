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
            <div className='app-container'>
                <Navbar />

                <Switch>

                    <Route path='/'>
                        <Home />
                    </Route>

                    <Route path='/shop'>
                        <Shop />
                    </Route>

                    <Route path='/contact-us'>
                        <ContactUs />
                    </Route>

                    <Route path='/cart'>
                        <Cart />
                    </Route>
  
                </Switch>
                
                <Footer />
            </div>
        </div>
    </Router>
  );
}

export default App;