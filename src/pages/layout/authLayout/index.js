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
            {(text.toLowerCase()).includes("sign") ? <>Hi there, come with us on this journey to an easy, <br />secure and safe saving experience.</> : <>Welcome back! Enter your password and <br />email address to continue saving.</>}
          </p>
        </div>
      </main>

      <aside>{children}</aside>
    </Container>
  );
};

export { AuthLayout };
