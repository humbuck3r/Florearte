import './App.scss';
import About from './Components/About/About';
import Header from '../src/Components/Header/Header';
import Slider from '../src/Components/Slider/Slider';
import Footer from './Components/Footer/Footer';
import Products from './Components/Products/Products';
import Courses from './Components/Courses/Courses';
import Contact from './Container/Contact/Contact';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

const App =() => {


return (
<Router>
    <Switch>
      <Route exact path="/">   
        <Header />
        <Slider />
        <Footer/>
      </Route>  
      <Route path="/Products">
          <Header />
          <Products/>
          <Footer/>
      </Route>
      <Route path="/Courses">
          <Header />
          <Courses/>
          <Footer/>
      </Route>
      <Route path="/About">
          <Header />
          <About/>
          <Footer/>
      </Route>
      <Route>
          <Header />
          <Contact/>
          <Footer/>
      </Route>
    </Switch>
        
        
</Router>
);
}

export default App;
