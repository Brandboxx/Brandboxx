import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 40px;
`;

export const Hand = styled.img`
    position: absolute;
    right: -7%;
    top: 35%;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  main {
    margin-left: 20px;
    h3 {
      font-size: 24px;
      color: #323438;
    }
    p {
      font-size: 16px;
      color: #323438;
    }
  }
`;

export const Profile = styled.div`
  width: 98px;
  height: 98px;
  border-radius: 50px;
  border: 3px solid #149a9b;
  overflow: hidden;

  img {
    width: 100%;
  }
`;
