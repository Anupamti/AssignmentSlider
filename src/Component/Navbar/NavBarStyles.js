import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../GlobalStyles";

export const NavBarMain = styled.div`
    background-color:#5d20c7;
    width:100%;
    height:80px;
    border-bottom:1px solid blueviolet;
    
`;

export const NavbarContainer = styled(Container)`
    height:100%;
`;

export const Components = styled.div`
    display:flex;
    width:100%;
    align-items:center;
    height:75px;
    border-radius:10px;
 
    
    
`;

export const ComponentPageOne = styled.div`
    flex:1;
`;

export const ComponentPageTwo = styled(ComponentPageOne)`

`;

export const PageOneButton = styled(Link)`
        height:40px;
        width:400px;
        border:0.5px solid blueviolet;
        text-decoration-line:none;
        padding:10px 20px;
        border-radius:50px;
        font-weight:500;
        transition:transform 750ms ease-out;
        transition-property: background-color;
        transition-duration: 1s;
        transition-delay: 50ms;
        background-color:${({ active }) => active ? "#e5d549" : "#1768ac"};
        color:${({ active }) => active ? "#1768ac" : "#e5d549"};

        /* &:hover{
            color:#1768ac ;
            background-color:#e5d549;
        } */
`;

export const PageTwoButton = styled(Link)`
       height:40px;
        width:400px;
        border:0.5px solid blueviolet;
        text-decoration-line:none;
        padding:10px 20px;
        border-radius:50px;
        font-weight:500;
        transition:transform 750ms ease-out;
        transition-property: background-color;
        transition-duration: 1s;
        transition-delay: 50ms;
        background-color:${({ active }) => active ? "#e5d549" : "#1768ac"};
        color:${({ active }) => active ? "#1768ac" : "#e5d549"};
/* 
        &:hover{
            color:#1768ac ;
            background-color:#e5d549;
        } */

`;
