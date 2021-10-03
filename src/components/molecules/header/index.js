import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useGetResquest } from "../../../api/useRequestProcessor";
// import { ButtonContainer } from "../../../containers";
import { timeName } from "../../../utils/dateUtils";
import { Container, Profile, ProfileContainer, Hand } from "./style";

const Header = ({ setModal }) => {

  const { userDetails } = useSelector(state => state.auth);
  const { data: profile } = useGetResquest(
    "/users/view-user-profile",
    "profile"
  );

  return (
    <Container>
      <ProfileContainer>
        <Hand src={"/assets/svg/header/profile.svg"} alt={""} />
        <Profile>
          <img src={profile?.gottenUser?.profile_picture?.url} alt={""} style={{ objectFit: "cover" }} />
        </Profile>
        <main>
          <h3>{`Good ${timeName()} ${userDetails.firstname}`}</h3>
          <p>Here is an overview of your saving</p>
        </main>
      </ProfileContainer>

      <div style={{ flex: "1", cursor: "pointer" }} />
      <img
        src="/assets/svg/header/notification.svg"
        style={{ marginRight: "30px", cursor:"pointer" }}
        alt={""}
        onClick={() => toast("No notification yet!", { delay: 1000 })}
      />
      {/* <ButtonContainer onClick={() => setModal(true)} width={"196px"}>
        Fast Save
      </ButtonContainer> */}
    </Container>
  );
};

export { Header };
