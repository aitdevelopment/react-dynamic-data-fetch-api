import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Postcard from '../postcard/Postcard';

const Category = () => {
    const one = useParams();
    const [loader, setLoader] = useState(false)

    const [card, setcard]= useState([])

    useEffect(()=>{
    
    const fetchingCard = async ()=>{
      try {
        setLoader(true)
        const response = await axios.get(`https://fakestoreapi.com/products/category/${one.id}`);
            console.log(response.data)
            setcard(response.data);
            setLoader(false)
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    }
    fetchingCard()
    },[one])
    if(loader === true) return <div>Products Loading</div>
  return (
    <div>
      {
        card?.map((item)=>(
        <Postcard title={item} key={item.id}/>
        ))
        
      }


    </div>
  )
}

export default Category