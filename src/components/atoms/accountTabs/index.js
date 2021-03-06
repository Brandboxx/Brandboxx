import { useState } from "react";
import { Container, Tabs, Options } from "./style";

import {
  ProfileSetting,
  CardBank,
  ContactUs,
} from "../../../pages/account/components";

const AccountTabs = ({ setModal }) => {
  const tabs = [
    { id: 1, tab: "Profile Setting", component: <ProfileSetting /> },
    {
      id: 2,
      tab: "Card & Bank",
      component: <CardBank setModal={setModal} />,
    },
    { id: 3, tab: "Contact Us", component: <ContactUs /> },
  ];

  const [currentId, setCurrentId] = useState(1);

  const getCurrentTab = (id) => {
    setCurrentId(id);
  };

  return (
    <>
      <Container>
        <Tabs>
          {tabs.map((tab) => (
            <Options
              key={tab.id}
              currentId={currentId}
              tab={tab.id}
              onClick={() => getCurrentTab(tab.id)}
            >
              {tab.tab}
            </Options>
          ))}
        </Tabs>
      </Container>
      {tabs.map((tab, i) => (
        <div key={i}>{currentId === tab.id && tab.component}</div>
      ))}
    </>
  );
};

export { AccountTabs };
  