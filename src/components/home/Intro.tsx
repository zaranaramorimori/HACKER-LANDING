import styled from '@emotion/styled';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';

import logo from '../../assets/logo.svg';

function Intro() {
  return (
    <Styled.IntroWrapper>
      <Styled.TitleWrapper>
        <Fade top>
          <Styled.TitleLabel>콩 심은 데 콩 나고,</Styled.TitleLabel>
        </Fade>
        <RubberBand delay={700}>
          <Styled.TitleLabel>커밋한 데 머리 난다!</Styled.TitleLabel>
        </RubberBand>
      </Styled.TitleWrapper>
      <Image src={logo} alt="HACKER" width="250vw"></Image>
      <Styled.StoreRound>곧 스토어에서 만나요!</Styled.StoreRound>
    </Styled.IntroWrapper>
  );
}

export default Intro;

const Styled = {
  IntroWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-snap-align: center;
  `,

  TitleWrapper: styled.div`
    margin-bottom: 68px;
  `,

  TitleLabel: styled.p`
    text-align: center;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;

    @media (max-width: 767px) {
      font-size: 18px;
    }
  `,

  StoreRound: styled.button`
    width: 327px;
    height: 50px;
    background-color: black;
    border-radius: 30px;
    color: white;
    text-align: center;
    margin-top: 85px;

    @media (max-width: 767px) {
      width: 247px;
    }
  `,
};
