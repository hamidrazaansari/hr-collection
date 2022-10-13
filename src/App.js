import './App.css';
import Home from './Home';
import Products from './Products';
import ProductDet from './ProductDet';
import Navbar from './Navbar';

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Cart from './Cart';



function App() {
  return (
 <div>
    <Router>
    <Navbar/>

  <Routes>
        <Route path="/" element={  <Home /> } />
        <Route path="/products" element= { <Products/>}/>
        <Route path="/productDet/:id" element= { <ProductDet/>}/>
        <Route path="/productDet/cart" element= { <Cart/>}/>

  </Routes>
  </Router>
    </div>
  );
}

export default App;
