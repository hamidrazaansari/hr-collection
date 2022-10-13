import React from 'react'
import img from './background.jpg'
import Products from './Products'
function Home() {
  return (
  <>

    <div className="hero">

      <div className="card bg-dark text-black border-0">
        <img src={img} className="card-img" alt="background" height="650px" />

        <div className="card-img-overlay d-flex justify-content-end align-items-center">

        <div className="container ">
          <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASION ARRIVALS</h5>
          <p className="card-text lead fs-2">CHEAK OUT ALL THE TRENDS</p>
        </div>
        </div>
  
      </div>

    </div>
    <Products/>
    </>
  )
}

export default Home
