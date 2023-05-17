import React, { useState } from 'react';
import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.scss';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <>
            <div className="navbar">
                <div className="container">
                    <h1>
                        <span>Prime</span>Homes
                    </h1>
                    <ul className={`nav-menu ${showMenu ? 'nav-menu-mobile' : ''}`}>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Listings</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a className="cta" href="#">Sign In</a>
                        </li>
                    </ul>
                    <div className="hamburger" onClick={toggleMenu}>
                        <HiOutlineMenuAlt4 />
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {showMenu && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ x: '100%' }} 
                        animate={{ x: '0' }} 
                        exit={{ x: '100%' }} 
                        transition={{ type: 'tween' }}
                    >
                        <ul className="nav-menu">
                            <li>
                                <a href="#">Search</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                            <a className="cta" href="#">Sign In</a>
                        </li>
                        </ul>
                        <div className="exit-icon" onClick={toggleMenu}>
                            <HiOutlineX />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;
