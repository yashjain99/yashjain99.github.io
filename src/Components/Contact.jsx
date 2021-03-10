import React from 'react';
import styled from "styled-components";

const Footer = styled.div`
    padding: 30px auto;

    a {
        text-decoration: none;
        color: #ecc94b;
    }

    .subTitle {
        font-weight: 500;
        font-size: 20px;
        color: #ecc94b;
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
    color: #ecc94b;
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
        grid-gap: 40px;
    }

    .logo {
        height: 80px;
        width: 80px;
        margin-top: 10px;
        border-radius: 50%;
        box-shadow: -1px -1px 10px 10px #ecc94b;
    }

    @media only screen and (max-width: 750px) {
        flex-direction: column;

        .socialProfile {
            text-align: center;
            margin: 10px 0;
            display: grid;
            grid-template-columns: auto auto auto auto;
            grid-gap: auto;
        }
    }
`

const CopyrightBar = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-around;
    color: #131313;
    font-weight: 500;
    line-height: 50px;
    margin-top: 10px;
    background-color: #ecc94b;
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
                            <img className = "logo" src="/linkedIn_logo.png" alt="LinkedIn"/>
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
