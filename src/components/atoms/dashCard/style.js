import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: ${(props) => props.bg};
  width: 27.33%;
  height: 151px;
  padding: 0px 20px;

  aside {
    margin-left: 20px;
    p {
      color: #149a9b;
      font-size: 16px;
      color: ${(props) => props.cl};
    }

    h3 {
      font-size: 24px;
      color: #149a9b;
      color: ${(props) => props.cl};
    }
  }

  @media (max-width: 1000px) {
    width: 48%;
  }

  @media (max-width: 700px) {
      width: 100%;
  }
`;
