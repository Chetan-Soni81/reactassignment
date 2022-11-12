import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import './header.css'
import logo from '../../Assets/logo.png'
import { FaUserCircle, FaAngleDown } from 'react-icons/fa'

const Header = () => {
    return (
        <header className='header'>
            <nav className='header__nav'>
                <Link className='logo'>
                    <img src={logo} alt="" />
                </Link>

                <div className='nav__links'>
                    <div>
                        <Link className='nav__item'>My Assignment</Link>
                    </div>
                    <div>
                        <Link className='nav__item'>Chat with Mentor</Link>
                    </div>
                    <div className='nav_drop'>
                        <FaUserCircle className='profile_pic' />
                        <Link>ProfileName</Link>
                        <FaAngleDown />
                    </div>
                </div>
            </nav>
            <div className="breadcrumb__pane">
                    <ul className="breadcrumb__list">
                        <li ><a>UI/UX</a></li>
                        <li >Refer & Earn</li>
                    </ul>
            </div>
        </header>
    )
}

export default Header