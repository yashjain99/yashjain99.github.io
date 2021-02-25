import React from 'react'
import styled from "styled-components";

const StyledNavbar = styled.div `
    top:0;
    width: 90%;
    height: 50px;
    display: flex;
    padding: 0.4rem 5%;
    background-color: #131313;
    transition: all 1s;
    line-height: 10px;

    .left {
        flex:1;
        margin-top: 10px;
        .logo {
            transition: all 0.5s;
            border-radius: 50%;
            height: 70px;
            
            &:hover {
                cursor: pointer;
                opacity: 0.7;
            }
        }
    }

    a {
        text-decoration:none;
        color: #ecc94b;
    }

    .right {
        display: flex;
        height: 70px;
        margin-top: 10px;
        & > div{
            color: #ecc94b;
            font-size: 18px;
            font-weight:bold;
            margin: 15px 10px;
            border: 2px solid #ecc94b;
            padding: 0.7rem 1.5rem;
            border-radius: 2rem;
            transition: all 0.5s;
        }

        & > div:hover {
            background-color: #ecc94b;
            & a {
                color: #131313;
            }
        }

    }
    @media only screen and (max-width: 600px) {
        .right div {
            font-size: 15px;
        }
    }
`

export function Navbar() {
    return (
        <StyledNavbar>
            <div className="left">
                <img className = "logo" src = "/logo.png" alt = "logo"/>
            </div>
            <div className="right">
                <div>
                    <a href="#about">About</a>
                </div>
                <div>
                    <a href="#projects">Projects</a>
                </div>
                <div>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </StyledNavbar>
    )
}
