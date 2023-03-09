import styled from "styled-components";

export const PageNavbarContainer = styled.nav`
    width: 100%;
    height: 45rem;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    a{
        width: 80%;
        max-width: 30rem;
        padding: 4rem 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.1rem;
        background-color: var(--white);
        border-radius: var(--border-radius);
        text-align: center;
        text-decoration: none;
    }

    a figure{
        width: 8rem;
        max-width: 5rem;
    }

    a h2{
        font-size: 1.7rem;
        font-weight: 900;
        color: var(--main-color);
        width: min-content;
    }
`;