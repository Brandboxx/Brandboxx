import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  position: absolute;
  height: 80vh;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 2;
  @media (max-width: 800px) {
    height: 100vh;
  }
`;

export const Tint = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #000;
  opacity: 0.6;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 100px;

  @media (max-width: 800px) {
    padding: 30px 30px;
  }

  img {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 50px 200px;

  @media (max-width: 800px) {
    padding: 30px 30px;
  }

  main {
    width: 30%;
    h1 {
      font-size: 36px;
      color: #149a9b;
      line-height: 40px;
    }

    p {
      font-size: 16px;
      color: rgba(50, 52, 56, 0.6);
      margin-top: 20px;
      line-height: 25px;
    }

    @media (max-width: 800px) {
      width: 100%;

      h1 {
        font-size: 28px;
      }
      p {
        font-size: 14px;
      }
    }
  }
  div {
    width: 50%;
    p {
      margin-top: 30px;
      color: rgba(50, 52, 56, 0.6);

      span {
        cursor: pointer;
        color: #149a9b;
      }
    }
    @media (max-width: 800px) {
      width: 100%;
      margin-top: 30px;
    }
  }
`;
