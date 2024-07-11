import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';



// We insert the links to the pages here 

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/products' exact Component={Products}/>
        <Route path='/sign-up' exact Component={SignUp}/>
        <Route path='/services' exact Component={Services}/>
      </Routes>
    </Router>
  );
}

export default App;
