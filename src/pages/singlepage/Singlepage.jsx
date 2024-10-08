import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Singlepage = () => {
    const product = useParams();
    const [products, setProducts] = useState({});
    useEffect(()=>{
        try {
            const fetchProduct = async ()=>{
                const response = await axios.get(`https://fakestoreapi.com/products/${product.id}`);
                setProducts(response.data);
            }

            fetchProduct();
        } catch (error) {
            console.log(error)
        }
        
    },[]);
    console.log(products);
  return (
    <div>{products?.title}
    
    <img src={products.image} alt="" />
    </div>
  )
}

export default Singlepage