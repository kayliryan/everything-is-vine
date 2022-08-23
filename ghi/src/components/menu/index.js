import React from 'react'
import { 
    MenuContainer,
    Icon,
    CloseIcon,
    MenuWrapper,
    MenuSubMenu,
    MenuLink,
    MenuButtonWrap,
    MenuRoute,
} from './menuElements';

const Menu = ({isOpen, toggle}) => {
  return (
    <MenuContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <MenuWrapper>
            <MenuSubMenu>
                <MenuLink to='wines' onClick={toggle}>
                    Wines
                </MenuLink>
                <MenuLink to='contact' onClick={toggle}>
                    Contact
                </MenuLink>
                <MenuLink to='shopping' onClick={toggle}>
                    Cart
                </MenuLink>
                <MenuLink to='signup' onClick={toggle}>
                    Sign Up
                </MenuLink>
            </MenuSubMenu>
            <MenuButtonWrap>
                <MenuRoute to='/signin'>
                    Sign In
                </MenuRoute>
            </MenuButtonWrap>
        </MenuWrapper>
    </MenuContainer>
  );
};

export default Menu;