import React from 'react'
import './css/header.css';
import { FaShoppingCart } from 'react-icons/fa';
import { FiAlignJustify } from "react-icons/fi";
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux';
import {Navbar,Container, Nav} from "react-bootstrap"

function Header() {
  let {cart} = useSelector(state => state.productreducer)
  let cartlenght= cart.length>0 ? cart.length : 0;
  return (
    // <header id="header">
    //   <div class="container d-flex align-items-center justify-content-between  ">
    //   <Link to="/home"><h1 class="logo "><a href="#home">Eclipse</a></h1></Link>
        
    //     <nav id="navbar" class=" navbr order-last order-lg-0"> 
    //           <ul class="d-none d-lg-flex pt-3 mobile-ul" id="toggler-ul">
    //             <li class="nav-item">
    //               <Link to="/home"><a class="nav-link" value="link1">Home</a></Link>
    //             </li>
    //             <li class="#header" >
    //               <Link to="/products"><a class="nav-link" value="link2">Products</a></Link>
    //             </li>
    //             <li class="nav-item">
    //               <Link to="/contact"><a class="nav-link" value="link3" href="#services">Contact</a></Link>
    //             </li>
    //           </ul>             
    //           <i class=" d-lg-none fa-solid fa-bars my-2" id="toggle-btn" onclick="mytoggler()"><FiAlignJustify className="fs-2 text-white"/></i>
    //       </nav>
    //       <Link to="/cart"><a href="#appointment" className='align-items-center'><p><FaShoppingCart className="fs-2"/><span>////////{cartlenght}</span></p></a></Link> 
    //   </div>

        
      <Navbar expand="lg" className="navbar-head d-flex justify-content-between align-items-center d-flex">
        <Container>
          <Navbar.Brand href="#home"><Link to="/home"><h1 class="logo "><a href="#home">Eclipse</a></h1></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="order-last order-lg-0 justify-content-center">
            <Nav className="nav-links">
               <Link to="/home"><a class="nav-link" value="link1">Home</a></Link>
              <Link to="/products"><a class="nav-link" value="link2">Products</a></Link>
              <Link to="/contact"><a class="nav-link" value="link3">Contact</a></Link>
              <Link to="/cart"><a class="nav-link" value="link3">Cart</a></Link>
            </Nav>
          </Navbar.Collapse>
          <Link to="/cart"><a href="#appointment" className='align-items-center order-lg-last order-0 ms-5'><p><FaShoppingCart className="fs-2"/><span>{cartlenght}</span></p></a></Link> 
        </Container>
     </Navbar>
  )
}

export default Header