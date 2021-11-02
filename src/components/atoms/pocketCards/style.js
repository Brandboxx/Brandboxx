import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  border-radius: 5px;
  padding: 20px;
  background-color: ${(props) => props.bg};
  margin-top: 30px;
  cursor: pointer;

  @media (max-width: 800px) {
    width: calc(100% - 40px);
  }

  header {
    display: flex;
    align-items: center;
    padding-bottom: 15px;
    h3 {
      font-size: 20px;
      margin-left: 15px;
      color: ${(props) => props.cl};
    }
  }

  p {
    color: rgba(50, 52, 56, 0.6);
    line-height: 25px;
    padding-bottom: 15px;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 14px;
      color: #111111;
      span {
        color: ${(props) => props.cl};
      }
    }
    h3 {
      color: ${(props) => props.cl};
      font-size: 18px;
    }
  }
`;
