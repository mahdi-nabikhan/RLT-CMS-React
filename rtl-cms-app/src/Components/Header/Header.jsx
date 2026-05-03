import React from 'react'
import './Header.css'
import {AiOutlineBell} from 'react-icons/ai'
import {BsBrightnessHigh} from 'react-icons/bs'
export default function Header() {
    return (
        <div className='header'>
            <div className="admin-profile">
                <img src="img/logo.svg" alt="aks" />
                <h1>مهدی نبی خان</h1>
                <h3> برنامه نویس فول استک</h3>
            </div>
            <div className="header-left-section ">
                <div className="search-box">
                    <input type="text" placeholder='جست و جو کنید' />
                    <button>جست و جو</button>
                </div>
                <button className="header-left-icon"><AiOutlineBell/></button>
                <button className="header-left-icon"><BsBrightnessHigh/></button>
            </div>
        </div>

    )
}
