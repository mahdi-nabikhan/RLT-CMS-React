import React from 'react'
import './Sidebar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {MdProductionQuantityLimits} from 'react-icons/md'
import {BiCommentDetail} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {BsBag,BsCurrencyDollar} from 'react-icons/bs'
import { Link } from 'react-router-dom'
export default function Sidebar() {
  return (
    <div className='sidebar'>
        <h1 className="sidebar-title">به داشبورد  خود خوش آمدید</h1>

        <ul className="sidebar-links">
            <li>
                <Link to='/'>
            
            صقحه اصلی<AiOutlineHome className='icon'/>
                </Link>
               
            </li>
            <li className='active'>
                <Link to='/products'>
                محصولات<MdProductionQuantityLimits className='icon'/>
                </Link>
            </li>
            <li>
                <Link to='/comments'>
                کامنت ها<BiCommentDetail className='icon'/>
                </Link>
            </li>
            <li>
                <Link to='/users'>کاربران<FiUsers className='icon'/>
                </Link>
            </li>
            <li>
                <Link to='/orders'>سفارشات<BsBag className='icon'/>
                </Link>
              
            </li>
            <li>
                <Link to='/offs'>تخفیف ها<BsCurrencyDollar className='icon'/>
                </Link>
                
            </li>
        </ul>

    </div>
  )
}
