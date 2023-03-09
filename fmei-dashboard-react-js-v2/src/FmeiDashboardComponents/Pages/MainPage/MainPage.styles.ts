import styled from "styled-components";

export const FmeiDashboardContainer = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
`;

export const DashboardHeader = styled.header`
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 1.3rem 3rem;

    figure{
        width: 4rem;
        height: max-content;
    }

    button[type='button']{
        border: none;
        width: 4rem;
        height: max-content;
        background-color: transparent;
        cursor: pointer;
    }
`;

export const FinancialInformation = styled.section`
    width: 100%;
    min-height: 12rem;
    display: flex;
    align-items: center;
    gap: 2rem;

    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    &::-webkit-scrollbar{
        display: none;
    }
`;

export const FinancialInformationContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;

    min-width: 75%;
    height: 12rem;
    background-color: var(--white);
    border-radius: var(--border-radius);

    scroll-snap-align: center;

    &:first-child{
        margin-left: 5rem;
    }

    &:last-child{
        margin-right: 5rem;
    }

    div{
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        gap: 1rem;
    }

    div span{
        font-size: 2rem;
    }

    figure{
        width: 8rem;
    }
`;

export const ToolsNavbar = styled.nav`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;

    ul{
        width: max-content;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        background-color: var(--main-color);
        border-radius: 3rem;
        padding: .5rem;
    }

    ul li{
        max-width: 5.5rem;
        height: 5.5rem;
        border-radius: 50%;
        padding: .8rem;
        cursor: pointer;
        transition: all .5s ease;
    }

    ul li:hover{
        background-color: var(--secondary-color);
    }
`;