import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    transition: all 1s;
    margin-top: 10px;
    margin-bottom: 50px;
    .displayFlex {
        display: flex;
        justify-content: center;
    }

    .aboutSection {
        display: grid;
        grid-template-columns: 60% 40%;
    }

    .image {
        border-radius: 6% 0 0 0;
    }

    @media only screen and (max-width: 1000px) {
        margin-top: 100px;
    }

    @media only screen and (max-width: 800px) {
        margin-top: 100px;
        .image {
            width: 100%;
        }

        .aboutSection {
            display: grid;
            grid-template-columns: 100%;
        }
    }
`

const StyledInfo = styled.div`
    background-color: #131313;
    color: #ecc94b;
    text-align: center;
    font-size: 50px;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .fontWeight900 {
        font-weight: 900
    }

    .resume {
        height: 360px;
        margin-top: 30px;
        transition: filter 0.5s;
        position: relative;
        z-index: 3;
        box-shadow: -1px -1px 10px 10px #ecc94b;

        &:hover {
            cursor: pointer;
            z-index: 1;
            filter: contrast(50%);
        }
    }

    .downloadIcon {
        z-index: 2;
        position: absolute;
        height: 50px;
        margin: 180px 0 0 -160px;

        &:hover {
            cursor: pointer;
            z-index: 4;
        }
    }

    @media only screen and (max-width: 800px) {
        .resume {
            height: 400px;
        }

        .downloadIcon {
            margin: 200px 0 0 -170px;
        }
    }
`

const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;
    margin-top: 30px;

    .badges {
        height: 50px;
        width: 150px;

        &:hover {
            cursor: pointer;
            opacity: 0.8;
        }
    }

    @media only screen and (max-width: 800px) {
        margin-bottom: -60px;
    }
`

export function Skills() {
    return (
        <Wrapper >
            <div className = "displayFlex" >
                <img className = "image" src = "/setup.png" alt = "computers"/>
            </div>
            <div className = "aboutSection" id = "about">
                <StyledInfo>
                    <div className = "fontWeight900" >
                        TOP EXPERTISE
                    </div>
                    <div>
                        <SkillsContainer>
                            <div>
                                <img className = "badges" src = "https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
                            </div>
                            <div>
                                <img className = "badges" src = "https://img.shields.io/badge/-MongoDB-4DB33D?style=for-the-badge&logo=mongodb&logoColor=FFFFFF" alt="MONGODB"/>
                            </div>
                            <div>
                                <img className = "badges" src = "https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
                            </div>
                            <div>
                                <img className = "badges" src = "https://img.shields.io/badge/-Express.js-787878?style=for-the-badge&logo=express" alt="EXPRESS.JS"/>
                            </div>
                            <div>
                                <img className = "badges" src = "https://img.shields.io/badge/-JavaScript-eed718?style=for-the-badge&logo=javascript&logoColor=ffffff" alt="JAVASCRIPT"/>
                            </div>
                            <div>
                                <img className = "badges" src = "https://img.shields.io/badge/-MySQL-F29111?style=for-the-badge&logo=mysql&logoColor=FFFFFF" alt="MYSQL"/>
                            </div>
                            <div>
                                <img className = "badges" src = "https://img.shields.io/badge/-React-000000?style=for-the-badge&logo=react&logoColor=00c8ff" alt="REACT"/>
                            </div>
                            <div>
                                <img className = "badges" src = "https://img.shields.io/badge/-Material_UI-3f51b5?style=for-the-badge&logo=material-ui&logoColor=00c8ff" alt="MATERIAL UI"/>
                            </div>
                            <div>
                                <img className = "badges" src = "https://img.shields.io/badge/-Redux-764abc?style=for-the-badge&logo=redux&logoColor=white" alt="REDUX"/>
                            </div>
                            <div>
                                <img className = "badges" src = "https://img.shields.io/badge/-git-e94e31?style=for-the-badge&logo=git&logoColor=ffffff" alt="GIT"/>
                            </div>
                        </SkillsContainer>
                    </div>
                </StyledInfo>
                <StyledInfo>
                    <div className = "fontWeight900" >
                        RESUME
                    </div>
                    <div>
                        <a href = "https://drive.google.com/file/d/1meHSIprsy-A3OVvvYFahu3q6n6bNbX4b/view?usp=sharing" target="_blank">
                            <img className = "resume" src="/resume.png" alt="resume"/>
                            <img className = "downloadIcon" src="/download.png" alt="download icon"/>
                        </a>
                    </div>
                </StyledInfo>
            </div>
        </Wrapper>
    )
}
