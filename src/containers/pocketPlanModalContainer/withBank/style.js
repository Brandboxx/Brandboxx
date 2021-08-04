import styled from "styled-components/macro";

export const Container = styled.div`
  h1 {
    font-size: 34px;
    color: rgba(0, 0, 0, 1);
  }
`;

export const BankTag = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  width: 60%;
`;

export const Info = styled.div`
  margin-left: 10px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }
`;

export const InfoHeader = styled.p`
  font-size: 16px;
  color: #323438;
`;

export const InfoNumber = styled.p`
  font-size: 13px;
  color: rgba(50, 52, 56, 0.8);
`;

export const BankName = styled.p`
  font-size: 12px;
  color: rgba(50, 52, 56, 0.4);
`;

export const InputContainer = styled.div`
  display: flex;
  width: 60%;
  margin-top: 40px;
  position: relative;

  input {
    width: 60%;
    height: 50px;
    padding: 0px 10px;
    border: 1px solid rgba(50, 52, 56, 0.1);
    outline: none;
    color: rgba(50, 52, 56, 0.8);
  }

  button {
    z-index: 1;
    position: absolute;
    right: 0;
  }
`;

export const Information = styled.p`
  color: rgba(20, 154, 155, 1);
  margin-top: 20px;
  font-size: 16px;
  line-height: 25px;
`;

export const BtnContainer = styled.div`
  margin-top: 160px;
`;

export const UploadContainer = styled.div`
  width: 328px;
  height: 383px;
  border: 1px dashed rgba(50, 52, 56, 0.2);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 20px auto;

  form {
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    input {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Upload = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
`;

export const UploadHeader = styled.p`
  color: rgba(20, 154, 155, 1);
  font-size: 14px;
  margin-top: 20px;
`;

export const UploadSubHeader = styled.p`
  color: rgba(50, 52, 56, 0.4);
  font-size: 12px;
  margin-top: 5px;
`;

export const Button = styled.button`
  color: #149a9b;
  border: none;
  width: 134px;
  height: 45px;
  border-radius: 8px;
  background-color: rgba(20, 154, 155, 0.1);
  margin-top: 30px;
`;
