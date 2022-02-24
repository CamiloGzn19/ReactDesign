import styled from "styled-components";

export const Feat = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  margin-top: 20px;
  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    margin-top: 80px;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Cont = styled.div`
  width: 600px;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    width: 300px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 68%;
  height: 260px;
  text-align: center;
  color: white;
  @media (max-width: 1200px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
`;

export const Logo = styled.img`
  padding-bottom: 20px;
  margin-top: 0px;
  @media (max-width: 1200px) {
    padding-bottom: 30px;
    width: 63px;
  }
`;

export const Ltitle = styled.h3`
  padding-bottom: 20px;
  font-family: Raleway;
  @media (max-width: 1200px) {
    font-size: 16px;
    padding-bottom: 10px;
  }
`;

export const Text = styled.p`
  font-family: Raleway;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: white;
  @media (max-width: 1200px) {
    font-size: 13px;
    line-height: 19px;
  }
`;
