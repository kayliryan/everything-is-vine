import React from 'react';
import { 
    Navigation, 
    NavigationBarContainer, 
    NavigationLogo, 
    MobileIcon, 
    NavigationMenu, 
    NavigationItem, 
    NavigationLinks,
    NavigationButton,
    NavigationButtonLink,
} from './elements';
import { FaBars } from 'react-icons/fa';
import { IoMdWine } from 'react-icons/io';
import { AiOutlineShoppingCart } from "react-icons/ai";


const NavigationBar = () => {
    return (
        <Navigation>
            <NavigationBarContainer>
                <NavigationLogo to='/'>
                    Everything's Vine
                </NavigationLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavigationMenu>
                    <NavigationItem>
                        <NavigationLinks to='wines'>
                            Wines
                        </NavigationLinks>
                    </NavigationItem>
                    <NavigationItem>
                        <NavigationLinks to='contact'>
                            Contact
                        </NavigationLinks>
                    </NavigationItem>
                    <NavigationItem>
                        <NavigationLinks to='shopping'>
                            Cart
                        </NavigationLinks>
                    </NavigationItem>
                    <NavigationItem>
                        <NavigationLinks to='signup'>Sign Up</NavigationLinks>
                    </NavigationItem>
                </NavigationMenu>
                <NavigationButton>
                    <NavigationButtonLink to='/signin'>Sign In</NavigationButtonLink>
                </NavigationButton>
            </NavigationBarContainer>
        </Navigation>
    );
};

export default NavigationBar;