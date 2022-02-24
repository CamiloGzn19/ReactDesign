import styled from "styled-components";

export const Foot = styled.div`
  position: absolute;
  width: 100%;
  height: 460px;
  margin-top: 295px;
  background-color: hsl(216, 53%, 9%);
  display: flex;
  z-index: 0;
  @media (max-width: 1200px) {
    margin-top: 680px;
    height: 960px;
    width: 100%;
  }
`;

export const Cont = styled.div`
  width: 100%;
  padding-top: 150px;
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  padding-left: 40px;
  @media (max-width: 1200px) {
    /* width: 375px; */
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    padding-left: 0px;
  }
`;

export const Local = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1200px) {
    width: 250px;
    display: flex;
    flex-direction: row;
    font-size: 12px;
    width: 330px;
    margin-top: 20px;
    padding-right: 40px;
    padding-bottom: 20px;
  }
`;

export const Logo = styled.img`
  position: absolute;
  width: 100px;
  height: 30px;
  margin-top: 185px;
  margin-left: 90px;
  @media (max-width: 1200px) {
    width: 160px;
    height: 45px;
    margin-top: 240px;
    margin-left: 40px;
  }
`;

export const Text = styled.p`
  width: 320px;
  color: white;
  font-family: Raleway;
  opacity: 0.7;
  line-height: 23px;
  @media (max-width: 1200px) {
    line-height: 18px;
    width: 100%;
    font-size: 14px;
  }
`;

export const Minilogo2 = styled.img`
  width: 15px;
  height: 20px;
  padding-right: 30px;
  @media (max-width: 1200px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Minilogo = styled.img`
  width: 20px;
  padding-top: 3px;
  padding-right: 30px;
  @media (max-width: 1200px) {
    width: 15px;
    height: 13px;
    padding-top: 3px;
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    width: 290px;
    margin-top: 20px;
    padding-right: 80px;
    padding-bottom: 0px;
  }
`;

export const Data = styled.p`
  color: white;
  font-family: "Open Sans", sans-serif;
  opacity: 0.7;
  @media (max-width: 1200px) {
    padding-right: 110px;
  }
`;

export const List = styled.li`
  color: white;
  font-family: "Open Sans", sans-serif;
  list-style: none;
  padding-bottom: 15px;
  opacity: 0.7;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    width: 120px;
    padding-right: 170px;
  }
`;

export const Icons = styled.div`
  padding-right: 50px;
  @media (max-width: 1200px) {
    padding-top: 50px;
  }
`;

export const Media = styled.div`
  width: 180px;
  padding-right: 60px;
  @media (max-width: 1200px) {
    padding-top: 40px;
    padding-left: 35px;
    padding-right: 0px;
    padding-bottom: 20px;
  }
`;
