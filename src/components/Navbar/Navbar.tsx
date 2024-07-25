import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

export const PATH = {
    PAGE1: '/gridAnimation',
    PAGE2: '/bubbleText',
    PAGE3: '/background',
    PAGE4: '/toolTip',
    PAGE5: '/swiper',
    PAGE_ERROR: '/page/error404'
} as const

export const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to={PATH.PAGE1} className={({isActive}) => isActive ? classes.activeNavLink : ''}>Click animation</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={PATH.PAGE2} className={({isActive}) => isActive ? classes.activeNavLink : ''}>Bubble text</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={PATH.PAGE3} className={({isActive}) => isActive ? classes.activeNavLink : ''}>Background</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={PATH.PAGE4} className={({isActive}) => isActive ? classes.activeNavLink : ''}>Tooltip</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={PATH.PAGE5} className={({isActive}) => isActive ? classes.activeNavLink : ''}>Swiper</NavLink>
            </div>

        </nav>
    )
}