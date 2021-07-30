import styled from "styled-components";

export const HeaderCont = styled.div`
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
