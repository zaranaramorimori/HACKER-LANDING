import styled from '@emotion/styled';
import Footer from '@src/components/common/Footer';
import type { NextPage } from 'next';

import Counter from '../src/components/home/Counter';
import Intro from '../src/components/home/Intro';
import Register from '../src/components/home/Register';

const Home: NextPage = () => {
  return (
    <Styled.Main>
      <Intro />
      <Counter />
      <Register />
      <Footer />
    </Styled.Main>
  );
};

export default Home;

const Styled = {
  Main: styled.main`
    display: flex;
    flex-direction: column;
  `,
};
