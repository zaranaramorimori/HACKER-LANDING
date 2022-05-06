import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

import logo from '../../assets/logo.svg';

function Intro() {
  return (
    <Styled.IntroWrapper>
      <Styled.TitleLabel>
        콩 심은 데 콩 나고,
        <br />
        커밋한 데 머리 난다!
      </Styled.TitleLabel>
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

  TitleLabel: styled.p`
    text-align: center;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    margin-bottom: 68px;

    @media (max-width: 767px) {
      font-size: 18px;
    }
  `,

  StoreRound: styled.p`
    width: 327px;
    height: 50px;
    background-color: black;
    border-radius: 30px;
    color: white;
    text-align: center;
    padding: 13px 0;
    margin-top: 85px;

    @media (max-width: 767px) {
      width: 247px;
    }
  `,
};
