import { useSelector } from "react-redux";
import { ButtonContainer } from "../../../containers";
import { timeName } from "../../../utils/dateUtils";
import { Container, Profile, ProfileContainer, Hand } from "./style";

const Header = ({ setModal }) => {
  const {userDetails} = useSelector(state=>state.auth);
  return (
    <Container>
      <ProfileContainer>
        <Hand src={"/assets/svg/header/profile.svg"} alt={""} />
        <Profile>
          {/* <img src={"/assets/svg/header/profile.png"} alt={""} /> */}
        </Profile>
        <main>
          <h3>{`Good ${timeName()} ${userDetails.firstname}`}</h3>
          <p>Here is an overview of your saving</p>
        </main>
      </ProfileContainer>

      <div style={{ flex: "1", cursor: "pointer" }} />
      <img
        src="/assets/svg/header/notification.svg"
        style={{ marginRight: "30px" }}
        alt={""}
      />
      {/* <ButtonContainer onClick={() => setModal(true)} width={"196px"}>
        Fast Save
      </ButtonContainer> */}
    </Container>
  );
};

export { Header };
