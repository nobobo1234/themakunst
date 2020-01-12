import styled from 'styled-components';

export default styled.div`
    height: 8rem;
    width: 100%;
    background: linear-gradient(to right, purple, #6A359C);
    display: flex;
    align-items: center;
    padding: 0.5rem;

    & > *:not(:last-child) {
        margin-right: 1rem;
    }
`;
