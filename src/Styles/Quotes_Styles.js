import styled from "styled-components";

export const Quo = styled.div`
  width: 80%;
  height: 160px;
  display: flex;
  flex-direction: row;
  margin-top: 350px;
  margin-bottom: 150px;
  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 470px;
  }
`;

export const Mark = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  z-index: 0;
  margin-left: 20px;
  margin-bottom: 30px;
  margin-top: 60px;
  @media (max-width: 1200px) {
    width: 25px;
    height: 25px;
    margin-left: 45px;
    margin-top: 10px;
  }
`;

export const Card = styled.div`
  width: 26%;
  height: 100%;
  background-color: hsl(219, 30%, 18%);
  color: white;
  border-radius: 5px;
  padding-top: 25px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 5px;
  margin-top: 90px;
  z-index: 1;
  @media (max-width: 1200px) {
    width: 70%;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 30px;
  }
`;

export const Person = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Text = styled.p`
  font-family: "Open Sans", sans-serif;
  opacity: 0.8;
  line-height: 20px;
  font-size: 14px;
  padding-top: 15px;
  @media (max-width: 1200px) {
    font-size: 11px;
  }
`;

export const Prof = styled.img`
  border-radius: 50px;
  margin-top: 20px;
  margin-right: 10px;
`;

export const PerInf = styled.div`
  margin-top: 20px;
  margin-right: 170px;
  @media (max-width: 1200px) {
    margin-right: 130px;
  }
`;

export const Name = styled.h4`
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
`;

export const Sub = styled.h6`
  font-family: "Open Sans", sans-serif;
  font-size: 8px;
`;
