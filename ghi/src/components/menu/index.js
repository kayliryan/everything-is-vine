import React from 'react'
import { 
    MenuContainer,
    Icon,
    CloseIcon,
} from './menuElements';

const Menu = () => {
  return (
    <MenuContainer>
        <Icon>
            <CloseIcon />
        </Icon>
        <MenuWrapper>
            <MenuSubMenu>
                <MenuLink to='wines'>
                    Wines
                </MenuLink>
                <MenuLink to='contact'>
                    Contact
                </MenuLink>
                <MenuLink to='shopping'>
                    Cart
                </MenuLink>
                <MenuLink to='signup'>
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