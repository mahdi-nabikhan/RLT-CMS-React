import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header'
import { Route,Routes } from 'react-router-dom'
import Comments from './Components/Comments/Comments'
import Products from './Components/Products/Products'
import Users from './Components/Users/Users'
import Orders from './Components/Orders/Orders'
import Offs from './Components/Offs/Offs'

export default function App() {
  return (
    <>

      <Sidebar/>
      <div className='main'>
          <Header/>
          <Routes>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='/comments' element={<Comments/>}></Route>
            <Route path='/users' element={<Users/>}></Route>
            <Route path='/orders' element={<Orders/>}></Route>
            <Route path='/offs' element={<Offs/>}></Route>
          </Routes>
      </div>

    </>
  )
}
