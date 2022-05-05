import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { calculateTimeLeft } from '../../utils/calculateTime';

function Counter() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
  }, [timeLeft]);

  return (
    <Styled.CounterWrapper>
      <Styled.CounterItem>
        <Styled.CounterValue>{String(timeLeft.days).padStart(2, '0')}</Styled.CounterValue>
        <Styled.CounterLabel>일</Styled.CounterLabel>
      </Styled.CounterItem>

      <Styled.CounterItem>
        <Styled.CounterValue>{String(timeLeft.hours).padStart(2, '0')}</Styled.CounterValue>
        <Styled.CounterLabel>시</Styled.CounterLabel>
      </Styled.CounterItem>

      <Styled.CounterItem>
        <Styled.CounterValue>{String(timeLeft.minutes).padStart(2, '0')}</Styled.CounterValue>
        <Styled.CounterLabel>분</Styled.CounterLabel>
      </Styled.CounterItem>

      <Styled.CounterItem>
        <Styled.CounterValue>{String(timeLeft.seconds).padStart(2, '0')}</Styled.CounterValue>
        <Styled.CounterLabel>초</Styled.CounterLabel>
      </Styled.CounterItem>
    </Styled.CounterWrapper>
  );
}

export default Counter;

const Styled = {
  CounterWrapper: styled.div`
    width: 250px;
    display: flex;
    justify-content: space-between;
  `,

  CounterItem: styled.div`
    width: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px black solid;
    background: white;
  `,

  CounterValue: styled.span`
    padding: 8px 8px;
    font-size: 20px;
    text-align: center;
    color: black;
    width: 100%;
  `,

  CounterLabel: styled.span`
    width: 100%;
    font-size: 10px;
    text-align: center;
    margin-top: 2px;
    padding: 2px 0;
    background-color: black;
    color: white;
  `,
};
