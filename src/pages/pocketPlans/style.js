import styled from "styled-components/macro";

export const Wrapper = styled.section`
  padding: 30px 40px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 36px;
    color: #149a9b;
  }

  p {
    margin-top: 3px;
    color: #323438;
    font-size: 16px;
  }

  img {
    cursor: pointer;
  }
`;

export const Padding = styled.div`
  padding: 50px 0px;
  padding-bottom: 30px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
