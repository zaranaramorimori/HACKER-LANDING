import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Counter from '../src/components/home/Counter';
import Image from 'next/image';
import boyImage from '../src/assets/청년.svg';

const Home: NextPage = () => {
  return (
    <>
      <Styled.TimerBoyWrapper>
        <Styled.TimerWrapper>
          <p>(대충 청년 영광의 첫 머리)까지</p>
          <Counter />
        </Styled.TimerWrapper>
        <Image src={boyImage} width="120px"></Image>
      </Styled.TimerBoyWrapper>
      <p>
        민머리 👩🏻‍🦲 대머리 🧑🏻‍🦲 맨들맨들 빡빡이 👨🏻‍🦲 민머리 👩🏻‍🦲 대머리 🧑🏻‍🦲 맨들맨들 빡빡이 👨🏻‍🦲 민머리 👩🏻‍🦲
        대머리 🧑🏻‍🦲 맨들맨들 빡빡이 👨🏻‍🦲 민머리 👩🏻‍🦲 대머리 🧑🏻‍🦲 맨들맨들 빡빡이 👨🏻‍🦲 민머리 👩🏻‍🦲 대머리 🧑🏻‍🦲
        맨들맨들 빡빡이 👨🏻‍🦲 민머리 👩🏻‍🦲 대머리 🧑🏻‍🦲 맨들맨들 빡빡이 👨🏻‍🦲 민머리 👩🏻‍🦲 대머리 🧑🏻‍🦲 맨들맨들
        빡빡이 👨🏻‍🦲
      </p>
    </>
  );
};

export default Home;

const Styled = {
  TimerBoyWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 10px;
  `,

  TimerWrapper: styled.div`
    > p {
      margin-bottom: 7px;
    }
  `,
};
