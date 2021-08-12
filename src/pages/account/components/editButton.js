import styled from "styled-components/macro";

const EditButton = () => {
  return (
    <Container>
      <main>
        <img src={"/assets/svg/edit.svg"} alt={""} />
      </main>
    </Container>
  );
};

const Container = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(20, 154, 155, 1);
    width: 30px;
    height: 30px;
    border-radius: 50%;

    img {
      width: 20px
    }
  }
`;

export { EditButton };
