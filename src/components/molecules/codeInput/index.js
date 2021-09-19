import React from "react";

import { Container, Label } from "./style";

const CodeInput = ({ otp, handleChange }) => {

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
