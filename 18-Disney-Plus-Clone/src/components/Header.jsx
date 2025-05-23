import React from 'react'
import styled from 'styled-components';
import logo from "../assets/images/logo.svg"
import search from '../assets/images/search-icon.svg'
import watch from '../assets/images/watchlist-icon.svg'
import orginal from '../assets/images/original-icon.svg'
import movieIcon from '../assets/images/movie-icon.svg'
import series from '../assets/images/series-icon.svg'


const UserImg = styled.img`
height: 80%;
border-radius:50%;
`;

const Nav = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
height: 70px;
background-color: #090b13;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 36px;
letter-spacing: 16px;
z-index: 3;
`;

const Logo = styled.a`
padding:0;
width:80px;
margin-top:4px;
max-height:70px;
font-size:0;
display:inline-block;
img{
    display:block;
    width:100%;
}
`;

const NavMenu = styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
margin: 0px;
padding: 0px;
position: relative;
margin-right: auto;
margin-left: 25px;
a{
    display:flex;
    align-items:center;
    padding: 0 12px;

    img{
        height:20px;
        min-width:20px;
        width:20px;
        z-index:auto;
    }
    span{
        color:rgb(249,249,249);
        font-size:13px;
        letter-spacing:1.42px;
        line-height:1.08;
        padding:2px 0px;
        white-space:nowrap;
        position:relative;

        &:before{
            background-color:rgb(249,249,249);
            border-radius:0px 0px 4px 4px;
            bottom: -6px;
            content: "";
            height: 2px;
            left: 0px;
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            visibility:hidden;
            width: auto;
        }
    }
        &:hover{
            span:before{
                transform: scaleX(1);
                visibility: visible;
                opacity: 1;
            }
}
}
`;

const Login = styled.a`
background-olor: rgb(0,0,0,0.6);
padding: 8px 16px;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px solid #f9f9f9;
border-radius: 4px;
transition: all 0.2s ease 0s;

&:hover{
    background-color: #f9f9f9;
    border-color: transparent;
    color: #000;
}
`;

const DropDown = styled.div`
    position:absolute;
    top:48px;
    right:0px;
    background:rgb(19,19,19);
    border:1px solid rgba(151,151,151,0.34);
    border-radius:4px;
    box-shadow:rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding:10px;
    font-size:14px;
    letter-spacing:3px;
    width:100px;
    opacity:0;
`;
const SignOut = styled.div`
position: relative;
height:48px;
width:48px;
display:flex;
cursor:pointer;
align-items:center;
justify-content:center;
    ${UserImg} {
        border-radius:50%;
        width:100%;
        height:100%;
    }

    &:hover {
        ${DropDown}{
            opacity:1;
            transition-duration:1s;
        }
    }
`;



const Header = () => {
  return (
    <Nav>
        <Logo>
            <img src={logo} alt="" />
        </Logo>
       {/* {<Login>Login</Login>}  */}
       <>
       <NavMenu>
        <a href="/">
        <img src="" alt="" />
        <span>HOME</span>
        </a>
        <a href='/search'>
            <img src={search} alt='HOME'/>
            <span>SEARCH</span></a>
            <a href='/watchlist'>
            <img src={watch} alt='HOME'/>
            <span>WATCHLIST</span></a>
            <a href='/originals'>
            <img src={orginal} alt='HOME'/>
            <span>ORIGINALS</span></a>
            <a href='/movies'>
            <img src={movieIcon} alt='HOME'/>
            <span>MOVIES</span></a>
            <a href='/series'>
            <img src={series} alt='HOME'/>
            <span>SERIES</span></a>
       </NavMenu>
       <SignOut>
         {/* <UserImg src={userPhoto} alt={userName} />
            <DropDown>
                <span onClick={signInWithGoogle}>Sign Out</span>
            </DropDown> */}
       </SignOut>
       </>
    </Nav>
  )
}

export default Header