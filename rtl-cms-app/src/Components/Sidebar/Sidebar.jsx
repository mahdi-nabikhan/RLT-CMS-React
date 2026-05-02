import React from 'react'
import './Sidebar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {MdProductionQuantityLimits} from 'react-icons/md'
import {BiCommentDetail} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {BsBag,BsCurrencyDollar} from 'react-icons/bs'
export default function Sidebar() {
  return (
    <div className='sidebar'>
        <h1 className="sidebar-title">به داشبورد  خود خوش آمدید</h1>

        <ul className="sidebar-links">
            <li>
                
                <a href="#">صفحه اصلی<AiOutlineHome className='icon'/></a>
            </li>
            <li className='active'>
                <a href="#">محصولات<MdProductionQuantityLimits className='icon'/></a>
            </li>
            <li>
                <a href="#">کامنت ها<BiCommentDetail className='icon'/></a>
            </li>
            <li>
                <a href="#">کاربران<FiUsers className='icon'/></a>
            </li>
            <li>
                <a href="#">سفارشات<BsBag className='icon'/></a>
            </li>
            <li>
                <a href="#">تخفیف ها<BsCurrencyDollar className='icon'/></a>
            </li>
        </ul>

    </div>
  )
}
