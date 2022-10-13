import React from 'react'
import { useSelector } from 'react-redux'
function Cart() {

  const product = useSelector((state) => state.handleCart);
  
  return (
    <div className='row'>
      <div className="col-md-4">

        <h3>{product.length}hdhdhdh </h3>
      </div>
    </div>
  )
}

export default Cart
