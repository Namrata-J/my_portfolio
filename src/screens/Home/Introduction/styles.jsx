import styled, { keyframes } from "styled-components";

export const ContainerIntro = styled.div`
  width: 100%;
`;

export const ContentIntro = styled.div`
  min-height: calc(100vh - 140px - 65px);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 960px) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
    padding-bottom: 40px;
  }

  @media screen and (max-height: 800px) {
    min-height: initial;
  }
`;

export const BoxImage = styled.div`
  min-width: 410px;
  min-height: 410px;
  border: 20px solid #324252;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  box-shadow: 0 0 8px #18232c;

  @media screen and (max-width: 1200px) {
    margin-left: 15px;
    min-width: 390px;
    min-height: 390px;
  }

  @media screen and (max-width: 960px) {
    margin-bottom: 20px;
    margin-left: 0;
    min-width: 360px;
    min-height: 360px;
  }

  @media screen and (max-width: 900px) {
    min-width: 330px;
    min-height: 330px;
  }
`;

export const ContentInfo = styled.div`
  max-width: 550px;

  @media screen and (max-width: 1200px) {
    max-width: none;
    width: 100%;
  }

  @media screen and (max-width: 960px) {
    max-width: 550px;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "Quicksand", sans-serif;
  font-size: 45px;
  letter-spacing: 1px;
  margin-right: 20px;
  color: #aec6df;
  margin-bottom: 10px;

  @media screen and (max-width: 580px) {
    font-size: 35px;
  }

  @media screen and (max-width: 460px) {
    font-size: 28px;
  }
`;

export const ContentDescriptionResum = styled.div`
  p {
    font-family: "Quicksand", sans-serif;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 1px;
    margin-bottom: 30px;
    color: #dfeefd;
  }

  a {
    background: #324252;
    color: #aec6df;
    text-decoration: none;
    padding: 17px 28px;
    font-family: "Quicksand", sans-serif;
    transition: 0.2s ease;

    :hover {
      color: #0c0c0c;
      background: #44586d;
    }
  }
`;

const animationIconDown = keyframes`
  from {
    transform: translateY(-15px);
  }

  to {
    transform: translateY(0px);
  }
`;

export const BoxIconDown = styled.div`
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${animationIconDown} 0.4s cubic-bezier(0.53, -0.03, 0.67, 1.06)
    infinite alternate;

  @media screen and (max-height: 800px) {
    display: none;
  }
`;
