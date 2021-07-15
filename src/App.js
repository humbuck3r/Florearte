import './App.scss';
import Wsp from '../src/Components/Wsp/Wsp';
import About from './Components/About/About';
import Header from '../src/Components/Header/Header';
import Splash from './Components/Splash/Splash';
import Prod from './Components/Slider/Prod'
import Footer from './Components/Footer/Footer';
import Products from './Components/Products/Products';
import Courses from './Container/Courses/Courses';
import Contact from './Container/Contact/Contact';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
} from 'react-router-dom'

const App =() => {


return (
<Router>
    <Switch>
    <Route exact path="/">   
        <Header />
        <Wsp />
        <Splash />
        <Prod />
        <Footer/>
    </Route>  
    <Route path="/Products">
        <Header />
        <Wsp/>
        <Products/>
        <Footer/>
    </Route>
    <Route path="/Courses">
        <Header />
        <Wsp/>
        <Courses/>
        <Footer/>
    </Route>
    <Route path="/About">
        <Header />
        <Wsp/>
        <About/>
        <Footer/>
    </Route>
    <Route path="/Contact">
        <Header />
        <Wsp/>
        <Contact/>
        <Footer/>
      </Route>
    </Switch>
        
        
</Router>
);
}

export default App;
