import React from 'react'
import classes from './HeaderCartButton.css'

const HeaderCartButton = () => {

    return (
        <button className={classes.header}>
            <span className={classes.icon}>Icon</span>
            <span>Your Cart</span>
            <span className={classes.badge}>2</span>
        </button >
    )
}

export default HeaderCartButton