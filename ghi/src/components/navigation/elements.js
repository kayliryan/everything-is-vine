import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';


export const Navigation = styled.nav`
    background: #A6A6C7;
    height: 85px;
    // margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavigationBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1600px;
`;

export const NavigationLogo = styled(LinkRouter)`
    color: #070723;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    margin-left: 16px;
    // font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 90%);
        font-size: 1.6rem;
        cursor: pointer;
        color: #070723;
    }
`;

export const NavigationMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    margin-left: -58px;


    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavigationItem = styled.li`
    height: 80px;
`;

export const NavigationLinks = styled(LinkScroll)`
    color: #070723;
    display: flex;
    align-items: center;
    margin-left: 16px;
    font-size: 1.3rem;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;

export const NavigationButton = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavigationButtonLink = styled(LinkRouter)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 30px;
    color: #070723;
    font-size: 1.2rem;
    outline: none;
    border: none;
    cursor: pointer;
    translation: all 0.2s ease-in-out;
    text-decoration: none;

    &.hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`