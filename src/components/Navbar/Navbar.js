import { FaRProject, FaTimes } from 'react-icons/fa';
import {
    MobileIcon,
    Nav,
    NavItem,
    NavLinks,
    NavMenu,
    NavbarContainer
} from './NavbarStyles';
import React, { useState } from "react";
import { useHistory, useLocation } from 'react-router-dom';

import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import { data } from '../../data/NavbarData';

const Navbar = () => {
    const [show, setShow] = useState(false);

    let history = useHistory();
    let location = useLocation();

    const handleClick = () => {
        setShow(!show);
    };

    const scrollTo = (id) => {
        const element = document.getElementById(id);

        element.scrollIntoView({
            behavior: 'smooth',
        })
    }

    const closeMobileMenu = (to,id) => {
        if (id && location.pathname === '/') {
            scrollTo(id);
        }
        history.push(to);
        setShow(false);
    }


    return (
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav>
                <NavbarContainer>
                    <MobileIcon onClick={handleClick}>
                        {show ? <FaTimes /> : <CgMenuRight />}
                    </MobileIcon>
                    <NavMenu show={show}>
                        {data.map((el, index) => (
                            <NavItem key={index}>
                                <NavLinks onClick={()=> closeMobileMenu(el.to, el.id)}>{el.text}</NavLinks>
                            </NavItem>
                        ))}
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    )
}

export default Navbar;
