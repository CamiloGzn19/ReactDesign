import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 950px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    height: 650px;
  }
`;

export const Img = styled.img`
  padding-top: 30px;
  @media (max-width: 1200px) {
    padding-top: 30px;
    width: 300px;
  }
`;

export const Main = styled.h1`
  width: 800px;
  font-family: Raleway;
  font-size: 40px;
  text-align: center;
  padding: 50px;
  color: white;
  padding-top: 30px;
  @media (max-width: 1200px) {
    width: 270px;
    font-size: 20px;
    line-height: 35px;
    padding-bottom: 20px;
  }
`;

export const Text = styled.p`
  width: 600px;
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  text-align: center;
  line-height: 30px;
  padding-bottom: 30px;
  color: white;
  @media (max-width: 1200px) {
    width: 320px;
    font-size: 15px;
    line-height: 20px;
    padding-bottom: 35px;
  }
`;

export const BtnP = styled.button`
  width: 290px;
  height: 50px;
  font-family: Raleway;
  font-weight: 700;
  background-color: #3fafcf;
  color: white;
  border: 0;
  border-radius: 50px;
  @media (max-width: 1200px) {
    width: 260px;
  }
`;
