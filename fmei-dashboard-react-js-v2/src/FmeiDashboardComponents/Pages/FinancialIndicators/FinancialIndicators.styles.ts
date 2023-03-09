import styled from "styled-components";

export const FinancialIndicatorsContainer = styled.div`
    border: 1px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    overflow-y: auto;
    padding: 2rem 0;

    section{
        width: 80%;
        min-height: 15rem;
        background-color: var(--white);
        border-radius: var(--border-radius);
    }
`;