import React, {useEffect} from 'react';
import GitHubCalendar from "github-calendar";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 20px 0;
    margin: 60px 0;
    background-color: #131313;
    .calendar {
        margin: 30px auto;
        width: 70%;
        color: #ecc94b;
        border: 2px solid white;
        & div {
            font-size: 20px
        }
    }

    .table-column {
        border-top: 2px solid white;
        border-right: 1px solid white;
    }

    .contrib-number {
        color: white;
    }

    .ContributionCalendar-label {
        color: white;
        font-weight: 900;
        font-size: 11px;
    }

    @media only screen and (max-width: 1000px) {
        .calendar {
            width: 90%;
            & div {
                font-size: 18px
            }
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

export function GithubCalendar() {

    useEffect(() => {
        GitHubCalendar(".calendar", "yashjain99", { responsive: true });
    },[])

    return (
        <Wrapper>
            <Header>
                GITHUB CALENDAR
            </Header>
            <div className="calendar">
            
            </div>
        </Wrapper>
    )
}
