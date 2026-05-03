import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header'
import { Route,Routes } from 'react-router-dom'
import Comments from './Components/Comments/Comments'
import Products from './Components/Products/Products'
import Users from './Components/Users/Users'
import Orders from './Components/Orders/Orders'
import Offs from './Components/Offs/Offs'
import {useRoutes} from 'react-router-dom'
import routes from './routes'
export default function App() {
  const router = useRoutes(routes)
  return (
    <>

      <Sidebar/>
      <div className='main'>
          <Header/>
         {router}
      </div>

    </>
  )
}
