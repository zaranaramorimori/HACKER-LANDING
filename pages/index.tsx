import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Counter from '../src/components/home/Counter';
import Intro from '../src/components/home/Intro';

const Home: NextPage = () => {
  return (
    <Styled.Main>
      <Intro />
      <Counter />
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
