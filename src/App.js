import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import Error from './components/Error'
import Contact from './components/Contact'


import {Navigate, Routes , Route } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
     <Header/>
     <Routes>
       <Route path='/' element={<Navigate to='/home'/>} />
       <Route path='/home' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/products' element={<Products/>}/>
       <Route path='/products/:id' element={<ProductDetails/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path="*" element={<Error/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
