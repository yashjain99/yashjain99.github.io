import React from 'react';
import styled from "styled-components";

const Footer = styled.div`
    background-color: #ecc94b;
    padding: 30px auto;

    a {
        text-decoration: none;
        color: #131313;
    }

    .subTitle {
        font-weight: 500;
        font-size: 25px;
        color: #131313;
        display: flex;
        flex-direction: column;

        & > div {
            margin: 20px;
            width: 420px;
        }

        & span:hover {
            cursor: pointer;
            color: white;
        }
    }
`

const Header = styled.div`
    color: #131313;
    text-align: center;
    font-size: 50px;
    padding: 10px 0;
    font-weight: 900
`

const ContactInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-Bottom: 30px;

    .socialProfile {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 10%;
    }

    .logo {
        height: 100px;
        border-radius: 50%;
    }

    @media only screen and (max-width: 750px) {
        flex-direction: column;

        .socialProfile {
            margin: 0 auto;
            display: grid;
            grid-template-columns: auto auto;
            grid-gap: 10%;
        }
    }
`

const CopyrightBar = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-around;
    color: white;
    line-height: 50px;
    background-color: #131313;
`

export function Contact() {
    return (
        <Footer id = "contact">
            <Header>
                CONTACT
            </Header>
            <ContactInfo>
                <div>
                    <div className = "subTitle">
                        <div>
                            <b>Location - </b>📍 <span>Delhi, India</span>
                        </div>
                        <div>
                            <b>Mobile - </b>📞 <a href = "tel:+919810139321" target = "_blank"><span>+91 9810139321</span></a>
                        </div>
                        <div>
                            <b>Email - </b>📧 <a href = "mailto:jyashjain20@gmail.com" target = "_blank"><span>jyashjain20@gmail.com</span></a>
                        </div>
                    </div>
                </div>
                <div className = "socialProfile" >
                    <div>
                        <a href = "https://www.linkedin.com/in/yash-jain-b8b9b1191/" target = "_blank">
                            <img className = "logo" src="/linkedin_logo.png" alt="LinkedIn"/>
                        </a>
                    </div>
                    <div>
                        <a href = "https://github.com/yashjain99" target = "_blank">
                            <img className = "logo" src="/github_logo.png" alt="GitHub"/>
                        </a>
                    </div>
                    <div>
                        <a href = "https://yashjain99.medium.com/" target = "_blank">
                            <img className = "logo" src="/medium_logo.png" alt="Medium"/>
                        </a>
                    </div>
                    <div>
                        <a href = "mailto:jyashjain20@gmail.com" target = "_blank">
                            <img className = "logo" src="/gmail_logo.png" alt="Gmail"/>
                        </a>
                    </div>
                </div>
            </ContactInfo>
            <CopyrightBar>
                <div>
                    Handcrafted by Yash Jain
                </div>
                <div>
                    Copyright © 2021 | All rights reserved.
                </div>
            </CopyrightBar>
        </Footer>
    )
}
