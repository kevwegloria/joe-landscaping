import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {FaTree} from 'react-icons/fa'


export const Nav = styled.nav`
background-color: transparent;
height:80px;
display:flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1000px) / 2);
position:absolute;
z-index:2
`
export const NavLink = styled(Link)`
color: #191919;
display:flex;
font-weight:400;
font-size:14px;
align-items: center;
text-decoration:none;
padding: 0 1rem;
height:100%;
cursor:pointer;

&.active {
    color : black;
}
`
export const Tree = styled(FaTree)`
color:green;
margin-right:10px;

`

export const Bars = styled(FaBars)`
display:none;
color: black;

@media screen and (max-width: 768px) {
display:block;
position:absolute;
top:0;
right:0;
transform: translate(-100%, 75%);
font-size: 1.8rem;
cursor:pointer;
}
`

export const NavMenu = styled.div`
display:flex;
align-items: center;
margin-left:120px;
margin-right:120px;

@media screen and (max-width: 768px){
    display:none;
}
`

export const NavBtn = styled.nav`
display:flex;
align-items:center;
;

@media screen and (max-width: 768px) {
    display:none;
}
`

export const NavBtnLink = styled(Link)`
border-radius: 20px;
background: black;
padding: 10px 22px;
color: white;
border:none;
outline:none;
cursor:pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: black;
} 
`; 