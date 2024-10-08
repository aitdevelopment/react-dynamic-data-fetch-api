import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Postcard from '../postcard/Postcard'

const Home = () => {

const [card, setcard]= useState([])

useEffect(()=>{

const fetchingCard = async ()=>{

    const mainCard = await axios.get( "https://fakestoreapi.com/products");
    let storeCard = mainCard.data;
        setcard(storeCard)
}

fetchingCard()

},[])
 

  return (
    <div className=' w-full flex items-center justify-center flex-wrap p-7 gap-4  bg-slate-600'>
        {
            card.map( (item)=>(
                <Postcard key={item.id} title={item}/>
            ) )
        }
    </div>
  )
}

export default Home