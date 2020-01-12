import styled from 'styled-components';

export const Text = styled.div`
    font-size: 1.6rem;
    color: ${({ color = 'white' }) => color};
`;

export const Subtitle = styled.h3`
    font-size: 3rem;
    color: ${({ color = 'white' }) => color};
`;

export const SmallTitle = styled.h2`
    font-size: 6rem;
    font-family: 'Shadows Into Light', cursive;
    color: ${({ color = 'white' }) => color};
`;

export const Title = styled.h1`
    font-size: 9rem;
    font-family: 'Shadows Into Light', cursive;
    color: ${({ color = 'white' }) => color};
`;
