import styled from "styled-components";

export const Nav = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  @media (max-width: 1200px) {
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: row;
  }
`;

export const Logo = styled.img`
  width: 176px;
  height: 52px;
  justify-content: flex-start;
  padding-top: 70px;
  @media (max-width: 1200px) {
    width: 80px;
    height: 25px;
    justify-content: flex-start;
    padding-top: 20px;
    padding-right: 50px;
    padding-left: 20px;
  }
`;

export const Group = styled.div`
  list-style: none;
  color: white;
  font-family: Raleway;
  padding-top: 70px;
  padding-left: 450px;
  @media (max-width: 1200px) {
    width: 290px;
    padding-top: 20px;
    padding-left: 10px;
  } 
`;

export const List = styled.li`
  display: inline;
  list-style: none;
  color: white;
  font-family: Raleway;
  padding-left: 55px;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 1200px) {
    display: inline;
    list-style: none;
    color: white;
    font-family: Raleway;
    font-size: 13px;
    padding-left: 20px;
    &:hover {
    text-decoration: underline;
  }
  }
`;

export const Ancor = styled.a`
  color:white;
  text-decoration:none;
`;