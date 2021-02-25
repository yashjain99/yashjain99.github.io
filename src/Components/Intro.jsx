import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    margin: 100px 0 0;
    text-align: center;
    height: 350px;

    .root {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    
    .title {
        font-weight: 700;
        font-size: 50px;
        text-align: left;
        background: -webkit-linear-gradient(#737a85, #e8e9eb);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media only screen and (max-width: 1000px) {
        .title {
            font-size: 35px;
            text-align: center;
        }

        .root{
            flex-direction: column;
        }
    }
`

const ImageContainer = styled.div`
    margin-top: -50px;
    height: 300px;
    border-radius: 50%;

    .picture {
        border-radius: 5%;
    }
`

export function Intro() {
    return (
        <Wrapper>
            <div className = "root">
                <ImageContainer>
                        <img className = "picture" src = "/profile_pic.png" alt = "profile pic" />
                </ImageContainer>
                <div >
                    <div className = "title">
                        Hi,
                    </div>
                    <div className = "title">
                        I'm Yash,
                    </div>
                    <div className = "title">
                        Full Stack Web Developer
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
