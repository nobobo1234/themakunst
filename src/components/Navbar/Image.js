import styled from 'styled-components';

export default styled.img.attrs(props => ({
    src: props.src
}))`
    display: block;
    max-height: ${props => props.imgHeight};
`;
