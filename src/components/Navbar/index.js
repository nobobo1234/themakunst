import React, { useState, useEffect } from 'react';
import optionsGenerator from './optionsGenerator';
import { useHistory, useLocation } from 'react-router-dom';

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
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        const ids = location.pathname.split('/').slice(2);
        if (ids.length === 3) {
            console.log(ids);
            setYear({ value: Number(ids[0]), label: `Leerjaar ${ids[0]}` });
            setPeriod({ value: Number(ids[1]), label: `Periode ${ids[1]}` });
            setExercise({ value: Number(ids[2]), label: `Opdracht ${ids[2]}` });
        }
    }, []);

    const resetInput = () => {
        setYear('');
        setPeriod('');
        setExercise('');
    };

    const onChange = label => value => {
        if (label === 'year') {
            setYear(value);

            if (exercise && period) {
                history.push(
                    `/exercise/${value.value}/${period.value}/${exercise.value}`
                );
            }
        } else if (label === 'period') {
            setPeriod(value);

            if (exercise && year) {
                history.push(
                    `/exercise/${year.value}/${value.value}/${exercise.value}`
                );
            }
        } else if (label === 'exercise') {
            setExercise(value);
            history.push(
                `/exercise/${year.value}/${period.value}/${value.value}`
            );
        }
    };

    return (
        <Wrapper>
            <Image src={logo} imgHeight="95%" />
            <GrowingDiv>
                <Link to="/" onClick={resetInput}>
                    Thema Kunst
                </Link>
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
                options={optionsGenerator('Opdracht', 10)}
                onChange={onChange('exercise')}
            />
        </Wrapper>
    );
};

export default Navbar;
