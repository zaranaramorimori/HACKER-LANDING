import styled from '@emotion/styled';
import Footer from '@src/components/common/Footer';
import type { NextPage } from 'next';

import Counter from '../src/components/home/Counter';
import Intro from '../src/components/home/Intro';
import Register from '../src/components/home/Register';

const Home: NextPage = () => {
  return (
    <Styled.Main>
      <Styled.CenterAligner>
        <Intro />
      </Styled.CenterAligner>
      <Styled.CenterAligner>
        <Counter />
      </Styled.CenterAligner>
      <Styled.CenterAligner>
        <Register />
      </Styled.CenterAligner>
      <Footer />
    </Styled.Main>
  );
};

export default Home;

const Styled = {
  Main: styled.main`
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
  `,

  CenterAligner: styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
