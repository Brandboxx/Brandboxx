import { useState, useEffect } from "react";
import { EditButton } from ".";
import {
  useGetResquest,
  usePostRequest,
} from "../../../api/useRequestProcessor";
import { InputContainer } from "../../../containers";
import { Container, Title, Profile } from "./styles";

const ProfileSetting = () => {
  const { data: profile } = useGetResquest(
    "/users/view-user-profile",
    "profile"
  );

  console.log(profile, "hello")

  const { mutate: editDp } = usePostRequest("/users/edit-dp", "editDp");

  const uploadFile = (e) => {
    const file = e.target.files[0];

    console.log(file);

    let data = new FormData();
    data.append("profile_image", file);

    editDp(data, {
      onSuccess: (res) => {
      console.log(res)
      },
    });
  };

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [DOB, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [postalAddress, setPostalAddress] = useState("");

  

  const handleFirstNameChange = (e) => {
    setFirstname(e.target.value);
  };

  return (
    <Container>
      <Title>Edit Profile</Title>
      <Profile>
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
          onChange={uploadFile}
        />
        <main>
          <img
            src={profile?.gottenUser?.profile_picture?.url}
            alt={""}
          />
        </main>
        <EditButton />
      </Profile>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "70%",
          marginTop: "40px",
        }}
      >
        <div style={{ width: "48%" }}>
          <InputContainer
            label={"First Name"}
            placeHolder={"Enter First Name"}
            value={profile?.gottenUser?.firstname}
            name={"firstname"}
            onChange={handleFirstNameChange}
          />
        </div>
        <div style={{ width: "48%" }}>
          <InputContainer
            width={"48%"}
            label={"Last Name"}
            placeHolder={"Enter Last Name"}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "70%",
          marginTop: "40px",
        }}
      >
        <div style={{ width: "48%" }}>
          <InputContainer
            label={"Date of Birth"}
            placeHolder={"Enter Date of Birth"}
          />
        </div>
        <div style={{ width: "48%" }}>
          <InputContainer
            width={"48%"}
            label={"Gender"}
            placeHolder={"Enter Gender"}
          />
        </div>
      </div>
      <div
        style={{
          width: "70%",
          marginTop: "40px",
        }}
      >
        <div style={{ width: "100%" }}>
          <InputContainer
            width={"48%"}
            label={"Postal Address"}
            placeHolder={"Enter Postal Address"}
          />
        </div>
      </div>
      <br />
      <br />
      <Title>Security</Title>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "70%",
          marginTop: "40px",
        }}
      >
        <div style={{ width: "48%" }}>
          <InputContainer
            label={"Email Address"}
            placeHolder={"Enter Email Address"}
          />
        </div>
        <div style={{ width: "48%" }}>
          <InputContainer
            width={"48%"}
            label={"Phone Number"}
            placeHolder={"Enter Phone Number"}
          />
        </div>
      </div>
      <br />
      <br />
      <h3 style={{ color: "rgba(20, 154, 155, 1)" }}>Pin & Password</h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "30px",
          width: "70%",
        }}
      >
        <img src={"/assets/svg/changePassword.svg"} alt={""} />
        <p style={{ marginLeft: "20px", cursor: "pointer" }}>Change Password</p>
        <div style={{ flex: 1 }} />
        <img
          src={"/assets/svg/chevronRight.svg"}
          alt={""}
          style={{ cursor: "pointer" }}
        />
      </div>
      <br />
      <br />
      <h4 style={{ color: "rgba(20, 154, 155, 1)" }}>
        Two-Factor Authentication
      </h4>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "30px",
          width: "70%",
        }}
      >
        <p style={{ fontSize: "14px" }}>
          Add an extra layer of security to your account using an authenticator
          app
        </p>
        <img src={"/assets/svg/toggle.svg"} alt={""} />
      </div>
      <br />
      <br />
      <Title>Next of Kin</Title>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "70%",
          marginTop: "40px",
        }}
      >
        <div style={{ width: "48%" }}>
          <InputContainer
            label={"Name of Next of Kin"}
            placeHolder={"Enter Name of Next of Kin"}
          />
        </div>
        <div style={{ width: "48%" }}>
          <InputContainer
            width={"48%"}
            label={"Phone Number"}
            placeHolder={"Enter Phone Number"}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "70%",
          marginTop: "40px",
        }}
      >
        <div style={{ width: "48%" }}>
          <InputContainer
            label={"Email Address"}
            placeHolder={"Enter Email Address"}
          />
        </div>
        <div style={{ width: "48%" }}>
          <InputContainer
            width={"48%"}
            label={"Gender"}
            placeHolder={"Enter Gender"}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "70%",
          marginTop: "40px",
        }}
      >
        <div style={{ width: "48%" }}>
          <InputContainer
            label={"Relationship"}
            placeHolder={"Enter Relationship"}
          />
        </div>
      </div>
    </Container>
  );
};

export { ProfileSetting };
