import React, { useState } from "react";

import { Container, Label } from "./style";

const CodeInput = ({ number }) => {
  const [otp, setOpt] = useState(new Array(number).fill(""));

  const handleChange = (e, index) => {
    if (isNaN(e.value)) return false;

    setOpt([...otp.map((d, idx) => (idx === index ? e.value : d))]);

    if (e.nextSibling) {
      e.nextSibling.focus();
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <Label>Verification Number</Label>
      <Container>
        {otp?.map((otp, i) => (
          <input
            maxLength="1"
            type="text"
            name="otp"
            key={i}
            value={otp}
            onChange={(e) => handleChange(e.target, i)}
            onFocus={(e) => e.target.select()}
          />
        )) ?? []}
      </Container>
    </div>
  );
};

export { CodeInput };
