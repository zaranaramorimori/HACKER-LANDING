import styled from '@emotion/styled';
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
