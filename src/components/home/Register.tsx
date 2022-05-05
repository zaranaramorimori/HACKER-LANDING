import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

import buttonBg from '../../assets/hackerButton.svg';
import phoneBoy from '../../assets/phoneBoy.svg';
import UserInput from '../common/UserInput';

function Register() {
  return (
    <Styled.Main>
      <Image src={phoneBoy} alt="해커 앱을 보여주는 청년" width="243px"></Image>
      <Styled.InfoLabelWrapper>
        <p>
          <span>사전 등록</span> 하고
        </p>
        <p>가장 빠르게 머리를 길러 봐요</p>
      </Styled.InfoLabelWrapper>
      <Styled.InputWrapper>
        <UserInput placeholder="출시 알림을 받을 이메일을 적어주세요" />
        <UserInput placeholder="Github username을 적어주세요" />
      </Styled.InputWrapper>
      <Styled.RegisterButton>사전등록 하기!</Styled.RegisterButton>
      <Styled.WithLabel>
        <span>22명</span>의 개발자가 함께하고 있어요.
      </Styled.WithLabel>
    </Styled.Main>
  );
}

export default Register;

const Styled = {
  Main: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  `,

  InfoLabelWrapper: styled.div`
    margin-top: 34px;
    text-align: center;

    p:nth-child(1) {
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;

      > * {
        color: #f0bb00;
      }
    }

    p:nth-child(2) {
      margin-top: 24px;
      margin-bottom: 70px;
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 700;
      font-size: 35px;
    }
  `,

  InputWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 121px;
  `,

  RegisterButton: styled.button`
    margin-top: 37px;
    width: 287px;
    height: 60px;
    background: url(${buttonBg.src});
    color: white;
  `,

  WithLabel: styled.p`
    margin-top: 15px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 350;
    font-size: 13px;
    line-height: 200%;

    > * {
      color: #f0bb00;
    }
  `,
};
