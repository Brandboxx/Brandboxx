import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  main {
    width: calc(40% - 100px);
    height: calc(100vh - 100px);
    background-image: url("/assets/svg/authBanner.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 50px 50px;
    position: relative;

    @media (max-width: 800px) {
      width: 100%;
      height: 200px;

      h1 {
        font-size: 28px !important;
        margin-top: 20px;
      }
      p {
        font-size: 14px !important;
      }
    }

    div {
      position: relative;
      top: 49%;
      transform: translate(0%, -50%);
    }

    h1 {
      font-size: 48px;
      color: #fff;
    }

    p {
      font-size: 16px;
      line-height: 25px;
      margin-top: 10px;
      color: #fff;
    }
  }

  aside {
    width: calc(60% - 300px);
    background: #fff;
    padding: 0px 150px;
    display: flex;
    align-items: center;

    @media (max-width: 1000px) {
      padding: 0px 30px;
      width: calc(100% - 60px);
      padding-bottom: 20px;
    }
  }
`;

export const LogoCont = styled.div`
  position: absolute;
  top: 30px!important;
  @media (max-width: 800px) {
    display: none;
  }
`;
