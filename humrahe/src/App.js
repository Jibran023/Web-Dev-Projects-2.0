import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Products from './components/pages/Products';
import Services from './components/pages/services';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/sevices' exact Component={Services}/>
        <Route path='/products' exact Component={Products}/>
        <Route path='/sign-up' exact Component={SignUp}/>
      </Routes>
    </Router>
  );
}

export default App;
