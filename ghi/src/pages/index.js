import React, { useState } from 'react'
import Menu from '../components/menu';
import NavigationBar from '../components/navigation';

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false);  

    const toggle = () => {
        setIsOpen(!isOpen);
    };

  return (
    <>
        <Menu isOpen={isOpen} toggle={toggle}/>
        <NavigationBar toggle={toggle}/>
    </>
  );
};

export default Home;