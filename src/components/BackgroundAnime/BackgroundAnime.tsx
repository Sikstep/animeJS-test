import React from 'react';
import styled, {keyframes} from 'styled-components';
import blueEllipse from '../../items/ellipse1.webp';
import greenEllipse from '../../items/ellipse2.webp';


export const BackgroundAnime = () => {
    return (
        <BackgroundContainer>
            <Section_bg>
                <Selection_bg_item>
                    <Bg_item rightDirection={true} ellipse={blueEllipse}/>
                </Selection_bg_item>
                <Selection_bg_item>
                    <Bg_item ellipse={greenEllipse}/>
                </Selection_bg_item>
            </Section_bg>
            <StyledH2>Здесь может быть ваша реклама</StyledH2>
        </BackgroundContainer>
    )

};


const Section_bg = styled.div`
  backface-visibility: hidden;
  height: 0px;
  transform-origin: center center;
  width: 120%;
  z-index: 1;
  overflow: visible;
  position: absolute;
  background-color: #f2f8fe;

  & > h2 {
    justify-content: center;
  }
`

const Selection_bg_item = styled.div`
  left: 50%;
  position: absolute;
  top: 0px;
  transform: translateX(-50%) translateY(-50%);
  width: 100%;
  margin: 0px;
  padding: 0px;
  border: 0px;
  font: inherit;
  vertical-align: baseline;

  &:nth-child(1) {
    width: 100%;
    right: -106%;
    left: auto;
    transform: translateX(-38%) translateY(-58%);
    @media (min-width: 768px) {
      width: 58%;
      right: -20%;
    }
  }

    &:nth-child(2) {
      width: 100%;
      left: -22px;
      transform: translateX(-38%) translateY(-45%);
      @media (min-width: 768px) {
        left: 0;
      }
    }
`

const bgAnimation = keyframes`
  0% {
    transform: rotate(0deg) translate3d(0px, 0px, 0px);
  }
  20% {
    transform: rotate(0deg) translate3d(-10%, 50px, 0px);
  }
  40% {
    transform: rotate(0deg) translate3d(-40%, 50px, 0px);
  }
  60% {
    transform: rotate(0deg) translate3d(-80%, 50px, 0px);
  }
  80% {
    transform: rotate(0deg) translate3d(-40%, 50px, 0px);
  }
  100% {
    transform: rotate(0) translate3d(0px, 0px, 0px);
  }
`;
const bgAnimation2 = keyframes`
  0% {
    transform: rotate(0deg) translate3d(0px, 0px, 0px);
  }
  20% {
    transform: rotate(0deg) translate3d(10%, 50px, 0px);
  }
  40% {
    transform: rotate(0deg) translate3d(40%, 50px, 0px);
  }
  60% {
    transform: rotate(0deg) translate3d(80%, 50px, 0px);
  }
  80% {
    transform: rotate(0deg) translate3d(40%, 50px, 0px);
  }
  100% {
    transform: rotate(0) translate3d(0px, 0px, 0px);
  }
`;


type Bg_itemType = {
    rightDirection?: boolean
    ellipse?: string
}

const Bg_item = styled.div<Bg_itemType>`
  display: block;
  height: 0px;
  padding-bottom: 100%;
  background-size: cover;
  overflow: visible;
  transform-origin: center center;
  width: 100%;
  margin-left: -10%;
  backface-visibility: hidden;
  background: ${props => `url(${props.ellipse}) center / cover no-repeat`};
  animation: 10s linear 0s infinite normal none running ${props => props.rightDirection ? bgAnimation : bgAnimation2};
`

export const StyledH2 = styled.h2`
  max-width: 100%;
  font: 54px / 1.1 "Manrope", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  color: #1D1E22;
  position: relative;
  z-index: 5;
  text-align: center;
  margin-bottom: 30px;
`

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`