import styled from '@emotion/styled';
import useInput from '@src/hooks/useInput';
import { client } from '@src/lib/api/api';
import Image from 'next/image';
import React, { useState } from 'react';

import popupBg from '../../assets/blackBackground.png';
import buttonBg from '../../assets/hackerButton.svg';
import phoneBoy from '../../assets/phoneBoy.svg';
import UserInput from '../common/UserInput';
import { GenericResponse, RegisterResponse } from '../types';

function Register() {
  const [devCount, setDevCount] = useState(0);
  const [isRegistered, setIsRegistered] = useState(false);
  const [email, setEmail, onChangeEmail] = useInput<string>('');
  const [username, setUsername, onChangeUsername] = useInput<string>('');

  const loginData = { email, username };

  const handleRegister = async () => {
    if (!isRegistered) {
      const { data } = await client.post<GenericResponse<RegisterResponse>>('/event', loginData);

      console.log(data, email, username);
      // setDevCount(data.data.count);
      setDevCount(1);
      data.status == 200 && setIsRegistered(true);
    }
  };

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
        {isRegistered ? (
          <Styled.RegisterSuccess>
            <p>
              우와!
              <br />
              <span>{devCount}번째</span> 개발자님이에요.
              <br />
              감사해요!
            </p>
          </Styled.RegisterSuccess>
        ) : (
          <>
            <UserInput
              placeholder="출시 알림을 받을 이메일을 적어주세요"
              onChange={onChangeEmail}
            />
            <UserInput placeholder="Github username을 적어주세요" onChange={onChangeUsername} />
          </>
        )}
      </Styled.InputWrapper>
      <Styled.RegisterButton onClick={handleRegister}>
        {isRegistered ? '사전등록 완료!' : '사전등록 하기!'}
      </Styled.RegisterButton>
      <Styled.WithLabel>
        <span>{devCount}명</span>의 개발자가 함께하고 있어요.
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
    /* height: 100vh; */
    scroll-snap-align: center;
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

  RegisterSuccess: styled.div`
    width: 287px;
    background-image: url(${popupBg.src});
    background-size: 100% 100%;

    > p {
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 26px;
      color: white;
      text-align: center;
      padding: 23px 0;

      > * {
        color: #f0bb00;
      }
    }
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
