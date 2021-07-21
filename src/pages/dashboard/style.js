import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  cursor: pointer;

  main {
    display: flex;
    align-items: center;

    aside {
      margin-left: 20px;

      p {
        font-size: 16px;
        color: #323438;
      }

      h3 {
        font-size: 36px;
        color: #149a9b;
      }
    }
  }
`;

export const Info = styled.section`
  padding: 40px;
`;

export const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 45%;
  background: #149b9b1f;
`;

export const LinkInfo = styled.p`
  color: #149a9b;
  font-size: 16px;
  text-decoration: underline;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 60px;
  flex-wrap: wrap;
`;

export const CardInfo = styled.div`
  width: 60%;
  margin-top: 80px;

  h3 {
    font-size: 18px;
    padding-bottom: 30px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #149b9b27;
    padding: 30px;

    main {
      display: flex;
      align-items: center;
      p {
        color: #323438;
        margin-left: 20px;
      }
    }
    p {
      color: #323438;
    }
  }
`;
