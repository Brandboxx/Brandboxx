import { Logo } from "../../../components";

import { Container, LogoCont } from "./style";

const AuthLayout = ({ text, children }) => {
  return (
    <Container>
      <main>
        <LogoCont>
          <Logo status={"alternate"} />
        </LogoCont>
        <div>
          <h1>
            {text} to <br />
            start saving
          </h1>
          <p>
            Lectus tortor faucibus arcu ipsum nascetur enim
            <br /> nulla. Adipiscing congue enim id mattis velit.
          </p>
        </div>
      </main>

      <aside>{children}</aside>
    </Container>
  );
};

export { AuthLayout };
