import noJandi from '@assets/noJandi.svg';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';

import { calculateTimeLeft } from '../../utils/calculateTime';

function Counter() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
  }, [timeLeft]);

  return (
    <Styled.TimerWrapper>
      <Image src={noJandi} alt="아 오늘 잔디 못 심었다,,," width="252px"></Image>
      <Fade top>
        <p>
          잔디는 이제 <span>그만!</span>
        </p>
      </Fade>
      <Fade top delay={500}>
        <p>내 첫 머리를 심기까지</p>
      </Fade>
      <Fade delay={1000}>
        <Styled.WholeCounter>
          {String(timeLeft.days).padStart(2, '0')} : {String(timeLeft.hours).padStart(2, '0')} :{' '}
          {String(timeLeft.minutes).padStart(2, '0')} : {String(timeLeft.seconds).padStart(2, '0')}{' '}
        </Styled.WholeCounter>
      </Fade>
    </Styled.TimerWrapper>
  );
}

export default Counter;

const Styled = {
  TimerWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-snap-align: center;

    p:nth-child(2) {
      margin-top: 52px;
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 26px;

      > * {
        color: #f0bb00;
      }

      @media (max-width: 767px) {
        font-size: 16px;
      }
    }

    p:nth-child(3) {
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      margin-top: 22px;

      @media (max-width: 767px) {
        font-size: 25px;
      }
    }
  `,

  WholeCounter: styled.p`
    font-family: 'Noto Sans KR';
    font-weight: 900;
    font-size: 50px;
    margin-top: 98px;

    @media (max-width: 767px) {
      font-size: 30px;
    }
  `,
};
