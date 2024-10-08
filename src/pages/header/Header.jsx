import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

const two =[
    {
        id:1,
        title:"men's clothing"
    },
    {
        id:2,
        title:"women's clothing"
    },
    {
        id:3,
        title:"jewelery"
    },
    {
        id:4,
        title:"electronics"
    },
    



]



  return (
   <header className='w-full h-[20px] bg-slate-400 flex items-center justify-between p-[40px] '>
<h1>Halim</h1>
<nav>
    <ul className='flex items-center justify-center gap-3 '>
        {
            two.map((item)=>(
                <li key={item.id}> <Link to={`/category/${item.title}`}> {item.title} </Link> </li>
            ))
        }
    </ul>
</nav>

   </header>
  )
}

export default Header