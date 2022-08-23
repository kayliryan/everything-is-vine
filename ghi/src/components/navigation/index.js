import React from 'react';
import { Nav, NavigationBarContainer, NavigationLogo, MobileIcon } from './elements';
import { FaBars } from 'react-icons/fa';


const NavigationBar = () => {
    return (
        <Nav>
            <NavigationBarContainer>
                <NavigationLogo to='/'>
                    Everything's Vine
                </NavigationLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
            </NavigationBarContainer>
        </Nav>
    );
};

export default NavigationBar;