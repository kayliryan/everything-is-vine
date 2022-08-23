import React from 'react';
import { Nav, NavigationBarContainer, MobileIcon } from './elements';
import { FaBars } from 'react-icons/fa';


const NavigationBar = () => {
    return (
        <Nav>
            <NavigationBarContainer>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
            </NavigationBarContainer>
        </Nav>
    );
};

export default NavigationBar;