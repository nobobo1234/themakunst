import React from 'react';

import Background from './Background';
import Wrapper from './Wrapper';
import { Title } from '../../components/Typography';
import Information from './Information';
import backgroundImg from '../../assets/backdrop.jpg';

const Home = () => {
    return (
        <Wrapper>
            <Background img={backgroundImg} />
            <Title color="white">Thema Kunst</Title>
            <Information>
                Lorem optio aspernatur fuga deserunt ipsum Minima inventore
                soluta quibusdam error velit Pariatur ad voluptatem alias beatae
                reprehenderit! Nihil enim nobis modi hic soluta. Minima omnis
                voluptatem illum exercitationem non. Voluptates consequuntur
                earum in cupiditate deserunt? Optio eveniet atque voluptas
                officia accusamus Dolor fugit consectetur quia doloribus
                sapiente Adipisci ullam.
            </Information>
        </Wrapper>
    );
};

export default Home;
