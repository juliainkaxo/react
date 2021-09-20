import About from './About';
import './App.css';
import ContactUs from './ContactUs';
import Home from './Home';
import NotFound from './NotFound';
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';
import {Switch,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contactus" component={ContactUs} />
          <Route component={NotFound} />
        </Switch>
      </div>
        <Footer/>
    </>
  );
}

export default App;
