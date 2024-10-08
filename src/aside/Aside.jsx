import React from 'react'
 
import { Outlet } from 'react-router-dom'
import Header from '../pages/header/Header'
 
const Aside = () => {
  return (
    <div> 


        <Header/>
        <Outlet/>
    </div>
  )
}

export default Aside