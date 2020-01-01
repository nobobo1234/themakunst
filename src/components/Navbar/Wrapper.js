import styled from 'styled-components';

export default styled.div`
    height: 8rem;
    width: 100%;
    background-color: purple;
    display: flex;
    align-items: center;
    padding: 0.5rem;

    & > *:not(:last-child) {
        margin-right: 1rem;
    }
`;
