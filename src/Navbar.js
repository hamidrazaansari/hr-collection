import React from 'react'
import { useSelector } from 'react-redux'
import { Link }  from  'react-router-dom'
function Navbar() {

  const state = useSelector((state) => state.handleCart)

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
  <div className="container-fluid mx-5">
    <Link className="navbar-brand fw-bold fs-4" to="/">HR COLLECTIONS</Link>    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"><i className="fa-sharp fa-solid fa-house"></i> Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Product</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/"><i className="fa-solid fa-user"></i> About</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/"><i className="fa-solid fa-phone"></i> Contact</Link>
        </li>
  
      </ul>
      <div className="buttons ">
        <Link to="/" className='btn btn-outline-dark  '><i className="fa-solid fa-right-to-bracket me-1"></i>Login</Link>
        <Link to="/" className='btn btn-outline-dark ms-2 '><i className="fa-solid fa-user-plus me-1"></i>Ragister</Link>
        <Link to="/cart" className='btn btn-outline-dark ms-2 '><i className="fa-solid fa-cart-shopping me-1"></i>Cart({state.length})</Link>

      </div>
   
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
