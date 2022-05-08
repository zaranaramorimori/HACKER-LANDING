import styled from '@emotion/styled';
import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  [key: string]: any;
}

function UserInput({ ...props }: InputProps) {
  return <Styled.Input {...props} />;
}

export default UserInput;

const Styled = {
  Input: styled.input`
    width: 287px;
    height: 53px;
    outline: 0;
    border: 3px solid #000000;
    border-radius: 20px;
    padding-left: 15px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    &::placeholder {
      color: #9f9f9f;
    }
  `,
};
