import React from 'react';
import styled from '@emotion/styled';
import logo from '../../assets/logo.svg';
import Image from 'next/image';

function Intro() {
  return (
    <Styled.IntroWrapper>
      <Styled.TitleLabel>
        콩 심은 데 콩 나고,
        <br />
        커밋한 데 머리 난다!
      </Styled.TitleLabel>
      <Image src={logo} width="253px"></Image>
      <Styled.StoreRound>곧 스토어에서 만나요!</Styled.StoreRound>
    </Styled.IntroWrapper>
  );
}

export default Intro;

const Styled = {
  IntroWrapper: styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  TitleLabel: styled.p`
    text-align: center;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    margin-bottom: 68px;
  `,

  StoreRound: styled.p`
    width: 327px;
    background-color: black;
    border-radius: 30px;
    color: white;
    text-align: center;
    padding: 13px 0;
    margin-top: 85px;
  `,
};
