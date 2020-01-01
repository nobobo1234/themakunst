import React from 'react';
import { useParams } from 'react-router-dom';

import { Text } from '../../components/Typography';

const Exercise = () => {
    const { year, period, exercise } = useParams();

    return (
        <React.Fragment>
            <h1>
                /exercise/{year}/{period}/{exercise}/
            </h1>
            <Text color="black">
                Leerjaar {year}
                <br />
                Periode {period}
                <br />
                Opdracht {exercise}
                <br />
            </Text>
        </React.Fragment>
    );
};

export default Exercise;
