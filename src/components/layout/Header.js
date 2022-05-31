import React from 'react'
import HeaderCartButton from './HeaderCartButton'
import mealsImage from '../../Assests/meals.jpg'
import './Header.css'

const Header = () => {
    return (
        <>
            <header className='header'>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header >
            <div className='main-image'>
                <img src={mealsImage} alt='delicious food!' />
            </div>
        </>
    )
}

export default Header
