import React from 'react';
import { Nav, NavigationBarContainer, NavigationLogo, MobileIcon, NavigationMenu, NavigationItem, NavigationLinks } from './elements';
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
                <NavigationMenu>
                    <NavigationItem>
                        <NavigationLinks to='wines'>Our Wines</NavigationLinks>
                    </NavigationItem>
                    <NavigationItem>
                        <NavigationLinks to='contact'>Contact</NavigationLinks>
                    </NavigationItem>
                    <NavigationItem>
                        <NavigationLinks to='shopping'>Shopping Cart</NavigationLinks>
                    </NavigationItem>
                    <NavigationItem>
                        <NavigationLinks to='signup'>Sign Up</NavigationLinks>
                    </NavigationItem>
                </NavigationMenu>
            </NavigationBarContainer>
        </Nav>
    );
};

export default NavigationBar;