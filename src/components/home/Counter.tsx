import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { calculateTimeLeft } from '../../utils/calculateTime';
import Image from 'next/image';
import noJandi from '@assets/잔디못심었다.svg';

function Counter() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
  }, [timeLeft]);

  return (
    <Styled.TimerWrapper>
      <Image src={noJandi} width="252"></Image>
      <p>잔디는 이제 그만!</p>
      <p>내 첫 머리를 심기까지</p>
      <Styled.WholeCounter>
        {String(timeLeft.days).padStart(2, '0')} : {String(timeLeft.hours).padStart(2, '0')} :
        {String(timeLeft.minutes).padStart(2, '0')} : {String(timeLeft.seconds).padStart(2, '0')}{' '}
      </Styled.WholeCounter>
    </Styled.TimerWrapper>
  );
}

export default Counter;

const Styled = {
  TimerWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p:nth-child(1) {
      margin-top: 52px;
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 26px;
    }

    p:nth-child(2) {
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      margin-top: 22px;
    }
  `,

  WholeCounter: styled.p`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 900;
    font-size: 50px;
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
