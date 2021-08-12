import styled from "styled-components/macro";

export const Container = styled.div``;

export const Title = styled.h1`
  color: rgba(50, 52, 56, 1);
  font-size: 24px;
  margin-top: 20px;
`;

export const Profile = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 2px solid rgba(20, 154, 155, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  main {
    width: 124px;
    height: 124px;
    border-radius: 100px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
