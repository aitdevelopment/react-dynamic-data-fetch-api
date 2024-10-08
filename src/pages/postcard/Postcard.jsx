import React from 'react'
import { Link } from 'react-router-dom'

const Postcard = ({title}) => {
  return (
    <Link to={`/singlepage/${title.id}`} className='w-[23%] p-3 bg-slate-50 flex items-center justify-center gap-3 flex-col '>
        <div className=" w-full h-[200px] ">
            <img className='w-full h-full object-contain' src={title.image} alt="" />
        </div>
        <h1 > {title.title.substring(0, 30)}</h1>


    </Link>
  )
}

export default Postcard