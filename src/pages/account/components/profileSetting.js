import { useEffect } from "react";
import { useFormik } from "formik";
import { EditButton } from ".";
import {
  useGetResquest,
  usePostRequest,
  usePatchRequest,
} from "../../../api/useRequestProcessor";

import { profileValidator } from "./profileValidation";
import { ButtonContainer, InputContainer } from "../../../containers";
import { Container, Title, Profile } from "./styles";
import { Input } from "../../../components";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

const ProfileSetting = () => {

  const { go } = useHistory()
  const { mutate: editDp } = usePostRequest("/users/edit-dp", "editDp");
  const { mutate: profileDp } = usePatchRequest(
    "/users/edit-account",
    "profileDp"
  );
  const { data: profile } = useGetResquest(
    "/users/view-user-profile",
    "profile"
  );

  const uploadFile = (e) => {
    const file = e.target.files[0];

    let data = new FormData();
    data.append("profile_image", file);

    editDp(data, {
      onSuccess: (res) => {
        go(0)
        toast("Profile photo updated successfully!", { type: "success" });
      },
    });
  };

  const handleProfileSubmit = () => {
    const payload = {
      firstname: values.firstname,
      lastname: values.lastname,
      date_of_birth: values.date_of_birth,
      gender: values.gender,
      address: values.address,
      // email: values.email,
      phone_number: values.phone_number,
      next_of_kin: {
        fullname: values.next_of_kin_fullname,
        phone_number: values.next_of_kin_phone_number,
        email: values.next_of_kin_email,
        gender: values.next_of_kin_gender,
        relationship: values.next_of_kin_relationship,
      },
    };

    profileDp(payload, {
      onSuccess: (res) => {
        toast("Profile updated successfully!", { type: "success" })
      },
    });
  };

  const { values, errors, handleChange, handleSubmit, touched, setValues } =
    useFormik({
      initialValues: {
        firstname: "",
        lastname: "",
        date_of_birth: "",
        gender: "",
        address: "",
        email: "",
        phone_number: "",
        next_of_kin_fullname: "",
        next_of_kin_phone_number: "",
        next_of_kin_email: "",
        next_of_kin_gender: "",
        next_of_kin_relationship: "",
      },
      validationSchema: profileValidator,
      onSubmit: handleProfileSubmit,
    });

  useEffect(() => {

    setValues(prevState => ({
      ...prevState,
      "firstname": profile?.gottenUser?.firstname ?? "",
      "lastname": profile?.gottenUser?.lastname ?? "",
      "date_of_birth": profile?.gottenUser?.date_of_birth ? new Date(profile?.gottenUser?.date_of_birth).getFullYear() + "-0" + (new Date(profile?.gottenUser?.date_of_birth).getMonth() + 1) + "-0" + new Date(profile?.gottenUser?.date_of_birth).getDate() : "",
      "gender": profile?.gottenUser?.gender ?? "",
      "address": profile?.gottenUser?.address ?? "",
      "email": profile?.gottenUser?.email ?? "",
      "phone_number": profile?.gottenUser?.phone_number ?? "",
      "next_of_kin_fullname": profile?.gottenUser?.next_of_kin?.fullname ?? "",
      "next_of_kin_phone_number": profile?.gottenUser?.next_of_kin?.phone_number ?? "",
      "next_of_kin_email": profile?.gottenUser?.next_of_kin?.email ?? "",
      "next_of_kin_gender": profile?.gottenUser?.next_of_kin?.gender ?? "",
      "next_of_kin_relationship": profile?.gottenUser?.next_of_kin?.relationship ?? "",
    }))
  }, [profile, setValues]);

  useEffect(() => {
    //console.log({ values })
  }, [values])

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
            style={{ cursor: "pointer" }}
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
              type={"date"}
              onChange={handleChange}
              errorText={touched.date_of_birth && errors.date_of_birth}
              error={touched.date_of_birth && errors.date_of_birth}
            />
          </div>
          <div style={{ width: "48%", display: "flex", flexDirection: "column" }}>
            <Input.Label>Gender</Input.Label>
            <select required value={values.gender} name={"gender"} onChange={handleChange} style={{ marginTop: 10, height: 50, padding: 10, borderRadius: 8 }}>
              <option disabled value="">Select Gender</option>
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
              <option value={"others"}>Rather not say</option>
            </select>
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
              disabled
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
              disabled
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
        {/* <div
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
        </div> */}
        {/* <br />
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
        </div> */}
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
              value={values.next_of_kin_fullname}
              name={"next_of_kin_fullname"}
              onChange={handleChange}
            />
          </div>
          <div style={{ width: "48%" }}>
            <InputContainer
              width={"48%"}
              label={"Phone Number"}
              placeHolder={"Enter Phone Number"}
              value={values.next_of_kin_phone_number}
              name={"next_of_kin_phone_number"}
              onChange={handleChange}
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
              value={values.next_of_kin_email}
              name={"next_of_kin_email"}
              onChange={handleChange}
            />
          </div>
          <div style={{ width: "48%" }}>
            <InputContainer
              width={"48%"}
              label={"Gender"}
              placeHolder={"Enter Gender"}
              value={values.next_of_kin_gender}
              name={"next_of_kin_gender"}
              onChange={handleChange}
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
              value={values.next_of_kin_relationship}
              name={"next_of_kin_relationship"}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
      </Container>

      <ButtonContainer onClick={handleSubmit} width="198px">
        Save Changes
      </ButtonContainer>
    </>
  );
};

export { ProfileSetting };
