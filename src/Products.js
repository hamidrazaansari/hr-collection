
import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;


    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }
        }

        getProducts();
    }, []);

    const Loading = () => {
        return (
        <>
        Loading....
        </>    
        );
    }
    const filterProduct = (cat) => {
        const updateList = data.filter( (x) => x.category === cat);
        setFilter(updateList);
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <div className="btn btn-outline-dark me-2"  onClick={()=> setFilter(data)}>All</div>
                    <div className="btn btn-outline-dark me-2" onClick={()=> filterProduct("men's clothing")}>Men's clothing</div>
                    <div className="btn btn-outline-dark me-2" onClick={()=> filterProduct("women's clothing")}>Women's clothing</div>
                    <div className="btn btn-outline-dark me-2" onClick={()=> filterProduct("jewelery")}>Jewelary</div>
                    <div className="btn btn-outline-dark me-2" onClick={()=> filterProduct("electronics")}>electronic</div>
                </div>

                {filter.map((products) => {

                    return (
                        <>
                            <div className="col md-3  mb-4">
                                <div className="card h-80  text-center p-4" key={products.id}>
                                    <img src={products.image} className="card-img-top" alt={products.title} height='200px'/>
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{products.title.substring(0,12)}</h5>
                                        <p className="card-text fw-bolder">${products.price}</p>
                                        <Link to={`/productDet/${products.id}`} className="btn btn-outline-dark m-0 ">BUY</Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        );
    }; 

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h1 className='display-6 fw-bolder text-center'>LEATEST PRODUCTS</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">

                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default Products
