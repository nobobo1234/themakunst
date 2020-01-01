import React, { useState } from 'react';
import optionsGenerator from './optionsGenerator';

import Select from '../Select';
import Link from './titleLink';
import Wrapper from './Wrapper';
import Image from './Image';
import GrowingDiv from './GrowingDiv';
import logo from '../../assets/themakunstwit.png';
import { ReactComponent as RightArrow } from '../../assets/right_arrow.svg';

const Navbar = () => {
    const [year, setYear] = useState();
    const [period, setPeriod] = useState();
    const [exercise, setExercise] = useState();

    const onChange = label => value => {
        if (label === 'year') {
            setYear(value);
        } else if (label === 'period') {
            setPeriod(value);
        } else if (label === 'exercise') {
            setExercise(value);
        }
    };

    return (
        <Wrapper>
            <Image src={logo} imgHeight="95%" />
            <GrowingDiv>
                <Link to="/">Thema Kunst</Link>
            </GrowingDiv>
            <Select
                autoFocus
                placeholder="Leerjaar"
                options={optionsGenerator('Leerjaar', 3)}
                value={year}
                onChange={onChange('year')}
            />
            <RightArrow fill="#fff" />
            <Select
                isDisabled={!year}
                placeholder="Periode"
                options={optionsGenerator('Periode', 4)}
                value={period}
                onChange={onChange('period')}
            />
            <RightArrow fill="#fff" />
            <Select
                isLong
                isDisabled={!period}
                placeholder="Opdracht"
                value={exercise}
                onChange={onChange('exercise')}
            />
        </Wrapper>
    );
};

export default Navbar;
