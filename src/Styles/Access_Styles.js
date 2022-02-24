import styled from "styled-components";

export const Acc = styled.div`
  position: absolute;
  width: 60%;
  height: 220px;
  background-color: hsl(217, 28%, 15%);
  box-shadow: 5px 6px 5px 1px rgba(5, 5, 5, 0.6);
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: center;
  border-radius: 10px;
  margin-left: 250px;
  margin-top: 150px;
  z-index: 1;
  @media (max-width: 1200px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 70%;
    height: 300px;
    margin-top: 500px;
    margin-left: 27px;
    box-shadow: none;
  }
`;

export const Title = styled.h1`
  color: white;
  padding-bottom: 15px;
  font-family: Raleway;
  font-weight: 700;
  @media (max-width: 1200px) {
    padding-top: 20px;
    font-size: 16px;
  }
`;

export const Text = styled.p`
  font-family: Raleway;
  line-height: 23px;
  color: white;
  padding-bottom: 40px;
  text-align: center;
  @media (max-width: 1200px) {
    padding-top: 20px;
    font-size: 13px;
    line-height: 18px;
  }
`;

export const Ipt = styled.input`
  font-family: "Open Sans", sans-serif;
  width: 510px;
  height: 50px;
  border-radius: 50px;
  border: 0;
  padding-left: 35px;
  @media (max-width: 1200px) {
    width: 230px;
    height: 50px;
    margin-bottom: 20px;
  }
`;

export const BtnS = styled.button`
  font-family: Raleway;
  font-weight: 700;
  color: white;
  background-color: hsl(176, 68%, 64%);
  border: 0;
  width: 190px;
  height: 50px;
  border-radius: 50px;
  margin-left: 30px;
  cursor: pointer;
  @media (max-width: 1200px) {
    width: 265px;
    height: 50px;
    margin-left: 0px;
    margin-bottom: 20px;
  }
`;

export const Adv = styled.p`
  color: hsl(0, 100%, 63%);
  font-family: "Open Sans", sans-serif;
  opacity: 1;
  padding-top: 8px;
  padding-right: 455px;
  font-size: 15px;
`;
