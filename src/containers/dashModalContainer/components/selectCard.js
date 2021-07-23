import React, { useState } from "react";

import { ButtonContainer } from "../../../containers";

import { SelectType, AddCardDetails } from "../style";

const SelectCard = ({setCurrentId}) => {
  const [select, setSelect] = useState(false);

  return (
    <div>
      <h3
        style={{
          fontSize: "36px",
          color: "#149A9B",
          paddingBottom: "5px",
          marginTop: "20px",
        }}
      >
        Select Card
      </h3>
      <SelectType
        onClick={() => setSelect(false)}
        style={{ background: select === false ? "#45c2c618" : "" }}
      >
        {select === false ? (
          <img src={"/assets/svg/modal/check.svg"} alt={""} />
        ) : (
          <></>
        )}
        <img
          style={{ marginLeft: "10px" }}
          src={"/assets/svg/modal/master.svg"}
          alt={""}
        />
        <p>**** **** **** 3947</p>
      </SelectType>
      <SelectType
        onClick={() => setSelect(true)}
        style={{ background: select ? "#45c2c618" : "" }}
      >
        {select ? <img src={"/assets/svg/modal/check.svg"} alt={""} /> : <></>}
        <img
          style={{ marginLeft: "10px" }}
          src={"/assets/svg/modal/visacard.svg"}
          alt={""}
        />
        <p>**** **** **** 3947</p>
      </SelectType>
      <AddCardDetails>
        <img src={"/assets/svg/modal/add.svg"} alt={""} />
        <p>Add New Card</p>
      </AddCardDetails>

      <div style={{ marginTop: "160px" }}>
        <ButtonContainer onClick={()=>setCurrentId(3)} width={"100%"}>Continue</ButtonContainer>
      </div>
    </div>
  );
};

export { SelectCard };
