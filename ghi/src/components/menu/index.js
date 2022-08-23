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
    </MenuContainer>
  );
};

export default Menu;