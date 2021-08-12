import { useState } from "react";
import styled from "styled-components/macro";

import { AccountTabs, Toast } from "../../components";
import { MainLayout } from "../../pages";
import { ModalContainer } from "./components/modal";

import { Header } from "../pocketPlans/style";

const Account = () => {
  const [modal, setModal] = useState(false);
  const [toast, setToast] = useState(false);

  const saveChanges = () => {
    setToast({
      header: "Changes Saved",
      message: "You have successfully made changes on your profile"
    })

    setTimeout(() => {
      setToast(null)
    }, 5000);
  }

  return (
    <>
      {modal ? <ModalContainer setModal={setModal} /> : null}
      {toast ? <Toast message={toast} setToast={setToast}/> : null}
      <MainLayout>
        <Container>
          <Header>
            <main>
              <h1>My Account</h1>
            </main>
            <img src={"/assets/svg/header/notification.svg"} alt={""} />
          </Header>
          <AccountTabs setModal={setModal} saveChanges={saveChanges}/>
        </Container>
      </MainLayout>
    </>
  );
};

const Container = styled.div`
  padding: 35px 40px;
`;

export { Account };
