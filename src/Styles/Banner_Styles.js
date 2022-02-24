import styled from "styled-components";

export const Ban = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Parap = styled.div`
  width: 50%;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const Parap2 = styled.div`
  width: 50%;
  @media (max-width: 1200px) {
    width: 80%;
    padding-left: 0px;
  }
`;

export const Image = styled.img`
  width: 600px;
  padding-left: 140px;
  @media (max-width: 1200px) {
    width: 300px;
    padding-left: 40px;
  }
`;

export const Title = styled.h1`
  width: 480px;
  color: white;
  font-family: Raleway;
  font-size: 40px;
  text-align: left;
  padding-top: 100px;
  padding-bottom: 20px;
  padding-right: 140px;
  @media (max-width: 1200px) {
    width: 300px;
    font-size: 18px;
    opacity: 0.7;
    padding-right: 0px;
    padding-top: 50px;
  }
`;

export const Text = styled.p`
  width: 550px;
  font-family: "Open Sans", sans-serif;
  color: white;
  opacity: 0.8;
  padding-right: 65px;
  @media (max-width: 1200px) {
    width: 350px;
    font-size: 18px;
    width: 310px;
    font-size: 14px;
    padding-right: 0px;
  }
`;

export const Ancor = styled.a`
  padding-top: 15px;
  padding-left: 115px;
  font-family: "Open Sans", sans-serif;
  color: white;
  opacity: 0.8;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: hsl(176, 68%, 64%);
  }
  @media (max-width: 1200px) {
    font-size: 12px;
    padding-left: 0px;
    &:hover {
      text-decoration: underline;
      color: hsl(176, 68%, 64%);
    }
  }
`;
