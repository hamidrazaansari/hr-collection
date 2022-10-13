import React from 'react'
import { useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from './redux/action';
import{ useParams } from 'react-router-dom';
import {Link} from  'react-router-dom'

function ProductDet() {

    const  {id} = useParams();
    const [products , setProduct] = useState([]);
    const [ loading , setLoading] = useState(false);

const dispatch = useDispatch();
const addProduct = (products) => {
  dispatch(addCart(products));
}

    useEffect(() => {
           const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);

           }

        getProduct();
    },[ ]);

    const Loading =() => {
        return(
            <>
            Loading....
            </>
        )
    }
    const ShowProduct = () => {
        return(
            <>
            <div className="col-md-4 my-4">
            <img src={products.image}  alt={products.title} height='400px' width="400px"/>
            </div>
            <div className="col-md-6 mx-4">

                <h4 className='text-uppercase text-black-50 my-3'> {products.category}</h4>
                <h1 className='display-5'>{products.title}</h1>
                <p className='lead fw-bolder'> Rating {products.rating && products.rating.rate}  
                <i class="fa-sharp fa-solid fa-star"></i>
                </p>
                <h3 className='display-6 fw-bold my-4'> $ {products.price}</h3>
                <p className="lead">{products.description}</p>
                <button className='btn btn-outline-dark ms-2 px-4'
                onClick={() => addProduct(products)}
                > Add To Cart</button>
                <Link to='/cart' className='btn btn-dark ms-2 px-4'> Go To Cart</Link>
            </div>
            </>
        )
    }
  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          { loading ? <Loading/> : <ShowProduct/> }
        </div>
      </div>
    </div>
  )
}

export default ProductDet
