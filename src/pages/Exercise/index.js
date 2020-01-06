import React from 'react';
import { useParams } from 'react-router-dom';

import { Text, SmallTitle } from '../../components/Typography';
import Header from './Header';

const Exercise = () => {
    const { year, period, exercise } = useParams();

    return (
        <React.Fragment>
            <Header>
                <SmallTitle>Opdracht {exercise}</SmallTitle>
            </Header>
        </React.Fragment>
    );
};

export default Exercise;
