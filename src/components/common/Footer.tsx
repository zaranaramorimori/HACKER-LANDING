import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import bgImg from '../../assets/footerBg.svg';
import boysImage from '../../assets/footerHacker.svg';
import instagramIcon from '../../assets/instagramIcon.svg';

function Footer() {
  const router = useRouter();
  const handleInstagram = () => {
    router.push('https://www.instagram.com/haircommit/');
  };

  return (
    <Styled.MainWrapper>
      <Styled.Main>
        <Styled.TopWrapper>
          <Styled.InstagramWrapper>
            <Styled.TitleLabel>팀 헤커</Styled.TitleLabel>
            <Styled.InstagramButton onClick={handleInstagram} />
          </Styled.InstagramWrapper>
          <Styled.PolicyWrapper>
            <Styled.TitleLabel>정책</Styled.TitleLabel>
            <Styled.PolicyLabel href="https://www.instagram.com/haircommit/">
              이용약관
            </Styled.PolicyLabel>
            <Styled.PolicyLabel href="https://www.instagram.com/haircommit/">
              개인정보 처리방침
            </Styled.PolicyLabel>
          </Styled.PolicyWrapper>
        </Styled.TopWrapper>
        <Styled.BottomWrapper>
          <Styled.CopyRightLabel>© TeamZZONG</Styled.CopyRightLabel>
          <Image src={boysImage} alt="헤커 청년들" width="195px"></Image>
        </Styled.BottomWrapper>
      </Styled.Main>
    </Styled.MainWrapper>
  );
}

export default Footer;

const Styled = {
  MainWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  Main: styled.div`
    width: 600px;
    height: 467px;
    background-image: url(${bgImg.src});
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 188px;
    scroll-snap-align: center;
    padding: 0;

    @media (max-width: 767px) {
      width: 100%;
    }
  `,

  TopWrapper: styled.div`
    margin-top: 134px;
    display: flex;
  `,

  InstagramWrapper: styled.div`
    margin-left: 70px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 767px) {
      margin-left: 43px;
    }
  `,

  PolicyWrapper: styled.div`
    margin-left: 150px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 767px) {
      margin-left: 115px;
    }
  `,

  TitleLabel: styled.div`
    font-family: 'Noto Sans KR';
    font-weight: 600;
    font-size: 20px;
    color: white;
    margin-bottom: 25px;

    @media (max-width: 767px) {
      font-size: 15px;
    }
  `,

  InstagramButton: styled.button`
    width: 55px;
    height: 55px;
    background-image: url(${instagramIcon.src});
    background-size: cover;
  `,

  BottomWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 70px;

    @media (max-width: 767px) {
      padding-left: 43px;
    }
  `,

  PolicyLabel: styled.a`
    font-family: 'Noto Sans KR';
    font-weight: 400;
    font-size: 15px;
    color: white;
    margin-bottom: 15px;

    @media (max-width: 767px) {
      font-size: 13px;
    }
  `,

  CopyRightLabel: styled.p`
    font-family: 'Noto Sans KR';
    font-weight: 500;
    font-size: 13px;
    color: #f0bb00;
    margin-top: 60px;

    @media (max-width: 767px) {
      font-size: 10px;
      margin-top: 40px;
    }
  `,
};
