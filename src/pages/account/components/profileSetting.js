import { useEffect } from "react";
import { useFormik } from "formik";
import { EditButton } from ".";
import {
  useGetResquest,
  usePostRequest,
} from "../../../api/useRequestProcessor";

import {profileValidator} from "./profileValidation";
import { InputContainer } from "../../../containers";
import { Container, Title, Profile } from "./styles";

const ProfileSetting = () => {
  const { data: profile } = useGetResquest(
    "/users/view-user-profile",
    "profile"
  );

  console.log(profile, "hello");

  const { mutate: editDp } = usePostRequest("/users/edit-dp", "editDp");

  const uploadFile = (e) => {
    const file = e.target.files[0];

    console.log(file);

    let data = new FormData();
    data.append("profile_image", file);

    editDp(data, {
      onSuccess: (res) => {
        console.log(res);
      },
    });
  };

  const { values, errors, handleChange, handleSubmit, setFieldValue, touched } =
    useFormik({
      initialValues: {
        firstname: "",
        lastname: "",
        date_of_birth: "",
        gender: "",
        address: "",
        email: "",
        phone_number: "",
      },
      validationSchema: profileValidator,
      // onSubmit: handleOnSubmit,
    });

    console.log(errors)

  useEffect(() => {
    setFieldValue("firstname", profile?.gottenUser?.firstname);
    setFieldValue("lastname", profile?.gottenUser?.lastname);
    setFieldValue("date_of_birth", profile?.gottenUser?.date_of_birth);
    setFieldValue("gender", profile?.gottenUser?.gender);
    setFieldValue("address", profile?.gottenUser?.address);
    setFieldValue("email", profile?.gottenUser?.email);
    setFieldValue("phone_number", profile?.gottenUser?.phone_number);
  }, [profile]);

  return (
    <>
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
            <img src={profile?.gottenUser?.profile_picture?.url} alt={""} />
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
              value={values.firstname}
              name={"firstname"}
              onChange={handleChange}
              errorText={touched.firstname && errors.firstname}
              error={touched.firstname && errors.firstname}
            />
          </div>
          <div style={{ width: "48%" }}>
            <InputContainer
              width={"48%"}
              label={"Last Name"}
              placeHolder={"Enter Last Name"}
              value={values.lastname}
              name={"lastname"}
              onChange={handleChange}
              errorText={touched.lastname && errors.lastname}
              error={touched.lastname && errors.lastname}
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
              value={values.date_of_birth}
              name={"date_of_birth"}
              onChange={handleChange}
              errorText={touched.date_of_birth && errors.date_of_birth}
              error={touched.date_of_birth && errors.date_of_birth}
            />
          </div>
          <div style={{ width: "48%" }}>
            <InputContainer
              width={"48%"}
              label={"Gender"}
              placeHolder={"Enter Gender"}
              value={values.gender}
              name={"gender"}
              onChange={handleChange}
              errorText={touched.gender && errors.gender}
              error={touched.gender && errors.gender}
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
              value={values.address}
              name={"address"}
              onChange={handleChange}
              errorText={touched.address && errors.address}
              error={touched.address && errors.address}
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
              value={values.email}
              name={"email"}
              onChange={handleChange}
              errorText={touched.email && errors.email}
              error={touched.email && errors.email}
            />
          </div>
          <div style={{ width: "48%" }}>
            <InputContainer
              width={"48%"}
              label={"Phone Number"}
              placeHolder={"Enter Phone Number"}
              value={values.phone_number}
              name={"phone_number"}
              onChange={handleChange}
              errorText={touched.phone_number && errors.phone_number}
              error={touched.phone_number && errors.phone_number}
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
          <p style={{ marginLeft: "20px", cursor: "pointer" }}>
            Change Password
          </p>
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
            Add an extra layer of security to your account using an
            authenticator app
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
    </>
  );
};

export { ProfileSetting };
