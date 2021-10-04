import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Navbar/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import About from './Pages/About';
import Features from './Pages/Features';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path = "/"><Home></Home></Route>
        <Route path = "/courses"><Courses></Courses></Route>
        <Route path = "/about"><About></About></Route>
        <Route path = "/features"><Features></Features></Route>
        <Route path = "*"><NotFound></NotFound></Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
