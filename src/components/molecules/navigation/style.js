import styled from "styled-components/macro";

export const SideNavigation = styled.nav`
  width: 251px;
  height: 100vh;
  position: fixed;
  background-color: #149a9b;
  padding: 40px 0px;
`;

export const LogoContainer = styled.div`
  width: 60%;
  margin-left: 40px;
  position: relative;
  img {
    width: 100%;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 30px;
  margin-left: 20px;
  cursor: pointer;
  margin-top: 20px;
  height: 50px;

  &:nth-child(2) {
    margin-top: 50px;
  }

  &:last-of-type {
    position: absolute;
    bottom: 14%;
  }

  p {
    margin-left: 15px;
    font-size: 16px;
    color: #ffffff;
  }
`;

export const ActiveLink = styled.div`
  border-left: 3px solid #fff;
  display: flex;
  padding: 0px 30px;
  cursor: pointer;
  margin-top: 20px;
  height: 50px;

  &:nth-child(2) {
    margin-top: 50px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: #fff;
    border-radius: 5px;
    height: 100%;
    padding: 0px 0px;
    width: 150px;
  }

  p {
    margin-left: 15px;
    font-size: 16px;
    color: #149a9b;
  }
`;
