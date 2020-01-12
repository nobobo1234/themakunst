import styled from 'styled-components';
import Select from 'react-select';

export default styled(Select)`
    width: ${props => (props.isLong ? '20rem' : '15rem')};
    font-family: 'Shadows Into Light', cursive;
    font-size: 1.4rem;
`;
