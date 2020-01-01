import styled from 'styled-components';

export default styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    filter: blur(5px);
    height: 100%;
    width: 100%;
    position: fixed;
    background-position: center;
    z-index: -1;
`;
