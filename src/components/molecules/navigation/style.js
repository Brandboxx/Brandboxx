import styled from "styled-components";

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
  padding: 20px;
  margin-left: 20px;
  cursor: pointer;

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
